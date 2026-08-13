// The analytical panel attached to three produced ads. This is the piece that
// cannot be borrowed from anyone's framework, because writing it requires
// holding the creative intent and the delivery mechanics for this exact asset.
//
// Each panel commits to a prediction and names the number that would falsify
// it. A prediction that cannot fail is decoration.

import Image from "next/image";
import Link from "next/link";
import {
  READS,
  READS_LEAD,
  READS_TITLE,
  type CreativeRead,
} from "@/content/strategy-supports";

export function CreativeReads() {
  return (
    <section
      id="reads"
      className="scroll-mt-[150px] overflow-hidden rounded-lg border border-[var(--color-border-light)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]"
    >
      <header className="border-b border-[var(--color-divider)] px-5 py-4">
        <h3 className="text-[19px] font-bold leading-snug tracking-tight text-[var(--color-text-primary)]">
          {READS_TITLE}
        </h3>
        <p className="mt-1.5 max-w-[68ch] text-[13px] leading-relaxed text-[var(--color-text-secondary)]">
          {READS_LEAD}
        </p>
      </header>

      <div className="flex flex-col">
        {READS.map((r, i) => (
          <ReadPanel key={r.id} read={r} first={i === 0} />
        ))}
      </div>
    </section>
  );
}

function ReadPanel({ read, first }: { read: CreativeRead; first: boolean }) {
  return (
    <article
      className={`flex flex-col gap-5 px-5 py-5 sm:flex-row ${
        first ? "" : "border-t border-[var(--color-divider)]"
      }`}
    >
      {/* the asset */}
      <div className="shrink-0">
        <Link
          href={read.href}
          className="group block w-[132px] overflow-hidden rounded-md border border-[var(--color-border-light)]"
        >
          <div className="relative aspect-[9/16] w-full bg-[var(--color-surface-alt)]">
            <Image
              src={read.poster}
              alt={`${read.name}, ${read.brand}`}
              fill
              sizes="132px"
              className="object-cover transition-transform group-hover:scale-[1.03]"
            />
          </div>
        </Link>
        <p className="mt-2 w-[132px] text-[11px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
          {read.brand}
        </p>
        <p className="w-[132px] text-[12.5px] font-bold leading-snug text-[var(--color-text-primary)]">
          {read.name}
        </p>
        <span className="mt-1.5 inline-block rounded-full bg-[var(--color-pill-bg)] px-2 py-0.5 text-[10.5px] font-medium text-[var(--color-pill-text)]">
          {read.awareness}
        </span>
      </div>

      {/* the read */}
      <div className="flex min-w-0 flex-col gap-3.5">
        <Field label="Built to" tone="neutral">
          {read.builtTo}
        </Field>

        <div>
          <FieldLabel tone="blue">So I&apos;d expect</FieldLabel>
          <ul className="mt-1.5 flex flex-col gap-1.5">
            {read.expect.map((e) => (
              <li
                key={e}
                className="flex gap-2 text-[13.5px] leading-relaxed text-[var(--color-text-primary)]"
              >
                <span
                  aria-hidden
                  className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-meta-blue)]"
                />
                {e}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-md border border-dashed border-[var(--color-border)] bg-[var(--color-surface-alt)] px-3.5 py-3">
          <FieldLabel tone="muted">What changes my mind</FieldLabel>
          <p className="mt-1.5 text-[13.5px] leading-relaxed text-[var(--color-text-secondary)]">
            {read.changesMyMind}
          </p>
        </div>
      </div>
    </article>
  );
}

function Field({
  label,
  tone,
  children,
}: {
  label: string;
  tone: "neutral" | "blue";
  children: React.ReactNode;
}) {
  return (
    <div>
      <FieldLabel tone={tone === "blue" ? "blue" : "muted"}>{label}</FieldLabel>
      <p className="mt-1.5 text-[13.5px] leading-relaxed text-[var(--color-text-primary)]">
        {children}
      </p>
    </div>
  );
}

function FieldLabel({
  tone,
  children,
}: {
  tone: "blue" | "muted";
  children: React.ReactNode;
}) {
  const c =
    tone === "blue"
      ? "text-[var(--color-meta-blue)]"
      : "text-[var(--color-text-tertiary)]";
  return (
    <span
      className={`text-[10.5px] font-bold uppercase tracking-[0.07em] ${c}`}
    >
      {children}
    </span>
  );
}
