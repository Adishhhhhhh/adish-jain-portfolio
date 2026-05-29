// Structured Campaign-room data, distilled from portfolio-content/ markdown.
// One CampaignSpec per brand. Long-form sections are arrays of paragraphs so the
// Campaign room can collapse, scroll-anchor, and lazy-render them.

import type { Brand } from "./types";

export type ResearchPoint = { heading: string; body: string };

export type ArchitectureLayer = {
  stage: string; // e.g. "Problem Aware"
  description: string;
  concepts: string[]; // concept IDs that sit at this layer
};

export type CampaignSpec = {
  brand: Brand;
  title: string;
  tagline: string; // one-line positioning
  tldr: string[]; // 3–5 bullet sentences
  overview: string[]; // paragraphs
  whyThisBrand: string;
  whatIsWorking: string[];
  whatIsMissing: string[];
  corePositioning: string;
  research: ResearchPoint[];
  architecture: ArchitectureLayer[];
  closingBet: string;
};

export const CAMPAIGNS: Record<Brand, CampaignSpec> = {
  pethonesty: {
    brand: "pethonesty",
    title: "PetHonesty 10-in-1 Multivitamin",
    tagline: "Companion wellness, reframed as a nutrition gap that food cannot close.",
    tldr: [
      "The 10-in-1 already wins on formula. The Library's job is to stop the scroll for owners who explain decline as 'just aging.'",
      "Anxious Caregivers (the largest segment by far) need a diagnostic, not another supplement claim. The Walk-Shorter VSL is the diagnostic.",
      "Format diversity carries the same insight across video, static, and advertorial so a single research foundation generates 21 VSLs and 5 statics, not five.",
    ],
    overview: [
      "PetHonesty sells a single multi-system chew for dogs against a category that sells single-system supplements in five separate bottles. The asset rotation has to make that consolidation feel obvious in the first three seconds.",
      "The audience does not need to be convinced that nutrition matters. They need to be convinced that the decline they have already observed is a nutrition story, not an aging story. Every Problem Aware asset hands them that reframe.",
    ],
    whyThisBrand:
      "Companion wellness is the rare category where the buyer is also the witness. The owner sees the dog stop running before any data exists. That puts an unusual amount of weight on emotional accuracy. PetHonesty's product is built for that buyer, but the existing creative reads as generic supplement claims. The opportunity is to write the ads in the language the owner already uses with themselves.",
    whatIsWorking: [
      "Strong product moat: 10 systems in one chew, pumpkin-fiber base for absorption, no soy or palm fillers.",
      "Real subscription base (250k+) gives social proof an asset can lean on without invention.",
      "The Walk-Shorter and Dog-to-Dog assets already cover Problem Aware and Solution Aware respectively.",
    ],
    whatIsMissing: [
      "A consolidated 'why one chew beats the stack' static for retargeting cart abandoners.",
      "Hook variety within the same insight. The same insight expressed in 6 different opening lines is 6 chances to stop a different scroll.",
      "An Anti-Influencer angle to reach the segment that has tuned out 'pet mom' creator content entirely.",
    ],
    corePositioning:
      "Nutrition gaps that food cannot close, surfaced as observable behaviour the owner already sees but has not yet diagnosed.",
    research: [
      {
        heading: "The 'just aging' verbatim cluster",
        body: "Most owners describe decline in passive language: 'she's slowing down.' That passivity is the entire conversion problem. The Library reframes those verbatims as measurable signals the owner can act on.",
      },
      {
        heading: "The pharmacy on the counter",
        body: "Owners who already supplement describe their shelf as exhausting to manage. The 10-in-1 wins that segment by consolidation, not by being marginally better at any single system.",
      },
      {
        heading: "Vet validation, without endorsement risk",
        body: "Owners trust their vet but resent vet upsell. Hooks like 'my vet said something that stopped me' borrow vet authority without making a direct vet claim.",
      },
    ],
    architecture: [
      {
        stage: "Problem Aware",
        description: "Diagnose what the owner already sees but cannot name.",
        concepts: ["ph-walk-shorter", "ph-vsl-7-early-warning"],
      },
      {
        stage: "Solution Aware",
        description: "Name the gap food cannot close, hand off the mechanism.",
        concepts: ["ph-dog-to-dog", "ph-everything"],
      },
      {
        stage: "Product Aware",
        description: "Spec sheet and patience proof for the buyer about to subscribe.",
        concepts: ["ph-anatomy", "ph-90-day-timeline"],
      },
    ],
    closingBet:
      "The shortest path to PetHonesty's next 100k subscribers is not a better claim, it is a better diagnosis. The Library is engineered to make that diagnosis the first sentence the owner reads.",
  },

  neurogum: {
    brand: "neurogum",
    title: "NeuroGum",
    tagline:
      "Cognitive performance reframed as a delivery problem, not a stimulant problem.",
    tldr: [
      "NeuroGum has $50M+ lifetime sales and a TikTok-to-Amazon engine, but the rotation treats first-time discoverers and active comparison shoppers as one audience. The Library segments them.",
      "Caffeine and Meth is the showpiece. It reframes the entire category from 'better caffeine' to 'fix the delivery + add the missing half.'",
      "DR VSLs teach the mechanism. Creator content carries social proof. Statics retarget. Each format serves a different beat, not a redundant one.",
    ],
    overview: [
      "The product has product-market fit, distribution, and cultural momentum. The question is whether the creative strategy matches the engine underneath it.",
      "Most caffeine ads sell focus. NeuroGum should sell smooth focus, and 'smooth' is a mechanism word the audience has not been taught yet. The asset rotation teaches that word and then owns it.",
    ],
    whyThisBrand:
      "Caffeine is a category where the buyer is also the user, and the user has already formed an opinion. The opportunity is not to convert the coffee skeptic but to give the coffee-loyal a reason to switch, in their own language. NeuroGum's L-theanine + buccal-delivery story is uniquely defensible, but it lives on the website, not in the ads.",
    whatIsWorking: [
      "Heavy influencer reach (Schulz, Ohno, Hooper, Rogan tailwinds) drives top-of-funnel.",
      "TikTok-to-Amazon pipeline gives a clean conversion path for warm audiences.",
      "Native, high-volume content keeps brand lift compounding.",
    ],
    whatIsMissing: [
      "Mechanism education on buccal absorption and L-theanine synergy is buried on the website and absent from the ads.",
      "Awareness-stage segmentation: the same ad speaks to first-time discoverers and active comparison shoppers.",
      "A defensible category narrative that survives without any single creator's performance.",
    ],
    corePositioning:
      "Energy you can steer. Caffeine and L-theanine in a 40:60 ratio, absorbed through the cheek in 5 to 10 minutes, so the spike never becomes a crash.",
    research: [
      {
        heading: "Digestive bottleneck",
        body: "Drinks route through digestion in 30 to 45 minutes. Buccal delivery bypasses that and lands in 5 to 10. The asset rotation makes the timing diagram the hero, not a footnote.",
      },
      {
        heading: "Scattered arousal",
        body: "Caffeine alone produces undirected stimulation: high activity, low directed execution. The audience has lived this every day and has never been given the name for it.",
      },
      {
        heading: "Unbalanced formulation",
        body: "Without L-theanine, stimulation lacks control. The 40:60 ratio is the mechanism. Neither ingredient works optimally alone (Journal of Nutrition, 2008).",
      },
    ],
    architecture: [
      {
        stage: "Problem Aware",
        description: "Name the dopamine planning loop and the digestive bottleneck.",
        concepts: ["ng-coffee-meth", "ng-belief-disruption", "ng-vsl-dopamine-loop"],
      },
      {
        stage: "Solution Aware",
        description: "Teach the mechanism, contrast the curve.",
        concepts: ["ng-dear-coffee", "ng-energy-curve"],
      },
      {
        stage: "Product Aware",
        description: "Social validation and warm-audience reinforcement.",
        concepts: ["ng-office-authority"],
      },
    ],
    closingBet:
      "Whoever educates this audience first on why their format works, not just that it works, owns the defensible category position. The Library is built to be that education.",
  },

  mitoq: {
    brand: "mitoq",
    title: "MitoQ Pure",
    tagline:
      "Mitochondria-targeted CoQ10, framed as upstream where every other longevity pill is downstream.",
    tldr: [
      "Longevity buyers have already bought CoQ10, magnesium, and an adaptogen stack and felt no compounding effect. MitoQ's job is to explain why and give them somewhere new to look.",
      "The defensible category narrative is upstream vs downstream. Foundation vs symptoms. The asset rotation lives or dies on that one reframe.",
      "The 40+ ICP responds to mechanism education and to identity reframes, in that order. Choosing Yourself opens the door. Foundation vs Symptoms walks them through.",
    ],
    overview: [
      "Most longevity supplements promise outcomes. MitoQ promises a target: the mitochondria, where ordinary CoQ10 cannot reach. The whole creative strategy is to make that target legible to a buyer who has never been taught it exists.",
      "The 40+ buyer is operating from depleted-energy reality and a deep allergy to claim-stacking. The asset rotation respects both. Mechanism first. Empathy alongside, never instead.",
    ],
    whyThisBrand:
      "MitoQ is the rare category where the science actually owns a defensible position, but the marketing relies on outcome claims that any longevity brand can repeat. The opportunity is to make the mechanism the marketing.",
    whatIsWorking: [
      "Patented mitochondria-targeted delivery is a real moat.",
      "The 40+ ICP is highly literate and rewards mechanism-led content.",
      "Subscription base is loyal once mechanism is internalised.",
    ],
    whatIsMissing: [
      "Most ads sell 'energy,' which makes MitoQ indistinguishable from twenty other brands.",
      "The cellular-biology story is buried on the website, not in the rotation.",
      "No clear Solution-Aware path that converts the buyer who already takes CoQ10 and noticed nothing.",
    ],
    corePositioning:
      "Upstream not downstream. The only supplement targeting the mitochondria your body cannot reach with regular CoQ10.",
    research: [
      {
        heading: "Time-theft cluster",
        body: "The 40+ high-functioning audience describes exhaustion as 'I am giving everything to everyone else.' The asset rotation gives that exhaustion a cellular name.",
      },
      {
        heading: "Foundation vs symptoms verbatim",
        body: "The audience tracks supplements as symptom-by-symptom maintenance. The reframe to 'foundation' is the highest-recall language from the research interviews.",
      },
      {
        heading: "Cost-per-bottle ceiling",
        body: "Comparison shoppers stack-cost up to $200/mo before reconsidering. The Stack Cost Revelation static is engineered for that specific moment.",
      },
    ],
    architecture: [
      {
        stage: "Unaware",
        description: "Build category literacy. Mitochondria as a word, not a buzzword.",
        concepts: ["mq-historical-timeline"],
      },
      {
        stage: "Solution Aware",
        description: "Mechanism education, the upstream/downstream reframe.",
        concepts: ["mq-choosing-yourself", "mq-upstream-downstream", "mq-vsl-foundation-vs-symptoms"],
      },
      {
        stage: "Product Aware",
        description: "Spec sheet, comparison, patience anchor for subscribers.",
        concepts: ["mq-stack-cost", "mq-the-timeline"],
      },
    ],
    closingBet:
      "If MitoQ owns the upstream/downstream language in the next six months, the rest of the category has to use it too. The Library is engineered to plant that language at every awareness stage at once.",
  },

  "ancient-nutrition": {
    brand: "ancient-nutrition",
    title: "Ancient Nutrition Multi-Collagen",
    tagline:
      "Five collagen types, real food sources, premium price defended by what cheap collagen is missing.",
    tldr: [
      "Single-source collagen is the lazy default. Ancient's multi-source product can win the premium tier only if the buyer can articulate what 'multi-source' means in their own words.",
      "The 40+ female buyer responds to recognition first, mechanism second. The Coffee Conversation opens the door. The Eggshell Revelation walks them through.",
      "Price objection is the conversion ceiling. The Expensive Because static is engineered for that exact moment.",
    ],
    overview: [
      "The buyer is already shopping collagen. The job is not to teach them the category, it is to teach them that cheap collagen is its own category. Five types, doing different jobs, in different tissues. One source cannot rebuild five things.",
      "Perimenopause is the secondary emotional thread. The same product solves a different problem for the same buyer at a different moment. The Library accommodates both doors.",
    ],
    whyThisBrand:
      "Ancient is the rare collagen brand whose product story is actually multi-mechanism (eggshell membrane, bone broth, fermented mushrooms) but whose ads compress that into a generic 'collagen for your skin' claim. The opportunity is to teach the buyer how to read their own shelf.",
    whatIsWorking: [
      "Four real food sources gives a genuinely defensible premium-tier position.",
      "The 40+ female audience is high-conviction once persuaded.",
      "Perimenopause-aware messaging is a green-field segment in this category.",
    ],
    whatIsMissing: [
      "A first-line reframe that names what cheap collagen is missing.",
      "Price-objection retargeting that converts on the cart-abandon moment.",
      "Empathy-led perimenopause angles that respect the audience's lived experience.",
    ],
    corePositioning:
      "Expensive because, not expensive despite. Five collagen types from real food sources, paired with eggshell membrane, bone broth, and fermented mushrooms.",
    research: [
      {
        heading: "The 'I thought it was just me' cluster",
        body: "Perimenopause symptoms are explained as personal failings. The Library returns them as biology. The reframe is the entire ask.",
      },
      {
        heading: "Cart-abandon verbatim",
        body: "'I was about to buy and then I saw the price.' Expensive Because is engineered as the exact answer to that exact moment.",
      },
      {
        heading: "Symptom-stack burden",
        body: "Audience runs joint cream, probiotic, magnesium, and adaptogen at once. Foundation-fix language consolidates that stack without dismissing it.",
      },
    ],
    architecture: [
      {
        stage: "Problem Aware",
        description: "Empathy-first reframes of symptoms the buyer blames on themselves.",
        concepts: ["an-coffee-conversation", "an-anger-nobody-explained"],
      },
      {
        stage: "Solution Aware",
        description: "Mechanism education on multi-source vs single-source collagen.",
        concepts: ["an-eggshell-revelation", "an-symptom-loop"],
      },
      {
        stage: "Product Aware",
        description: "Price defence at the conversion moment.",
        concepts: ["an-expensive-because"],
      },
    ],
    closingBet:
      "The 40+ buyer does not need to be sold on collagen. She needs to be sold on which collagen, in her own words. The Library writes those words for her.",
  },
};
