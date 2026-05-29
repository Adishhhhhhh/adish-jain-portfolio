// Brand briefs for the Branded Content tab. Distinct from Campaign rooms
// (which are case studies). A brief is the brand identity Adish developed:
// voice, positioning anchor, ICP, and the do / don't language rules.
// Source: portfolio-content/ brand sections.

import type { Brand } from "./types";

export type Brief = {
  brand: Brand;
  product: string;
  positioningAnchor: string;
  voice: string;
  primaryICP: string;
  sayThis: string[];
  notThat: string[];
  signatureLine: string;
};

export const BRIEFS: Record<Brand, Brief> = {
  pethonesty: {
    brand: "pethonesty",
    product: "10-in-1 Multivitamin Chews for Dogs",
    positioningAnchor:
      "Nutrition gaps that food cannot close, surfaced as behaviour the owner already sees but has not yet diagnosed.",
    voice:
      "Warm, observational, never clinical. Speaks the way a worried owner speaks to themselves at the bottom of the stairs. Confession over claim.",
    primaryICP:
      "The Anxious Caregiver: dog visibly slowing down, dismissing it as normal aging, quietly afraid they have missed something.",
    sayThis: [
      "She's six. Six is not old.",
      "Food alone cannot close the gap, no matter how premium.",
      "One chew, ten gaps closed.",
    ],
    notThat: [
      "Vet-speak or ingredient jargon as the opener.",
      "Generic 'support your dog's health' benefit lists.",
      "Fear-mongering about death or disease.",
    ],
    signatureLine: "This isn't aging. It's a gap that's been widening.",
  },
  neurogum: {
    brand: "neurogum",
    product: "Caffeine + L-theanine Gum and Mints",
    positioningAnchor:
      "Energy you can steer. The crash was never the caffeine's fault, it was the missing half and the wrong delivery route.",
    voice:
      "Sharp, mechanism-led, a little irreverent. Talks to a smart, skeptical knowledge worker who has already tried quitting coffee. Earns the science, never lectures it.",
    primaryICP:
      "The Skeptical Optimizer: reads Huberman, tracks HRV, has abandoned at least one performance supplement, switches only when you explain why at a level that passes their filter.",
    sayThis: [
      "Caffeine alone is raw light. L-theanine is the lens.",
      "Absorbed through the cheek in 5 to 10 minutes, not your gut in an hour.",
      "You're not focused, you're just caffeinated.",
    ],
    notThat: [
      "'More energy' as the promise. The promise is steerable energy.",
      "Influencer-style 'I use this, it works, try it' with no mechanism.",
      "Treating first-time discoverers and comparison shoppers as one audience.",
    ],
    signatureLine: "Energy that works with your brain, not against it.",
  },
  mitoq: {
    brand: "mitoq",
    product: "Mitochondria-Targeted CoQ10",
    positioningAnchor:
      "Upstream, not downstream. The only supplement that reaches the mitochondria where 90% of cellular damage starts.",
    voice:
      "Precise, calm, authoritative without being cold. Talks to a 40+ optimizer who is allergic to claim-stacking. Mechanism first, empathy alongside, never instead.",
    primaryICP:
      "The 40+ high-functioning caregiver-by-default, running on depleted reserves, who has tried CoQ10 and felt nothing and does not know why.",
    sayThis: [
      "Stop playing defense. Go upstream.",
      "The difference between patching holes and preventing them.",
      "Aging is not the same as slowing down. That equation is obsolete.",
    ],
    notThat: [
      "Selling 'energy' like every other longevity brand.",
      "Outcome claims with no mechanism behind them.",
      "Burying the cellular-biology story where the ad never reaches it.",
    ],
    signatureLine: "Stop damage at its source.",
  },
  "ancient-nutrition": {
    brand: "ancient-nutrition",
    product: "Multi-Collagen Protein from Real Food Sources",
    positioningAnchor:
      "Expensive because, not expensive despite. Five collagen types from real food, where cheap collagen gives you one.",
    voice:
      "Knowing, candid, a knowledgeable friend who did the research for you. Treats the buyer's skepticism as an asset, never an objection. Recognition before mechanism.",
    primaryICP:
      "The 40+ woman in the Partial Results Prison: has tried collagen, felt almost nothing, and is one explanation away from understanding why.",
    sayThis: [
      "You are not failing the supplement. The supplement is failing you.",
      "One cow, one molecule, one job. Your body needs five types doing five jobs.",
      "Expensive because. Not expensive despite.",
    ],
    notThat: [
      "Generic 'collagen for glowing skin' that ignores the other nine types.",
      "Premium-price defensiveness instead of premium-price candor.",
      "Talking down to a label-reading, PubMed-checking buyer.",
    ],
    signatureLine: "It's not just you. It has a name, and a structural solution.",
  },
};
