import Link from "next/link";
import { TopBar } from "@/components/shell/TopBar";
import { SearchBarRow } from "@/components/shell/SearchBarRow";

export const metadata = { title: "Contact" };

// Notion section: Contact. Verbatim.

export default function ContactPage() {
  return (
    <>
      <TopBar active="overview" />
      <SearchBarRow query="Adish Jain" />

      <main className="mx-auto max-w-[760px] px-6 pb-20 pt-8">
        <p className="text-[12px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
          Contact
        </p>
        <h1 className="mt-1 text-[32px] font-bold leading-tight text-[var(--color-text-primary)]">
          Adish Jain
        </h1>
        <p className="mt-2 text-[16px] text-[var(--color-text-secondary)]">
          DTC Creative Strategist and Direct Response Copywriter. Mumbai, India,
          open to remote, hybrid, or relocation.
        </p>

        <dl className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-[var(--color-border-light)] bg-[var(--color-divider)] sm:grid-cols-2">
          <Row label="Email">
            <Link href="mailto:adish9504@gmail.com" className="meta-link font-semibold">
              adish9504@gmail.com
            </Link>
          </Row>
          <Row label="Upwork">
            <Link
              href="https://www.upwork.com/freelancers/~016cb0f64c1b04bf9d?mp_source=share"
              className="meta-link font-semibold"
            >
              View Upwork profile
            </Link>
          </Row>
          <Row label="Availability">
            Full-time roles, contract projects, or freelance engagements.
          </Row>
          <Row label="Response time">
            Email first. I respond within 24 hours.
          </Row>
        </dl>
      </main>
    </>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="bg-[var(--color-surface)] px-4 py-3">
      <dt className="text-[12px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
        {label}
      </dt>
      <dd className="mt-1 text-[15px] text-[var(--color-text-primary)]">
        {children}
      </dd>
    </div>
  );
}
