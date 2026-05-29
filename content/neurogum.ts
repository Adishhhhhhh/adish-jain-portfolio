import type { Concept } from "./types";

// NeuroGum — Caffeine + L-theanine gum. Cognitive performance.
// Source: portfolio-content/ §1981–3905. Six produced statics (S1–S6) and
// two produced VSLs already shot. The "Caffeine and Meth" VSL is the
// designated Annotated Teardown showpiece (PLAN.md §7).

export const NEUROGUM_CONCEPTS: Concept[] = [
  // ─── Produced video #1 (the Annotated Teardown showpiece) ───────────────
  {
    id: "ng-coffee-meth",
    brand: "neurogum",
    format: "video",
    awareness: "problem-aware",
    status: "spec",
    state: "produced",
    conceptName: "Caffeine and Meth Hit the Same Pathway",
    builtDate: "Built May 2026",
    caption:
      "Caffeine and meth hit the same receptor. What happens next is the whole story.\n\nCaffeine alone spikes you, then drops you. The crash was never the caffeine's fault. It was the missing half.\n\nAdd L-theanine and the spike becomes smooth, hours-long focus. No jitters. No 2pm cliff.\n\nAbsorbed through the cheek in 5 to 10 minutes, not your gut in an hour.\n\nEnergy you can actually steer.",
    hooks: [
      {
        line: "Caffeine and meth hit the same receptor.",
        rationale:
          "Pattern-interrupt hook. The meth line stops the scroll and reframes the category in the first beat.",
      },
    ],
    asset: "/assets/Coffee-and-Meth-Hit-the-Same-Brain-Pathway.mp4",
    poster: "/assets/posters/Coffee-and-Meth-Hit-the-Same-Brain-Pathway.jpg",
    rationale: {
      angle:
        "Category reframe. Caffeine's bad reputation gets recast as a formulation problem (missing L-theanine, wrong delivery route), not a stimulant problem.",
      icp:
        "The Burned-Out & Health-Conscious knowledge worker who has already tried quitting coffee and felt no better.",
      hookStrategy:
        "Receptor-comparison shock hook. The meth comparison is mechanistically accurate (adenosine pathway), which earns the reframe rather than just provoking.",
      whyItWorks:
        "The audience has lived the spike-crash cycle daily and has never been given a mechanistic explanation. Naming the missing half (L-theanine) and the wrong route (gut not cheek) reframes their entire relationship to caffeine in 60 seconds.",
      strategicIntent:
        "Problem-Aware anchor. Build the defensible category narrative NeuroGum should own: smooth focus through formulation, not stimulant escalation.",
      diversePotential:
        "The receptor comparison works as a static headline, a 15-second short-form, and an advertorial open. The hook line carries on its own.",
      campaignRole:
        "Campaign 1 (Coffee Is the Enemy), Ad Set 1A. This is the Annotated Teardown showpiece, see the per-second hotspot analysis on the modal.",
    },
  },

  // ─── Produced video #2 ─────────────────────────────────────────────────
  {
    id: "ng-office-authority",
    brand: "neurogum",
    format: "video",
    awareness: "product-aware",
    status: "spec",
    state: "produced",
    conceptName: "VSL #2: Office Authority Montage",
    builtDate: "Built May 2026",
    caption:
      "Six people. Six jobs. One thing they do before the day actually starts.\n\nOperations. Customer experience. Finance. Product. Warehouse. Creative.\n\nNot a testimonial reel. A normalcy reel.",
    hooks: [
      {
        line: "Six people. Six jobs. One thing they do before the day actually starts.",
        rationale:
          "Pattern-builder hook. Quick-cut format means the viewer is rewarded for staying through six beats, not asked to commit to a long story.",
      },
    ],
    asset: "/assets/Office-Authority-Montage.mp4",
    poster: "/assets/posters/Office-Authority-Montage.jpg",
    rationale: {
      angle:
        "Social validation through workplace normalcy. NeuroGum as the thing professionals already use, not the thing they need to be sold on.",
      icp:
        "Skeptical Optimizer and Burned-Out, warm retargeting audience already familiar with the product.",
      hookStrategy:
        "Quick-cut office testimonials showing real usage context. Multiple voices in rapid segments build cumulative trust without requiring deep education.",
      whyItWorks:
        "Mirrors NeuroGum's existing creator-led strength but adds structure. Each professional voice is one beat; the cumulative weight is the conversion event. Designed for Product-Aware audiences who understand the category and need social confirmation to convert.",
      strategicIntent:
        "Not trying to educate. Just reinforcing that this is already normal behaviour for the audience the viewer wants to be part of.",
      campaignRole:
        "Campaign 5 (Retargeting + Most Aware). The warm-audience reinforcement layer, distinct from the DR mechanism teach in Campaign 1.",
    },
  },

  // ─── Static S1 ─────────────────────────────────────────────────────────
  {
    id: "ng-energy-curve",
    brand: "neurogum",
    format: "static",
    awareness: "problem-aware",
    status: "spec",
    state: "produced",
    conceptName: "Static #1: Energy Curve Comparison",
    builtDate: "Built May 2026",
    caption:
      "Coffee energy looks like a wave that drowns you.\n\nNeuro energy looks like a road that keeps going.\n\nSame caffeine. Different ride.",
    hooks: [
      {
        line: "Coffee energy looks like a wave. Neuro energy looks like a road.",
        rationale:
          "Visual metaphor hook. The static IS the comparison; the headline narrates what the curve shows.",
      },
    ],
    asset: "/assets/energy-curve-comparison.png",
    rationale: {
      angle:
        "Visual self-diagnosis through energy curve comparison. The viewer recognises their own day in the spike-crash line before any product enters the frame.",
      icp:
        "Skeptical Optimizer and Burned-Out, Problem Aware.",
      hookStrategy:
        "Comparison chart as the static itself. The spike-crash vs sustained line is immediately understood without reading a word of copy.",
      whyItWorks:
        "Comparison charts are one of the highest-performing static formats in DTC health because they let the viewer self-diagnose without reading a single word of copy. The visual does the persuading; the copy reinforces.",
      strategicIntent:
        "Workhorse static. Designed for high-volume rotation across Problem-Aware ad sets.",
      campaignRole:
        "Campaign 1, Ad Set 1A. Static counterpart to VSL #8 (Cortisol / Spike / Crash).",
    },
  },

  // ─── Static S2 ─────────────────────────────────────────────────────────
  {
    id: "ng-advertorial-driver",
    brand: "neurogum",
    format: "static",
    awareness: "problem-aware",
    status: "spec",
    state: "produced",
    conceptName: "Static #2: Advertorial Driver",
    builtDate: "Built May 2026",
    caption:
      "Coffee is quietly dstorying your focus.\n\nThe missing half is not optional, it is the entire reason the formulation works.\n\nFive-minute read. Buccal delivery, L-theanine synergy, what the receptor literature actually says.",
    hooks: [
      {
        line: "Coffee is quietly dstorying your focus.",
        rationale:
          "Intentional misspelling as pattern interrupt. The eye snags on 'dstorying' and the scroll stops before the brain catches up.",
      },
    ],
    asset: "/assets/Advertorial-driven.png",
    rationale: {
      angle:
        "Pattern-interrupt headline driving clicks to the long-form advertorial. The static is a traffic driver, not a converter.",
      icp:
        "Skeptical Optimizer and Health-Conscious, Problem-Aware.",
      hookStrategy:
        "Intentional misspelling ('Dstorying') as scroll-stop. Bold choice that will stop scrolls but could read as careless to some audiences. Worth A/B testing against a clean-spelled version.",
      whyItWorks:
        "Exists to serve the advertorial. The misspelling functions as a typography hack, not a copy mistake; the eye corrects it mid-scroll, which holds the gaze long enough for the headline to land.",
      strategicIntent:
        "Traffic driver, not standalone converter. Success measured by CTR to advertorial, not direct purchase.",
      campaignRole:
        "Campaign 1, Ad Set 1A. Funnel pre-warmer; the conversion event lives on the advertorial page.",
    },
  },

  // ─── Static S3 ─────────────────────────────────────────────────────────
  {
    id: "ng-benefit-focused",
    brand: "neurogum",
    format: "static",
    awareness: "most-aware",
    status: "spec",
    state: "produced",
    conceptName: "Static #3: Benefit-Focused Product Shot",
    builtDate: "Built May 2026",
    caption:
      "5 to 10 minute onset. 40mg caffeine. 60mg L-theanine. Sugar-free.\n\nNo crash. No jitters. No re-dosing.\n\nThe one you already know.",
    hooks: [
      {
        line: "The one you already know.",
        rationale:
          "Familiarity hook for Most Aware audiences. No mechanism teach, just product reminder.",
      },
    ],
    asset: "/assets/benefit-focused.png",
    rationale: {
      angle:
        "Clean product presentation for audiences who already understand the mechanism.",
      icp:
        "All ICPs in the Most Aware retargeting layer.",
      hookStrategy:
        "Product-forward brand ad. No mechanism teach, no story, just the spec sheet and the brand mark.",
      whyItWorks:
        "Cleanest, most 'brand' ad in the portfolio. Works for Most Aware retargeting where the viewer already understands the mechanism and just needs a visual reminder to purchase.",
      strategicIntent:
        "Retargeting reinforcement. Not educating, not persuading, just staying present in the buyer's consideration set.",
      campaignRole:
        "Campaign 5 (Most Aware retargeting). The clean-presentation layer of the warm-audience rotation.",
    },
  },

  // ─── Static S4 ─────────────────────────────────────────────────────────
  {
    id: "ng-historical-timeline",
    brand: "neurogum",
    format: "static",
    awareness: "problem-aware",
    status: "spec",
    state: "produced",
    conceptName: "Static #4: Historical Timeline",
    builtDate: "Built May 2026",
    caption:
      "Herbs. Then coffee. Then energy drinks. Then this.\n\nEvery era picked a delivery method. This one picks the cheek instead of the gut, and the missing half instead of the spike.\n\nNot a novelty. The next step.",
    hooks: [
      {
        line: "Herbs. Then coffee. Then energy drinks. Then this.",
        rationale:
          "Evolutionary cadence hook. Frames the product as inevitable progression, not novelty.",
      },
    ],
    asset: "/assets/historical-timeline%20.png",
    rationale: {
      angle:
        "Reframe NeuroGum as the logical next step in human energy delivery, not a novelty.",
      icp:
        "Skeptical Optimizer, Problem-Aware to Solution-Aware.",
      hookStrategy:
        "Evolutionary timeline (herbs → coffee → energy drinks → nootropic gum). Distinctive format rarely seen in functional gum advertising.",
      whyItWorks:
        "Reframes the product from 'new supplement' to 'inevitable evolution.' Strong for the optimizer ICP who responds to historical context and progress narratives.",
      strategicIntent:
        "Category legitimacy. Position nootropic gum as the next era, not a niche experiment.",
      diversePotential:
        "The timeline concept could expand into a carousel or short animation showing each era's tradeoffs.",
      campaignRole:
        "Campaign 2 (The Smooth Focus System), Solution-Aware ad sets.",
    },
  },

  // ─── Static S6 ─────────────────────────────────────────────────────────
  {
    id: "ng-dear-coffee",
    brand: "neurogum",
    format: "static",
    awareness: "problem-aware",
    status: "spec",
    state: "produced",
    conceptName: "Static #6: Dear Coffee, A Breakup Letter",
    builtDate: "Built May 2026",
    caption:
      "Dear coffee,\n\nIt's not you. It's the fact that you spike me, drop me, and then ask for another cup.\n\nI met something that does it in 5 minutes and brings calm with the focus.\n\nNo hard feelings. Mostly.",
    hooks: [
      {
        line: "Dear coffee, it's not you.",
        rationale:
          "Letter-format hook. Borrows a narrative form the scroll does not expect from a supplement ad. Disarming, then loaded.",
      },
    ],
    asset: "/assets/dear-coffee-break-up-letter-angle.png",
    rationale: {
      angle:
        "Emotional, shareable format using a relationship metaphor to reframe the audience's loyalty to coffee.",
      icp:
        "Burned-Out and Lifestyle/Identity buyers, Problem Aware.",
      hookStrategy:
        "Letter format, personal tone, audience 'breaking up' with coffee. Personification disarms category loyalty before any mechanism arrives.",
      whyItWorks:
        "Most shareable concept in the portfolio. The emotional format (letter) combined with the relatable relationship metaphor creates the kind of ad people screenshot and send to friends. High organic amplification potential beyond paid reach.",
      strategicIntent:
        "Organic virality play. Designed to generate shares, saves, and tags that extend reach beyond paid distribution. The emotional resonance does the work, not the mechanism education.",
      diversePotential:
        "Could become a full short-form video (someone reading the letter aloud), a carousel (one reason per slide), or a series ('Dear Energy Drinks,' 'Dear 3PM Espresso').",
      campaignRole:
        "Campaign 1, broad-reach Ad Set. Pairs with VSL #5 ('Dear Coffee' Read-Aloud) for the same insight in video form.",
    },
  },
];
