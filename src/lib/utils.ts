// utils.ts — Shared helpers for styling, formatting, and validation.

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPhoneHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

export const formatSmsHref = (phone: string) => `sms:${phone.replace(/[^\d+]/g, "")}`;

export const truncate = (value: string, length = 140) =>
  value.length > length ? `${value.slice(0, length)}…` : value;

export const sanitizeTextInput = (value: string, maxLength: number) =>
  value
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, maxLength);

export const ensureHttpsUrl = (url: string) => {
  try {
    const parsed = new URL(url);
    return parsed.toString();
  } catch {
    throw new Error(`Invalid URL provided: ${url}`);
  }
};
