import Image from "next/image";
import { TopBar } from "@/components/shell/TopBar";
import { SearchBarRow } from "@/components/shell/SearchBarRow";
import { AdvertiserHeader } from "@/components/shell/AdvertiserHeader";
import { SITE } from "@/content/copy";

export const metadata = { title: "About" };

// Notion section: About. Verbatim. Background, Current Work, Training, Why
// Creative Strategy. ("What I'm looking for" kept out for now.)

export default function AboutPage() {
  return (
    <>
      <TopBar active="overview" />
      <SearchBarRow query="Adish Jain" />
      <AdvertiserHeader activeTab="about" />

      <main className="mx-auto max-w-[1100px] px-6 pb-20 pt-8">
        <section className="grid grid-cols-1 gap-10 md:grid-cols-[280px_1fr] md:items-start">
          <div className="relative aspect-square overflow-hidden rounded-md bg-[var(--color-surface-alt)]">
            <Image
              src="/brand/Upwork Dp.jpeg"
              alt={SITE.advertiserName}
              fill
              sizes="280px"
              className="object-cover object-center"
              priority
            />
          </div>

          <div>
            <h2 className="text-[12px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
              Background
            </h2>
            <p className="mt-2 text-[16px] leading-relaxed text-[var(--color-text-primary)]">
              DTC creative strategist and direct response copywriter based in
              Mumbai, specializing in health and wellness brands.
            </p>

            <h2 className="mt-8 text-[12px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
              Current Work
            </h2>
            <ul className="mt-2 ml-5 list-disc space-y-1 text-[16px] leading-relaxed text-[var(--color-text-primary)]">
              <li>
                Building speculative portfolio case studies (PetHonesty, NeuroGum,
                MitoQ, Ancient Nutrition)
              </li>
              <li>Developing AI-augmented creative production systems</li>
              <li>
                Studying direct response psychology, neurochemical sequencing, and
                awareness-level targeting
              </li>
            </ul>

            <h2 className="mt-8 text-[12px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
              Training
            </h2>
            <ul className="mt-2 ml-5 list-disc space-y-1 text-[16px] leading-relaxed text-[var(--color-text-primary)]">
              <li>
                Self-directed study: Eugene Schwartz methodology, Stefan Georgi
                neurochemistry frameworks, Dan Koe articulation systems
              </li>
              <li>
                Daily creative practice: 3-round drill (Micro Story, Pyramid
                Principle, Cross-Domain Synthesis)
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-14 max-w-[760px]">
          <h2 className="text-[12px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
            Why Creative Strategy
          </h2>
          <p className="mt-3 text-[16px] leading-relaxed text-[var(--color-text-primary)]">
            I&apos;m drawn to creativity and fascinated by persuasion,
            specifically the mechanics of how ideas move people from indifference
            to action. Creative strategy sits at the intersection of psychology,
            storytelling, and systematic thinking. It&apos;s not art for
            art&apos;s sake. It&apos;s engineered communication that changes
            behavior.
          </p>
          <p className="mt-4 text-[16px] leading-relaxed text-[var(--color-text-primary)]">
            Most DTC brands die from creative exhaustion, not product failure.
            They launch with 5-10 ads. A few work. They scale those until
            performance decays. Then they scramble to produce more, but without
            systematic frameworks, they&apos;re just guessing louder.
          </p>
          <p className="mt-4 text-[16px] leading-relaxed text-[var(--color-text-primary)]">
            I solve the creative production problem through:
          </p>
          <ul className="mt-2 ml-5 list-disc space-y-1 text-[16px] leading-relaxed text-[var(--color-text-primary)]">
            <li>
              Research depth: know the customer better than they know themselves
            </li>
            <li>Awareness-level mapping: right message for the right stage</li>
            <li>
              AI-augmented velocity: 20-30 assets per project versus 5-10 with
              traditional output
            </li>
            <li>
              Constraint-based ideation: systematic creativity, not random
              brainstorming
            </li>
          </ul>
          <p className="mt-4 text-[16px] leading-relaxed text-[var(--color-text-primary)]">
            The brands winning on paid social aren&apos;t the ones with the best
            product. They&apos;re the ones who never run out of fresh, strategic
            creative.
          </p>
        </section>
      </main>
    </>
  );
}
