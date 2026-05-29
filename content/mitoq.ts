import type { Concept } from "./types";

// MitoQ Pure — Mitochondria-targeted CoQ10 for cellular longevity.
// Source: portfolio-content/ §3906–7200.
// Produced assets: 3 statics (Belief Disruption, Upstream vs Downstream, Review Turned Static).
// No produced videos in this brand's spec rotation.

export const MITOQ_CONCEPTS: Concept[] = [
  // ─── Produced static #1 ────────────────────────────────────────────────
  {
    id: "mq-belief-disruption",
    brand: "mitoq",
    format: "static",
    awareness: "problem-aware",
    status: "spec",
    state: "produced",
    conceptName: "Static #1: Belief Disruption (Aging ≠ Slowing Down)",
    builtDate: "Built May 2026",
    caption:
      "Aging ≠ Slowing Down.\n\nYour cells do not have to decline. They just need protection that can actually reach them.\n\nGets inside your mitochondria where regular antioxidants cannot. Up to 69% more cellular energy production. Sharper energy in 6 weeks.\n\nThird-party tested. GMP certified. Backed by 25 years of research.",
    hooks: [
      {
        line: "Aging ≠ Slowing Down.",
        rationale:
          "Symbol-strike pattern interrupt. The strike-through across the ≠ creates immediate cognitive dissonance that demands attention.",
      },
    ],
    asset: "/assets/Belief-Disruption.png",
    rationale: {
      angle:
        "Challenge the Aging = Weakening equation. Reposition cellular protection as age-defying technology, not symptom management.",
      icp:
        "All ICPs in the universal-aging-anxiety cluster.",
      hookStrategy:
        "Strike-through the ≠ symbol to create a pattern interrupt. The visual is the entire hook. The eye sees the math problem before the brain reads the words.",
      whyItWorks:
        "Confronts a defeatist belief head-on. The visual strike-through creates immediate cognitive dissonance that demands attention. The bullets focus on experiential benefits (sharper energy, mental sharpness, present and active) rather than technical specs, which keeps the asset readable at scroll speed.",
      strategicIntent:
        "Position cellular protection as age-defying technology. Plant the upstream-vs-downstream language at the Problem-Aware entry point.",
      diversePotential:
        "The ≠ visual could anchor a carousel (one symptom per slide with the strike-through repeating), a 15-second short, or an advertorial headline.",
      campaignRole:
        "Anchors the Problem-Aware funnel entry. Hands off to the Upstream vs Downstream static for the mechanism teach.",
    },
  },

  // ─── Produced static #2 ────────────────────────────────────────────────
  {
    id: "mq-upstream-downstream",
    brand: "mitoq",
    format: "static",
    awareness: "solution-aware",
    status: "spec",
    state: "produced",
    conceptName: "Static #2: Upstream vs Downstream",
    builtDate: "Built May 2026",
    caption:
      "Every longevity supplement helps your body respond to aging. MitoQ is the only one designed to stop damage at its source.\n\nNAD+, resveratrol, adaptogens, they all work downstream. MitoQ works upstream, where 90% of cellular damage actually starts.\n\nThe difference between patching holes and preventing them.\n\nStop playing defense. Go upstream.",
    hooks: [
      {
        line: "Stop playing defense. Go upstream.",
        rationale:
          "Action-led close as hook. Inverts the typical supplement claim from 'try this' to 'change positions.'",
      },
    ],
    asset: "/assets/upstream-vs-downstream.png",
    rationale: {
      angle:
        "Mechanism differentiation through positioning. Every other longevity supplement is downstream reaction; MitoQ is the only upstream prevention.",
      icp:
        "Solution-Aware, supplement-educated buyers already running a longevity stack.",
      hookStrategy:
        "Flow-diagram comparison. The visual makes the abstract mitochondrial chemistry legible as a water-flow metaphor.",
      whyItWorks:
        "Creates clear category separation. Positions all competitors as downstream (reactive) and MitoQ as upstream (preventive). The water-flow metaphor simplifies the complex mechanism without dumbing it down.",
      strategicIntent:
        "Use the water-flow metaphor to plant the language the brand needs the buyer to adopt. 'Patching holes vs preventing them' is the line the audience will reuse on themselves.",
      diversePotential:
        "The 'patching holes vs preventing them' line could become its own standalone visual concept, a tee, an advertorial subhead, or the close on a VSL.",
      campaignRole:
        "Solution-Aware anchor. Hands off to VSL #1 (Foundation vs Symptoms) for the long-form version and to the Review Turned Static for social proof.",
    },
  },

  // ─── Produced static #3 ────────────────────────────────────────────────
  {
    id: "mq-review-turned-static",
    brand: "mitoq",
    format: "static",
    awareness: "problem-aware",
    status: "spec",
    state: "produced",
    conceptName: "Static #3: Review Turned Static",
    builtDate: "Built May 2026",
    caption:
      "Sharper at 57 than I was at 47. No coffee needed at 2 PM. I have stopped negotiating with my afternoon.\n\nReal MitoQ user. Results may vary.\n\nBacked by 900+ peer-reviewed studies.",
    hooks: [
      {
        line: "Sharper at 57 than I was at 47.",
        rationale:
          "Reverse-chronology hook. The number disparity stops the scroll before the brand mark appears.",
      },
    ],
    asset: "/assets/Review-Turned-Static.png",
    rationale: {
      angle:
        "Social proof through authentic voice. Real customer language breaks through ad-speak.",
      icp:
        "Problem-Aware skeptics needing validation from someone outside the brand.",
      hookStrategy:
        "Large quote format with customer photo (or anonymous testimonial). The specifics ('sharper at 57 than 47', 'no coffee at 2 PM') do the persuasion the brand voice cannot.",
      whyItWorks:
        "Real customer language breaks through ad-speak. Specific details, measurable contrasts and emotional transformations, make the change believable in a way generic claims never can.",
      strategicIntent:
        "Let the customer voice do the selling. The review should contain specific before/after contrast and emotional transformation, not just 'it works.'",
      campaignRole:
        "Pairs with the Belief Disruption static for the Problem-Aware funnel; the static earns the next click by handing the skeptic a peer voice instead of another brand claim.",
    },
  },
];
