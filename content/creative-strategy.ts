// Notion section: Creative Strategy, deepened in parallel with the Approach
// restructure. Approach is the how; this page is the why. Nine beliefs, each
// one traceable in the case studies. Rules: no em dashes, no contrast-negation
// patterns in narration (quoted campaign copy exempt).

export type StrategyPart = { title: string; markdown: string };

export const CREATIVE_STRATEGY_INTRO =
  "The philosophy behind how I approach every brand.";

export const CREATIVE_STRATEGY_PARTS: StrategyPart[] = [
  {
    title: "The Core Belief",
    markdown: `Good input plus strategic thinking produces good output. That's the whole framework.

Most creative failure starts as a research failure. When you don't know the customer's awareness level, you educate people who are ready to buy and pitch people who don't know the problem exists yet. When you don't know the ICP's specific emotional drivers, you write generic benefit lists that move no one.

The research eliminates guesswork. The creative is just execution of what the research already revealed. Every belief below is a consequence of taking that sentence literally.`,
  },
  {
    title: "Attention Is the Product",
    markdown: `The feed is an auction for attention, and the auction is rigged toward creative.

- People open the app for a stranger's vacation photo, a breakup text, and the pull of the scroll itself. Every ad competes against that before it ever competes against another brand
- Meta's delivery system auditions every eligible ad in the milliseconds before the feed renders and casts the one most likely to earn attention. The creative is the audition tape
- Which is why creative is the new targeting: the angle, the hook, and the format decide who stops scrolling, and that does the audience selection no interest setting can`,
  },
  {
    title: "Awareness Level Targeting",
    markdown: `I build every campaign around Eugene Schwartz's awareness spectrum: unaware, problem-aware, solution-aware, product-aware, most aware.

The stage decides everything downstream: the entry point, the claim, the format, the CTA. Unaware audiences need stories and pattern interrupts. Solution-aware audiences need mechanism education and comparisons. Product-aware audiences need differentiation and proof. The same script won't work for two stages.

Most DTC brands overinvest in stages four and five and underinvest in one through three. That's where the biggest creative opportunity sits, and where the attention is cheapest. Each case study maps every asset explicitly to its awareness level before a single word is written.`,
  },
  {
    title: "Market Sophistication",
    markdown: `Awareness asks how much the prospect knows. Sophistication asks how much the market has already promised them. They are different axes, and confusing them kills creative.

- Schwartz again: five stages of sophistication, from virgin markets that believe simple claims to exhausted markets that have heard everything
- A stage-two market buys "more energy." A stage-four market needs a mechanism: why this works when everything else didn't. A stage-five market buys identity, the person they become
- Most supplement categories sit at stage four or five, which is why every case study in this Library leads with mechanism or identity, never with claims
- Sophistication also sets the ceiling on promises. In a jaded market, a bigger promise lowers belief. The move is a different promise rather than a louder one`,
  },
  {
    title: "ICP Segmentation",
    markdown: `Broad targeting produces average creative. Specific ICP targeting means writing to one person: their exact situation, their exact language, their exact fear, their specific version of the desired outcome.

That specificity is what creates the "this ad is talking directly to me" response that drives real engagement and conversion.

Each case study identifies two to three distinct ICPs and names them like characters: the Anxious Caregiver, the Skeptical Optimizer, the Partial Results Prisoner. A named character forces specific writing. Each ICP gets its own creative track, with angle variants built for their awareness stage and emotional profile.`,
  },
  {
    title: "The Two Mechanisms",
    markdown: `An ad's real product is a belief shift, and mechanisms are how belief shifts happen.

- The **problem mechanism** explains why the customer's pain persists despite everything they've tried. It hands them absolution: you are not failing the supplement, the supplement is failing you
- The **solution mechanism** explains why this product resolves what the alternatives structurally cannot. It converts hope into logic
- One creates the itch, the other is the only scratch. Run in sequence, they produce the feeling every great direct response ad produces: finally, someone explained it
- Mechanism-first is also fatigue insurance. Claims wear out; explanations compound`,
  },
  {
    title: "The Offer Is Creative Material",
    markdown: `The offer is part of the creative, and reframing it is a belief device.

- Price reframed beats price defended: $85 a month lands as resistance, $0.85 a day next to the five-product stack it replaces lands as relief. Ancient Nutrition's "expensive because, not expensive despite" anchor runs on this
- Risk reversal closes scripts because it removes the final objection at the exact moment desire peaks. The 30-day guarantee is a creative asset that earns its place in the CTA
- Subscription mechanics shape the creative calendar: the 30-day churn window is why timeline creatives exist, setting milestones before purchase to keep the buyer past the quit point
- The click destination is an awareness decision: advertorial pre-sell for cold education, product page for warm intent. The ad and its lander make one argument together`,
  },
  {
    title: "The Direct Response Foundation",
    markdown: `Direct response principles are structural, load-bearing choices, present before the first line is written. Every asset runs the same spine: attention earned in the first three seconds, emotion built before education, belief constructed mechanism-first with proof stacked in order of scrutiny, and action harvested only after desire exists.

Dopamine state management drives the conversion order. Neurochemistry-based sequencing, curiosity and rapport before education, as Stefan Georgi's framework defines, because logical information delivery alone doesn't close. This sequencing shapes every script structure I write.

The full operational stack, principle by principle with the job each one does, lives in [the Approach](/approach).`,
  },
  {
    title: "Format Diversity",
    markdown: `Creative fatigue is a real operational problem. The solution is format diversity layered on volume, across the same core angles.

One research brief generates: a long-form VSL, a 60-second problem-aware hook, a testimonial-style script, a static with a bold headline and proof, and an advertorial pre-sell. Same strategic foundation, multiple surfaces, different entry points for different audiences and placements.

Diversity is also where the leverage to scale lives. A portfolio of angles across stages and ICPs means fatigue in one lane never stalls the account, and every winner multiplies into the formats it hasn't tried yet. This is how brands maintain scale without their creative going stale.`,
  },
];
