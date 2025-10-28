"use client";

export default function ErrorBoundary({ reset }: { reset: () => void }) {
  return (
    <div className="p-6 space-y-3">
      <p>Something went wrong.</p>
      <button type="button" onClick={reset} className="underline">
        Try again
      </button>
    </div>
  );
}
