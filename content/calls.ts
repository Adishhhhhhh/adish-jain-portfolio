// The Strategic Approach section, rebuilt around decisions instead of concepts.
//
// Selection filter, applied ruthlessly: a call earns a slot only when the
// obvious move is wrong. If a competent reader's gut already lands correctly,
// the exhibit teaches them nothing.
//
// Every exhibit is a paired panel. Left is the move most accounts make, right
// is the call, and one line of mechanism sits underneath as the reason.
// Frameworks never appear as the exhibit, only as the reason for a call.
//
// Sourced from Strategy (CS). Rules: no em dashes, no contrast negation.

export type Call = {
  id: string;
  n: string;
  /** the title is the call itself, phrased as the thing most people get wrong */
  title: string;
  /** which of Adish's own ads this is argued on, if any */
  appliedTo?: string;
  obvious: string;
  mine: string;
  /** one line. the reason the call is right */
  mechanism: string;
  /** optional diagram slot */
  diagram?: "sequence" | "headroom" | "margin" | "container" | "gates";
};

export const CALLS_INTRO = "Seven calls where the obvious move is the wrong one.";

export const CALLS_LEAD =
  "Knowing the frameworks is table stakes, since anyone can watch the same videos. What decides an account is the call you make when the numbers point the wrong way. So every exhibit here ends in a decision, argued on the ads in this Library.";

export const CALLS_DISCLOSURE =
  "Simulated numbers on real creative. The ads are the ones in this Library, the figures are invented and sized to DTC supplement economics, and the reasoning is what I would apply to a live account.";

export const CALLS: Call[] = [
  {
    id: "sequence",
    n: "01",
    title: "The ad you'd cut is the one paying for the rest.",
    appliedTo: "PetHonesty Dog-to-Dog · NeuroGum Office Authority",
    diagram: "sequence",
    obvious:
      "Dog-to-Dog is running 0.7× after three weeks. Office Authority is at 6.4×. Cut the loser, move its budget to the winner.",
    mine:
      "Keep Dog-to-Dog on and stop funding Office Authority. Dog-to-Dog runs at frequency 1.1, so it is still finding people nobody has reached. Office Authority sits at 3.6 and is closing buyers that Dog-to-Dog opened.",
    mechanism:
      "Delivery is a sequence and the dashboard credits the last click, so reported ROAS climbs toward most-aware while frequency climbs with it. Judge at the ad set.",
  },
  {
    id: "headroom",
    n: "02",
    title: "Your best ad will not take more budget.",
    appliedTo: "NeuroGum Caffeine and Meth",
    diagram: "headroom",
    obvious:
      "Caffeine and Meth is the account's best performer at 4.1×. Double its budget and take the revenue.",
    mine:
      "Check frequency before touching the budget. At 1.2 I raise about 20% every second day. At 3.4 I leave it alone and spend the money on cold reach, because the multiple is measuring harvest.",
    mechanism:
      "Total profit tracks ROAS multiplied by the spend a concept can hold. A high multiple on a saturated pocket has no ceiling left to buy.",
  },
  {
    id: "margin",
    n: "03",
    title: "The same 3× is a win and a disaster.",
    diagram: "margin",
    obvious:
      "The account is at 3.0× ROAS. That clears the 2.5× the client asked for, so the creative is working and we scale.",
    mine:
      "I ask for contribution margin before I read the number. At 40% margin, 3.0× is profit. At 24% margin, break-even is 4.17× and that same 3.0× is losing money on every order.",
    mechanism:
      "Break-even ROAS is one divided by contribution margin. A ROAS target borrowed from another account is a number with no meaning attached.",
  },
  {
    id: "container",
    n: "04",
    title: "Nine variations buy one ticket.",
    appliedTo: "PetHonesty The Walk That Keeps Getting Shorter",
    diagram: "container",
    obvious:
      "Walk-Shorter is winning. Cut three alternate openings and three thumbnails from it, ship nine variants, and give the winner nine chances to be picked.",
    mine:
      "Ship three genuinely separate concepts instead. Same insight, rebuilt as a benefit lead, a problem lead, and a story lead, which the system reads as three different ads.",
    mechanism:
      "Near-identical creatives collapse into one container and compete as a single entry, so nine variations buy roughly one shot at delivery.",
  },
  {
    id: "dpa",
    n: "05",
    title: "A 7× that is actually a 1.9×.",
    obvious:
      "The catalogue campaign returns 7.2×, far above everything else in the account. Shift budget into it and scale the thing that works.",
    mine:
      "I re-read it on 7-day click with view-through excluded, and check it against MER. Catalogue ads intercept people already on their way to buying, so most of that 7.2× was revenue the brand had already earned.",
    mechanism:
      "Feeding a harvester raises reported ROAS while blended MER stays flat, which is the signature of paying twice for the same customer.",
  },
  {
    id: "gates",
    n: "06",
    title: "The angle dies before it costs anything.",
    appliedTo: "Ancient Nutrition · the Wave 2 expansion angles",
    diagram: "gates",
    obvious:
      "Eight new angles are queued. Produce all eight, test them, and let the data decide which ones work.",
    mine:
      "Run all eight through four gates first, and expect three to survive. A produced concept tested for five days costs roughly $500 in spend plus production plus a week, and the answer was available for free.",
    mechanism:
      "Testing confirms which survivor performs. Curation is what produces a hit rate, and hit rate is the number that actually measures a strategist.",
  },
  {
    id: "peeking",
    n: "07",
    title: "Checking on day two is how you buy a false winner.",
    obvious:
      "The test is live. Check it every morning and cut the losers early so budget stops burning on ads that are clearly behind.",
    mine:
      "I write the window and the thresholds before launch and do not look at performance until the window closes. Daily checks get delivery and spend only.",
    mechanism:
      "Stopping the moment a result looks favourable converts a test into a random draw, and the early leader reverses often enough that the habit is expensive.",
  },
];

// ── The diagnostic pairs ──────────────────────────────────────────────────
// Four reads only. The full diagnostic table is reference material and skims
// as a data dump. Four cards skim as judgment.

export type Pair = {
  seen: string;
  means: string;
  doThis: string;
};

export const PAIRS_INTRO = "Four reads I use most, and what each one changes.";

export const PAIRS: Pair[] = [
  {
    seen: "Low hook, strong hold",
    means: "The opening fails and everyone who survives it is the right person.",
    doThis:
      "Keep the body untouched, rewrite the first three seconds. Highest-leverage fix available.",
  },
  {
    seen: "Strong hook, low hold",
    means: "You bought attention from the wrong people. Suspect clickbait.",
    doThis: "Fix pacing and structure, or pull the hook back toward the actual promise.",
  },
  {
    seen: "High CTR, low CVR",
    means: "The ad over-promises or stays vague, so the click is unqualified.",
    doThis: "Tighten the ad's specificity so it self-qualifies. Leave the lander alone for now.",
  },
  {
    seen: "Ugly soft metrics, real profit",
    means: "Heavy self-qualification. Few people stop, and the ones who do are buyers.",
    doThis: "Nothing. Never turn off a profitable ad because its engagement looks unimpressive.",
  },
];
