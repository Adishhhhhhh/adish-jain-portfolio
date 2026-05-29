import { notFound } from "next/navigation";
import { TopBar } from "@/components/shell/TopBar";
import { SearchBarRow } from "@/components/shell/SearchBarRow";
import { AdvertiserHeader } from "@/components/shell/AdvertiserHeader";
import { CaseStudyRoom } from "@/components/case-study/CaseStudyRoom";
import type { Brand } from "@/content/types";
import { BRAND_META } from "@/content/types";

export default async function CampaignPage({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {
  const { brand } = await params;
  const isValid = brand in BRAND_META;
  if (!isValid) notFound();

  return (
    <>
      <TopBar active="case-studies" />
      <SearchBarRow query="Adish Jain" />
      <AdvertiserHeader activeTab="ads" />
      <CaseStudyRoom brand={brand as Brand} />
    </>
  );
}

export function generateStaticParams() {
  return Object.keys(BRAND_META).map((brand) => ({ brand }));
}
