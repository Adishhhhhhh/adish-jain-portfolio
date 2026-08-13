// The three supports around the seven calls.
//
//   TRIAGE  one worked diagnosis, run in order, stopping at the first break
//   READS   the analytical panel attached to three produced ads in the Library
//   LOOP    the weekly rhythm, as the closer
//   ASKED   two questions that turn up on applications, answered short
//
// Rules: no em dashes, no contrast negation.

// ── Triage ────────────────────────────────────────────────────────────────
// Runs top down and stops at the first number that is off. Most of the value
// is in the checks that never run.

export type TriageStep = {
  n: string;
  question: string;
  /** the numbers being read at this step */
  reading: string[];
  verdict: string;
  state: "pass" | "stop" | "skipped";
};

export const TRIAGE_TITLE = "One account, diagnosed in order.";

export const TRIAGE_LEAD =
  "CPA is $86 against a $52 target and the client wants new creative. The procedure runs top down and stops at the first number that is off, which means most of these checks never run.";

export const TRIAGE: TriageStep[] = [
  {
    n: "01",
    question: "Is the primary number actually off?",
    reading: ["CPA $86", "target $52", "65% over"],
    verdict: "Off target. Keep going.",
    state: "pass",
  },
  {
    n: "02",
    question: "Are the ad metrics off, measured against this account's own average?",
    reading: [
      "Hook 27% vs 24% avg",
      "Hold 8.1% vs 7.4% avg",
      "Outbound CTR 2.9% vs 2.6% avg",
    ],
    verdict:
      "Every one is above the account's own average. The ad is doing its job, so the break is after the click.",
    state: "pass",
  },
  {
    n: "03",
    question: "Are the funnel ratios off?",
    reading: [
      "Link click to landing page view: 71%",
      "the bar is 80% or better",
      "add to cart 9.4%, healthy",
    ],
    verdict:
      "Stop here. Roughly 29% of paid clicks never reach the page, which is a load-speed or redirect fault. No creative fixes that, and the real number comes from Shopify or Clarity rather than Ads Manager.",
    state: "stop",
  },
  {
    n: "04",
    question: "Is AOV or the offer the constraint?",
    reading: ["not reached"],
    verdict: "Never ran.",
    state: "skipped",
  },
  {
    n: "05",
    question: "Did the ad buy the wrong people?",
    reading: ["not reached"],
    verdict: "Never ran.",
    state: "skipped",
  },
];

export const TRIAGE_CLOSE =
  "The brief that came in asked for new creative. The diagnosis says the creative is the strongest part of this account, and a third of the traffic it bought is being lost between the click and the page.";

// ── Reads on my own ads ───────────────────────────────────────────────────
// The panel that cannot be borrowed, because it only works if you hold both
// the creative intent and the delivery mechanics for this specific asset.

export type CreativeRead = {
  id: string;
  brand: string;
  name: string;
  awareness: string;
  poster: string;
  href: string;
  /** what the asset was engineered to do, in one breath */
  builtTo: string;
  /** the prediction, committed to before any data exists */
  expect: string[];
  /** the falsifier and what it changes */
  changesMyMind: string;
};

export const READS_TITLE = "The same reading, on three ads from this Library.";

export const READS_LEAD =
  "Each of these commits to a prediction before the spend exists, and names the number that would prove it wrong. A prediction that cannot fail is decoration.";

export const READS: CreativeRead[] = [
  {
    id: "ph-walk-shorter",
    brand: "PetHonesty",
    name: "The Walk That Keeps Getting Shorter",
    awareness: "Problem aware",
    poster: "/assets/posters/The-Walk-That-Keeps-Getting-Shorter.jpg",
    href: "/ad/ph-walk-shorter",
    builtTo:
      "Opens on eight months of walking-app data and withholds the product until the diagnosis has landed. It is built to meet an owner who already noticed the decline and filed it under aging.",
    expect: [
      "Frequency near 1, because a problem-led open retrieves into colder pockets",
      "ROAS below the product-aware ads in the same account, and that is the design working",
      "Hook rate carrying the asset, since the data screenshot is the entire stop",
    ],
    changesMyMind:
      "Frequency past 2 while ROAS stays flat means the problem-lead is landing in the same pocket as everything else, so I rebuild it against a different belief instead of re-hooking it. A collapsed hook rate with the hold intact means only the screenshot failed, and the first three seconds get rewritten while the body stays untouched.",
  },
  {
    id: "ng-coffee-meth",
    brand: "NeuroGum",
    name: "Caffeine and Meth Hit the Same Pathway",
    awareness: "Problem aware",
    poster: "/assets/posters/Coffee-and-Meth-Hit-the-Same-Brain-Pathway.jpg",
    href: "/ad/ng-coffee-meth",
    builtTo:
      "Leads on a receptor claim that reframes the category before the product is named, so the pattern interrupt and the mechanism arrive in the same line.",
    expect: [
      "A hook rate well above account average, because the claim is genuinely arresting",
      "Hold rate as the number that decides it, since a claim this sharp stops people with no intention of buying gum",
      "CTR that needs reading against CPM, never alone",
    ],
    changesMyMind:
      "A high hook with a collapsing hold means the claim is pulling the wrong crowd, and the repair is the second beat rather than the first. High CTR against low CVR means the reframe over-promised, so I tighten the ad's specificity until it self-qualifies and I leave the lander alone.",
  },
  {
    id: "an-choosing-yourself",
    brand: "Ancient Nutrition",
    name: "The Choosing Self",
    awareness: "Product aware",
    poster: "/assets/posters/Choosing-Yourself.jpg",
    href: "/ad/an-choosing-yourself",
    builtTo:
      "Opens on a scheduling detail the buyer recognises instantly and sells an identity rather than a mechanism. It sits at the warm end of the rotation on purpose.",
    expect: [
      "The best reported ROAS of the three, because it closes rather than opens",
      "Frequency climbing faster than anything else in the account",
      "A spend ceiling that arrives early, since the pool it speaks to is small",
    ],
    changesMyMind:
      "If it reports 5× or better I still do not raise its budget, because that multiple is measuring harvest. Frequency is the number I act on: past 3 it is re-hitting a pool the openers stopped refilling, and the correct response is more cold problem-led work rather than more of this.",
  },
];

// ── The loop ──────────────────────────────────────────────────────────────

export type LoopNode = { day: string; label: string; detail: string };

export const LOOP_TITLE = "The week this runs on.";

export const LOOP_LEAD =
  "Different metrics move at different speeds, so reviewing them on one schedule guarantees over-reacting to some and under-reacting to others. The smaller the slice and the shorter the window, the less it is allowed to decide.";

// detail lines are kept short because they are rendered inside the diagram nodes
export const LOOP: LoopNode[] = [
  { day: "Mon", label: "Analyse", detail: "at ad-set level" },
  { day: "Mon", label: "Decide", detail: "kill / keep / scale" },
  { day: "Tue", label: "Direct", detail: "which gap?" },
  { day: "Tue", label: "Source", detail: "language + spend" },
  { day: "Tue", label: "Audit", detail: "four gates" },
  { day: "Wed", label: "Produce", detail: "survivors ×3" },
  { day: "Thu", label: "Launch", detail: "committed window" },
  { day: "Fri", label: "Sanity", detail: "delivery only" },
];

export const LOOP_CLOSE =
  "Launching Wednesday or Thursday is deliberate, since Monday and Tuesday are the weakest days in most accounts and the test should run through a weekend before Monday's read.";

// ── Two questions ─────────────────────────────────────────────────────────

export const ASKED_TITLE = "Two questions that come up, answered short.";

export const HYPOTHESIS_TEMPLATE = [
  { fixed: "We believe", blank: "persona" },
  { fixed: "does not buy because they believe", blank: "current belief" },
  { fixed: "If we", blank: "route to the new belief" },
  { fixed: "they will", blank: "action" },
  { fixed: "We know inside", blank: "window" },
  { fixed: "if", blank: "one primary metric" },
  { fixed: "clears", blank: "threshold set before launch" },
];

export type Asked = { q: string; a: string; bullets?: string[] };

export const ASKED: Asked[] = [
  {
    q: "A client asks for 10 ad concepts. What do you ask first?",
    a: "Ten is somebody's proposed solution, so the first job is finding the problem it was meant to solve. Three things decide the brief, and none of them is a creative question.",
    bullets: [
      "What is driving the request: out of winners, one winner fatiguing, or spend stalled at a ceiling?",
      "Contribution margin, AOV, and new-customer CAC, because without them I cannot tell you what working means",
      "Where spend currently sits across awareness stages, and what account frequency is, which decides whether you need reach or conversion",
      "What died recently, and what you concluded about why, since a wrong conclusion is more expensive than a dead test",
      "What can actually be produced inside the timeline, because ten concepts you cannot shoot is zero concepts",
    ],
  },
  {
    q: "What does your testing framework look like?",
    a: "That every decision is pre-committed instead of improvised. Each batch varies one thing at the concept layer, thresholds and duration are written before launch, one primary metric is nominated in advance, and kill, keep, and scale rules exist before any data does. An ad set holds one concept with three to five variations inside it, so Meta searches for the best expression of the concept instead of the concept riding on a single execution. Every test lands in a log with its hypothesis, its pre-committed threshold, its result, and whether the read was statistically real or directional only.",
  },
];
