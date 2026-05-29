import { TopBar } from "@/components/shell/TopBar";
import { SearchBarRow } from "@/components/shell/SearchBarRow";
import { AdvertiserHeader } from "@/components/shell/AdvertiserHeader";
import { WorkGrid } from "@/components/screen-2/WorkGrid";

export default function AdishJainPage() {
  return (
    <>
      <TopBar active="overview" />
      <SearchBarRow query="Adish Jain" />
      <AdvertiserHeader activeTab="ads" />
      <WorkGrid />
    </>
  );
}
