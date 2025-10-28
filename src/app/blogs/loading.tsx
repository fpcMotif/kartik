export default function Loading() {
  return (
    <output
      className="flex h-40 items-center justify-center"
      aria-label="Loading blogs"
    >
      <svg
        className="h-6 w-6 animate-spin text-gray-500"
        viewBox="0 0 24 24"
        fill="none"
      >
        <title>Loading spinner</title>
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
    </output>
  );
}
