// ProofStack.tsx — Visual stack of credibility markers.

import { siteConfig } from "@/config/site";

const ProofStack = () => {
  const { proof } = siteConfig;

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {proof.yearsInBusiness && (
        <div className="rounded-3xl border border-white/60 bg-white/80 p-4 text-center shadow-card">
          <p className="text-3xl font-semibold text-slate-900">{proof.yearsInBusiness}</p>
          <p className="text-sm uppercase tracking-wide text-slate-500">In business</p>
        </div>
      )}
      {proof.credentials && proof.credentials.length > 0 && (
        <div className="rounded-3xl border border-white/60 bg-white/80 p-4 shadow-card">
          <p className="text-sm uppercase tracking-wide text-slate-500">Credentials</p>
          <ul className="mt-2 space-y-1 text-slate-900">
            {proof.credentials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {proof.guarantees && proof.guarantees.length > 0 && (
        <div className="rounded-3xl border border-white/60 bg-white/80 p-4 shadow-card">
          <p className="text-sm uppercase tracking-wide text-slate-500">Guarantees</p>
          <ul className="mt-2 space-y-1 text-slate-900">
            {proof.guarantees.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProofStack;
