import { TopBar } from "@/components/shell/TopBar";
import { Hero } from "@/components/screen-1/Hero";

export default function HomePage() {
  return (
    <>
      <TopBar active="overview" />
      <Hero />
    </>
  );
}
