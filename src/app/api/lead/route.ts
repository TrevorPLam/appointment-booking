// api/lead — Handles lead submissions with sanitization, rate limiting, and optional Turnstile.

import { NextResponse } from "next/server";

import { siteConfig } from "@/config/site";
import { rateLimit } from "@/lib/rateLimit";
import { sanitizeTextInput } from "@/lib/utils";

const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 5;

const verifyTurnstile = async (token?: string) => {
  const { spamProtection } = siteConfig;
  if (!spamProtection.turnstileEnabled) return true;

  if (!spamProtection.turnstileSecretKey) {
    console.warn("Turnstile enabled but secret key missing. Rejecting request.");
    return false;
  }

  if (!token) return false;

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      secret: spamProtection.turnstileSecretKey,
      response: token,
    }),
  });

  const data = (await response.json()) as { success: boolean };
  return Boolean(data.success);
};

export async function POST(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for") ?? "unknown";
  const clientIp = forwardedFor.split(",")[0]?.trim() || "unknown";
  const limit = rateLimit(clientIp, MAX_REQUESTS, WINDOW_MS);

  if (!limit.success) {
    return NextResponse.json({
      success: false,
      error: "Too many submissions. Please try again shortly.",
    }, { status: 429 });
  }

  let payload: Record<string, string> | null = null;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON payload." }, { status: 400 });
  }

  const {
    name = "Guest",
    email = "",
    phone = "",
    serviceInterest = "",
    message = "",
    preferredContact = "",
    honeypotField,
    turnstileToken,
  } = payload ?? {};

  if (honeypotField) {
    return NextResponse.json({ success: false, error: "Spam detected." }, { status: 400 });
  }

  const turnstileValid = await verifyTurnstile(turnstileToken);
  if (!turnstileValid) {
    return NextResponse.json({ success: false, error: "Verification failed." }, { status: 400 });
  }

  const lead = {
    name: sanitizeTextInput(name, 80),
    email: sanitizeTextInput(email, 120),
    phone: sanitizeTextInput(phone, 40),
    serviceInterest: sanitizeTextInput(serviceInterest, 80),
    message: sanitizeTextInput(message, 500),
    preferredContact: sanitizeTextInput(preferredContact, 40),
    receivedAt: new Date().toISOString(),
  };

  try {
    if (siteConfig.leadRouting.webhookUrl) {
      await fetch(siteConfig.leadRouting.webhookUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(lead),
      });
    } else {
      console.log("Lead captured (no webhook configured)", lead);
    }
  } catch (error) {
    console.error("Failed to forward lead", error);
    return NextResponse.json({ success: false, error: "Lead forwarding failed." }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
