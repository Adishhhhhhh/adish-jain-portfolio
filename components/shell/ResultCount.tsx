export function ResultCount({ count }: { count: number }) {
  // Matches the real Ad Library's "~N results" line.
  return (
    <div className="mx-auto max-w-[1400px] px-6 pt-6">
      <p className="text-[17px] font-bold text-[var(--color-text-primary)]">
        ~{count} results
      </p>
    </div>
  );
}
