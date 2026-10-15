import type { GuideFaq } from "@/content/alternatives/types";

export function GuideFaq({ items }: { items: GuideFaq[] }) {
  return <div className="guide-faq">{items.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div>;
}

export function faqSchema(items: GuideFaq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
