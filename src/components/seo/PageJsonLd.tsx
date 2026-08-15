interface JsonLdFaq {
  question: string;
  answer: string;
}

interface JsonLdHowToStep {
  name: string;
  text: string;
}

interface PageJsonLdProps {
  url: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  faqs?: JsonLdFaq[];
  howTo?: {
    name: string;
    description: string;
    steps: JsonLdHowToStep[];
  };
  about?: string[];
}

function safeJson(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function PageJsonLd({
  url,
  title,
  description,
  datePublished,
  dateModified,
  faqs = [],
  howTo,
  about = [],
}: PageJsonLdProps) {
  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      datePublished,
      dateModified,
      isPartOf: { "@id": "https://bestaiagent.in/#website" },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: [".aeoDirectAnswer"],
      },
      about: about.map((name) => ({ "@type": "Thing", name })),
    },
  ];

  if (faqs.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  if (howTo?.steps.length) {
    graph.push({
      "@type": "HowTo",
      name: howTo.name,
      description: howTo.description,
      step: howTo.steps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.name,
        text: step.text,
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: safeJson({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
