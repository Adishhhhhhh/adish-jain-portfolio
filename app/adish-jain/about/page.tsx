import Image from "next/image";
import { TopBar } from "@/components/shell/TopBar";
import { SearchBarRow } from "@/components/shell/SearchBarRow";
import { AdvertiserHeader } from "@/components/shell/AdvertiserHeader";
import { SITE } from "@/content/copy";

export const metadata = { title: "About" };

// Notion section: About. Background, Current Work, Self-Directed Education
// (books, practitioners, daily practice, the standing watch list), Why
// Creative Strategy. ("What I'm looking for" kept out for now.)

const BOOKS: { title: string; author: string }[] = [
  { title: "Breakthrough Advertising", author: "Eugene Schwartz" },
  { title: "Influence", author: "Robert Cialdini" },
  { title: "Ogilvy on Advertising", author: "David Ogilvy" },
  { title: "The Adweek Copywriting Handbook", author: "Joseph Sugarman" },
  { title: "DotCom Secrets", author: "Russell Brunson" },
];

const PRACTITIONERS: { name: string; focus?: string }[] = [
  { name: "Stefan Georgi", focus: "RMBC method, neurochemistry-based copy sequencing" },
  { name: "Fraser Cottrell", focus: "DTC creative strategy and paid social systems" },
  { name: "Dara Denney", focus: "performance creative and creative strategy frameworks" },
  { name: "Luke Iha", focus: "creative strategy and UGC production" },
  { name: "Matthew Volkwyn", focus: "DTC ad creative and direct response application" },
  { name: "Dan Koe", focus: "articulation, idea clarity, and systematic thinking" },
  { name: "Sarah Levinger" },
  { name: "Antonio Ventre" },
  { name: "Adam Taylor" },
  { name: "Spencer Pawliv" },
  { name: "Sam Piliero" },
  { name: "Blue Sense Digital" },
];

const WATCH_LIST: { category: string; brands: string[] }[] = [
  {
    category: "Health, Wellness and Supplements",
    brands: [
      "AG1 (Athletic Greens)", "Ritual", "Onnit", "Huel", "Ka'Chava", "Ryze",
      "Everyday Dose", "Heights", "Armra", "Feals", "Primal Herbs",
      "Happy Mammoth", "Gundry MD", "Hims", "Nooro", "PetLab Co.",
      "Zesty Paws", "Pup Labs", "Loop Earplugs", "Humantra",
      "The Better Menopause", "ReliefWave", "Chomps",
    ],
  },
  {
    category: "Skincare and Beauty",
    brands: [
      "Curology", "NuFACE", "ILIA", "Hi-Smile", "Blissy", "City Beauty",
      "Nailboo", "Qure Skincare", "Carpe", "Nuve Beauty", "Cocunat",
    ],
  },
  {
    category: "Food and Beverage",
    brands: ["Javvy Coffee", "Aloha", "Gruns", "Overnight Oats", "Space Goods"],
  },
  {
    category: "Pet",
    brands: ["The Farmer's Dog", "Furbo", "Catalyst Pet"],
  },
  {
    category: "Lifestyle, Apparel and Home",
    brands: [
      "Dr. Squatch", "The Oodie", "Vessi", "Fabletics", "HexClad", "BlendJet",
      "Casely", "Pura Vida", "Oliver Cabell", "TrulyFree", "Nanit", "Hatch",
    ],
  },
];

export default function AboutPage() {
  const brandCount = WATCH_LIST.reduce((n, g) => n + g.brands.length, 0);

  return (
    <>
      <TopBar active="overview" />
      <SearchBarRow query="Adish Jain" />
      <AdvertiserHeader activeTab="about" />

      <main className="mx-auto max-w-[1100px] px-6 pb-20 pt-8">
        {/* Background + current work */}
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
          </div>
        </section>

        {/* Self-directed education */}
        <section className="mt-14">
          <h2 className="text-[12px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
            Self-Directed Education
          </h2>
          <p className="mt-2 max-w-[760px] text-[16px] leading-relaxed text-[var(--color-text-primary)]">
            Ongoing self-directed education in direct response copywriting,
            consumer psychology, and DTC creative strategy.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-md border border-[var(--color-border-light)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)]">
              <h3 className="text-[15px] font-bold text-[var(--color-text-primary)]">
                Books studied
              </h3>
              <ul className="mt-3 space-y-2">
                {BOOKS.map((b) => (
                  <li key={b.title} className="text-[14px] leading-snug">
                    <span className="font-semibold text-[var(--color-text-primary)]">
                      {b.title}
                    </span>
                    <span className="text-[var(--color-text-secondary)]">
                      {" "}· {b.author}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-md border border-[var(--color-border-light)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)]">
              <h3 className="text-[15px] font-bold text-[var(--color-text-primary)]">
                Practitioners actively studied
              </h3>
              <ul className="mt-3 space-y-1.5">
                {PRACTITIONERS.map((p) => (
                  <li key={p.name} className="text-[14px] leading-snug">
                    <span className="font-semibold text-[var(--color-text-primary)]">
                      {p.name}
                    </span>
                    {p.focus && (
                      <span className="text-[var(--color-text-secondary)]">
                        {" "}· {p.focus}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-md border border-[var(--color-border-light)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)]">
            <h3 className="text-[15px] font-bold text-[var(--color-text-primary)]">
              Daily practice
            </h3>
            <ul className="mt-3 ml-5 list-disc space-y-2 text-[14px] leading-relaxed text-[var(--color-text-primary)]">
              <li>
                Auditing active DTC brand ad libraries across Meta and TikTok to
                reverse-engineer winning angles, identify creative fatigue
                patterns, and spot underexplored positioning
              </li>
              <li>
                Analyzing proven direct response assets from classic and
                contemporary campaigns to internalize persuasion structure, hook
                mechanics, and conversion sequencing
              </li>
              <li>
                Daily writing drills covering direct response scripts,
                storytelling, and cross-domain synthesis
              </li>
            </ul>
          </div>

          <details className="group mt-6 rounded-md border border-[var(--color-border-light)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4">
              <span>
                <span className="block text-[15px] font-bold text-[var(--color-text-primary)]">
                  The standing watch list ({brandCount}+ brands)
                </span>
                <span className="block text-[13px] text-[var(--color-text-secondary)]">
                  Brands studied regularly to track high-performing creative and
                  what is working across Meta ads right now
                </span>
              </span>
              <svg
                className="shrink-0 text-[var(--color-text-secondary)] transition-transform group-open:rotate-180"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </summary>
            <div className="border-t border-[var(--color-divider)] px-5 pb-5 pt-4">
              {WATCH_LIST.map((group) => (
                <div key={group.category} className="mb-4 last:mb-0">
                  <p className="text-[12px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
                    {group.category}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {group.brands.map((brand) => (
                      <span
                        key={brand}
                        className="rounded-full bg-[var(--color-surface-alt)] px-2.5 py-1 text-[12.5px] text-[var(--color-text-primary)]"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <p className="mt-4 text-[13px] text-[var(--color-text-secondary)]">
                And many more. The list is endless.
              </p>
            </div>
          </details>
        </section>

        {/* Why creative strategy */}
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
          <ul className="mt-2 ml-5 list-disc space-y-2 text-[16px] leading-relaxed text-[var(--color-text-primary)]">
            <li>
              Research depth: 200 to 500+ competitor ads audited and 100 to 200+
              reviews mined per product, so the creative knows the customer
              better than they know themselves
            </li>
            <li>
              Awareness and sophistication mapping: the right message for the
              right stage, at the claim level the market still believes
            </li>
            <li>
              Constraint-based ideation: systematic creativity inside the
              ideation equation, not random brainstorming
            </li>
            <li>
              An AI production system I built myself: Claude and Claude Code
              running a purpose-built skill library for research, brand
              context, scripting, and QA; Kling and Seedance for video
              generation; ElevenLabs for voice; Premiere Pro for the cut. 20-30
              assets per project versus 5-10 with traditional output
            </li>
            <li>
              Format diversity from one brief: the same research becomes VSLs,
              statics, advertorials, and hook variants, so no single lane
              fatigues the account
            </li>
            <li>
              Documented strategy on every asset: angle, ICP, and awareness call
              written down before production. This Library is that habit made
              public
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
