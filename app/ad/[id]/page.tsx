import { notFound } from "next/navigation";
import { TopBar } from "@/components/shell/TopBar";
import { SearchBarRow } from "@/components/shell/SearchBarRow";
import { AdvertiserHeader } from "@/components/shell/AdvertiserHeader";
import { AdDetailsModal } from "@/components/modal/AdDetailsModal";
import { findConcept, ALL_CONCEPTS } from "@/content";

// Next.js 16: params is a Promise and must be awaited
// (per node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/page.md).
export default async function AdDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const concept = findConcept(id);
  if (!concept) notFound();

  return (
    <>
      {/* Page chrome stays mounted behind the modal for context */}
      <TopBar active="overview" />
      <SearchBarRow query="Adish Jain" />
      <AdvertiserHeader activeTab="ads" />
      <div className="mx-auto max-w-[1400px] px-6 pt-6">
        <p className="text-[14px] text-[var(--color-text-secondary)]">
          Viewing one of {ALL_CONCEPTS.length} concepts in the library.
        </p>
      </div>

      <AdDetailsModal concept={concept} standalone />
    </>
  );
}

// Pre-generate every concept route so navigation feels instant.
export function generateStaticParams() {
  return ALL_CONCEPTS.map((c) => ({ id: c.id }));
}
