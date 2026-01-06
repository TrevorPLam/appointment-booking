import Link from "next/link";

const NotFound = () => (
  <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-4 text-center">
    <h1 className="text-5xl font-semibold text-slate-900">Page not found</h1>
    <p className="text-slate-600">The page you tried to reach doesn&apos;t exist. Let&apos;s get you back on track.</p>
    <Link
      href="/"
      className="rounded-full bg-brand-primary px-6 py-3 font-semibold text-white shadow-card"
    >
      Return home
    </Link>
  </div>
);

export default NotFound;
