import { notFound } from "next/navigation";
import { AdDetailsModal } from "@/components/modal/AdDetailsModal";
import { findConcept } from "@/content";

// Intercepting route: when "See ad details" is clicked from within the app, this
// overlays the Ad Details modal on top of the current page (grid stays mounted,
// scroll position preserved). Hard nav / refresh / shared link falls through to
// the standalone /ad/[id] page instead.
export default async function InterceptedAdModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const concept = findConcept(id);
  if (!concept) notFound();

  return <AdDetailsModal concept={concept} />;
}
