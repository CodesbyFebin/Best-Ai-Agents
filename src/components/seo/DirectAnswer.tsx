interface DirectAnswerSource {
  label: string;
  url: string;
}

interface DirectAnswerProps {
  question: string;
  answer: string;
  sources?: DirectAnswerSource[];
}

export function DirectAnswer({
  question,
  answer,
  sources = [],
}: DirectAnswerProps) {
  return (
    <div
      className="directAnswer aeoDirectAnswer"
      data-direct-answer="true"
      itemScope
      itemType="https://schema.org/Question"
    >
      <meta itemProp="name" content={question} />
      <span>Direct answer</span>
      <div
        itemProp="acceptedAnswer"
        itemScope
        itemType="https://schema.org/Answer"
      >
        <p itemProp="text">
          {answer}
          {sources.length ? (
            <sup aria-label="Sources">
              {sources.map((source, index) => (
                <a
                  href={source.url}
                  key={`${source.url}-${index}`}
                  rel="noreferrer"
                  title={source.label}
                >
                  [{index + 1}]
                </a>
              ))}
            </sup>
          ) : null}
        </p>
      </div>
    </div>
  );
}
