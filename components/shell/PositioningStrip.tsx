// Orientation strip between the advertiser header and the result count:
// tells a first-time visitor what the cards contain and where the rest of
// the library lives. Refinement spec v2, Change 4.
import Link from "next/link";
import { SCREEN_2 } from "@/content/copy";

export function PositioningStrip() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 pt-4">
      <div className="rounded-md border-l-[3px] border-[var(--color-meta-blue)] bg-[var(--color-surface-alt)] px-4 py-3">
        <p className="text-[14px] font-semibold leading-snug text-[var(--color-text-primary)]">
          {SCREEN_2.positioningOne}
        </p>
        <p className="mt-1 text-[14px] leading-snug text-[var(--color-text-secondary)]">
          <Link
            href="/case-studies"
            className="hover:underline focus-visible:underline"
          >
            {SCREEN_2.positioningTwo}
          </Link>
        </p>
      </div>
    </div>
  );
}
