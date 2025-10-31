"use client";

type ContentParagraphProps = {
  children: React.ReactNode;
  className?: string;
};

export default function ContentParagraph({
  children,
  className = "",
}: ContentParagraphProps) {
  return (
    <p
      className={`text-base sm:text-lg text-body-muted leading-relaxed ${className}`}
      style={{ letterSpacing: "-0.02em" }}
    >
      {children}
    </p>
  );
}
