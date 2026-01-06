// JsonLd.tsx — Renders arbitrary JSON-LD payloads for SEO.

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
  id?: string;
}

const JsonLd = ({ data, id }: JsonLdProps) => (
  <script
    id={id}
    type="application/ld+json"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export default JsonLd;
