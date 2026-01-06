// FAQ.tsx — Accordion-style FAQ list rendered as static cards for simplicity.

interface FAQItem {
  q: string;
  a: string;
}

const FAQ = ({ items }: { items: FAQItem[] }) => (
  <div className="space-y-4">
    {items.map((item) => (
      <details
        key={item.q}
        className="group rounded-3xl border border-slate-200 bg-white p-6"
        open
      >
        <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900">
          {item.q}
        </summary>
        <p className="mt-3 text-slate-600">{item.a}</p>
      </details>
    ))}
  </div>
);

export default FAQ;
