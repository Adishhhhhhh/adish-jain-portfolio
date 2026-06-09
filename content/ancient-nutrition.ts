import type { Concept } from "./types";

// Ancient Nutrition — Multi-Collagen Protein from real food sources.
// Source: portfolio-content/ §7201–9120.
// Produced assets: 4 statics (S1 Autocorrect, S2 Timeline, S3 Stack Cost, S4 Node Map),
// 1 video (Choosing Yourself, VSL #17). Plus advertorials and additional statics.

export const ANCIENT_NUTRITION_CONCEPTS: Concept[] = [
  // ─── Produced video ─────────────────────────────────────────────────
  {
    id: "an-choosing-yourself",
    brand: "ancient-nutrition",
    format: "video",
    awareness: "product-aware",
    status: "spec",
    state: "produced",
    conceptName: "VSL #17: The Choosing Self",
    builtDate: "Built May 2026",
    caption:
      "You schedule your kid's dentist before yours. You plan your team's offsite. You book the dog's grooming.\n\nYou keep choosing everyone before yourself.\n\nThe collagen is the smallest version of that choice. Five food sources, ten types, one scoop, every morning. The one thing on the list that is for you.",
    hooks: [
      {
        line: "You schedule your kid's dentist before yours.",
        rationale:
          "Behaviour-recognition hook. Names a pattern the 40+ female buyer lives daily and has never been read back to her.",
      },
    ],
    asset: "/assets/Choosing-Yourself.mp4",
    poster: "/assets/posters/Choosing-Yourself.jpg",
    rationale: {
      angle:
        "Identity bridge. The collagen is not the purchase; choosing herself is. The supplement is the visible artefact of an internal decision.",
      icp:
        "The 40+ caregiver-by-default running on depleted reserves. Already aware of collagen as a category, hesitating on the personal commitment.",
      hookStrategy:
        "Empathy-first behavioural hook. The script never says 'self-care' because self-care is an exhausted word. It shows the behaviour and lets the audience name it.",
      whyItWorks:
        "Aspirational close for retargeting audiences one step from purchase. Sells the woman she becomes, not the supplement she takes. The asset takes a decision the buyer has already half-made and lets her finish making it.",
      strategicIntent:
        "Identity-bridge close for the warm retargeting audience. Belief shift four: 'this is who you become when your body finally has everything it needs.'",
      diversePotential:
        "The 'list of everyone you choose first' structure works as a carousel, a static, or a 15-second short. Each item on the list is a content beat.",
      campaignRole:
        "Campaign 4 (The Identity Bridge), Ad Set 4.1 (The Choosing Self). Pairs with VSL #19 (The Time Machine) for the same audience in a different emotional register.",
    },
  },

  // ─── Produced static S1 ────────────────────────────────────────────────
  {
    id: "an-autocorrect",
    brand: "ancient-nutrition",
    format: "static",
    awareness: "problem-aware",
    status: "spec",
    state: "produced",
    conceptName: "Static S1: The Autocorrect",
    builtDate: "Built May 2026",
    caption:
      "My nail broke again. Third one this month. And my back is still killing me.\nSame honestly.\n\n[Three months later]\nOkay weird update. I haven't had a nail break in 6 weeks. And my back thing is basically gone.\nWhat did you change?\n\n[link sent]\n\nThe conversations happening right now in every group chat.",
    hooks: [
      {
        line: "My nail broke again. Third one this month.",
        rationale:
          "Overheard-conversation hook. Reads as something the viewer would screenshot from her own group chat, not a brand pitch.",
      },
    ],
    asset: "/assets/The-Autocorrect.png",
    rationale: {
      angle:
        "Two-symptom opening widens resonance. Reads as something overheard, not broadcast. Replicates the highest-converting trigger in this market in a static format.",
      icp:
        "Problem-Aware, Partial Results Prisoner, and word-of-mouth buyers.",
      hookStrategy:
        "Screenshot-style iMessage thread, native-looking, no brand colors until the caption.",
      whyItWorks:
        "The format pretends not to be advertising, which is the entire conversion event. The two-symptom opening (nails + back) doubles the resonance pool. Anyone who has either symptom recognises themselves in the conversation.",
      strategicIntent:
        "Replicate the highest-converting trigger in this market (word-of-mouth recognition) inside a static placement.",
      campaignRole:
        "Campaign 1 (The Partial Results Diagnosis), Ad Set 1.1. Pairs with VSL #1 (The Supplement Is Failing You) as the static counterpart.",
    },
  },

  // ─── Produced static S2 ────────────────────────────────────────────────
  {
    id: "an-timeline",
    brand: "ancient-nutrition",
    format: "static",
    awareness: "solution-aware",
    status: "spec",
    state: "produced",
    conceptName: "Static S2: The Timeline",
    builtDate: "Built May 2026",
    caption:
      "Week 2. Nails stop breaking. First proof.\nWeek 3. Morning stiffness lifts.\nMonth 2. Hair thicker, skin more awake.\nMonth 3. Energy, mobility, the version of yourself you forgot.\n\nMost women quit in week three.",
    hooks: [
      {
        line: "Most women quit in week three.",
        rationale:
          "Closing line repurposed as hook. Names the failure mode the buyer is about to live and offers her an alternative outcome.",
      },
    ],
    asset: "/assets/The-Timeline%20.png",
    rationale: {
      angle:
        "Expectation-setting timeline that pre-handles the early-quit objection. The buyer who knows what week three feels like will not abandon at week three.",
      icp:
        "Solution-Aware women who need to know what to expect before committing.",
      hookStrategy:
        "Clean horizontal timeline visual. Four milestones, four sensory cues, one final warning that earns the save.",
      whyItWorks:
        "Pre-handles the early-quit objection. Designed to be saved and shared. The woman mid-experiment sees herself in it and stays.",
      strategicIntent:
        "Subscription-conversion companion to VSL #10. Convert first-month buyers into third-month buyers by setting the right window of patience.",
      campaignRole:
        "Campaign 3 (The Clinical Conviction Layer), Ad Set 3.2 (The Timeline). The static counterpart to the long-form timeline VSL.",
    },
  },

  // ─── Produced static S3 ────────────────────────────────────────────────
  {
    id: "an-stack-cost",
    brand: "ancient-nutrition",
    format: "static",
    awareness: "problem-aware",
    status: "spec",
    state: "produced",
    conceptName: "Static S3: The Stack Cost Revelation",
    builtDate: "Built May 2026",
    caption:
      "She had retinol for her skin. Glucosamine for her joints. A probiotic for her gut. Nutrafol for her hair. A standing gel appointment to hide what was happening to her nails.\n\n$400 a month. Five symptoms. One root cause she didn't know had a name.",
    hooks: [
      {
        line: "She had retinol. Glucosamine. Probiotic. Nutrafol. A gel appointment.",
        rationale:
          "Inventory-as-hook. Listing the audience's actual cabinet is the scroll-stop; the price tag is the conversion event.",
      },
    ],
    asset: "/assets/The-Stack-Cost-Revelation.png",
    rationale: {
      angle:
        "Cost reframe that turns Ancient Nutrition from premium spend into consolidation savings.",
      icp:
        "Problem-Aware supplement stacker spending $200-400/month treating symptoms separately.",
      hookStrategy:
        "Text-led, minimal design. Copy is the creative. The list builds the case before the price comparison lands.",
      whyItWorks:
        "Pivots from symptoms to Collagen Type Deficiency as the single root cause. Positions AN as consolidation savings, not premium spend. The audience does the math against their own shelf.",
      strategicIntent:
        "Convert the buyer who has rationalised the stack ('I need different things for different symptoms') by exposing the root cause that connects them.",
      campaignRole:
        "Campaign 1, Ad Set 1.2 (The Symptom Loop Exit). Static counterpart to VSL #6 (The Symptom Loop).",
    },
  },

  // ─── Produced static S4 ────────────────────────────────────────────────
  {
    id: "an-node-map",
    brand: "ancient-nutrition",
    format: "static",
    awareness: "solution-aware",
    status: "spec",
    state: "produced",
    conceptName: "Static S4: The Node Map",
    builtDate: "Built May 2026",
    caption:
      "One central node. Ten collagen types. Five tissue systems.\n\nSBO probiotics for absorption. Vitamin C for synthesis activation. Glucosamine, chondroitin, and HA as co-factors.\n\n13,000+ five-star reviews. 30-day guarantee.",
    hooks: [
      {
        line: "Ten collagen types. Five tissue systems. One node.",
        rationale:
          "Architecture hook. The viewer wants to understand the formula in one glance, the visual delivers exactly that.",
      },
    ],
    asset: "/assets/The-Node-Map.png",
    rationale: {
      angle:
        "Visual comprehensiveness at a glance without requiring reading. Infographic as proof.",
      icp:
        "Solution-Aware to Product-Aware, the analytical researcher who compares formulas.",
      hookStrategy:
        "Central node branching to tissue systems, ingredient inputs, social proof, and guarantee badges. The viewer can read the entire formula in three seconds.",
      whyItWorks:
        "Mid-funnel reinforcement for the formula-comparison buyer. Every claim has a visual anchor, every ingredient has a role, every doubt has a badge.",
      strategicIntent:
        "Mid-funnel reinforcement across Campaigns 3 and 4. Pre-handles the 'is this actually different' question with a visual answer.",
      campaignRole:
        "Campaign 3, Ad Set 3.1 (The Category Split). Pairs with VSL #9 (Same Action, Different Outcome).",
    },
  },

  // ─── Produced static (additional, not yet in portfolio markdown) ──────
  {
    id: "an-expensive-because",
    brand: "ancient-nutrition",
    format: "static",
    awareness: "product-aware",
    status: "spec",
    state: "produced",
    conceptName: "Static: Expensive Because, Not Expensive Despite",
    builtDate: "Built May 2026",
    caption:
      "Yes, it costs more.\n\nIt costs more because the collagen comes from four real food sources, not one. Because it is paired with eggshell membrane, bone broth, and fermented mushrooms. Because it does the work cheap collagen never does.\n\nExpensive because. Not expensive despite.",
    hooks: [
      {
        line: "Yes, it costs more. Here is what you are paying for.",
        rationale:
          "Price-objection-first hook. Disarms the comparison shopper before the comparison starts.",
      },
    ],
    asset: "/assets/Expensive-Because-Ancient%20Nutrition%20.png",
    rationale: {
      angle:
        "Price defence by claiming the price. Ancient is expensive on purpose, and naming the purpose is the conversion event.",
      icp:
        "Product-Aware cart abandoners who already compared Ancient against cheaper single-source collagen.",
      hookStrategy:
        "Objection-first hook. The audience's actual hesitation is the opening line, which earns the next 30 seconds.",
      whyItWorks:
        "Trust comes from naming the obstacle before the audience raises it. The asset reads as candid pricing rather than defensive pricing.",
      strategicIntent:
        "Bottom-funnel retargeting workhorse for cart abandoners and PDP visitors.",
      campaignRole:
        "Campaign 4, Ad Set 4.2 (The Dream Day). Direct switch-from-cheap-collagen retargeting layer.",
    },
  },

  // ─── Advertorial driver static → the news-flash investigation page ─────
  {
    id: "an-collagen-investigation",
    brand: "ancient-nutrition",
    format: "static",
    awareness: "problem-aware",
    status: "spec",
    state: "produced",
    conceptName: "Static: The Industry Investigation",
    builtDate: "Built June 2026",
    caption:
      "A health journalist spent four months on one question: why do women taking collagen every single day still get only partial results?\n\nHer colleague Donna hasn't missed a dose in eight months. Harder nails. Slightly better skin. Knees that still crack on every stair.\n\nWhat she found about the $3.5 billion collagen industry explains everything. Full investigation at the link.",
    hooks: [
      {
        line: "Eight months of daily collagen. Her knees still crack on the stairs.",
        rationale:
          "Half-result hook. Names the exact pattern the buyer is living (one symptom improved, the rest did not) and frames it as an unsolved mystery worth clicking to solve.",
      },
    ],
    asset: "/advertorial/assets/an-static.webp",
    landingUrl: "/advertorial/ancient-nutrition-collagen.html",
    landingSource: "The Wellness Ledger",
    landingTitle: "The $3.5 Billion Collagen Industry's Best-Kept Secret",
    rationale: {
      angle:
        "News-flash expose framing. The static borrows the credibility of investigative journalism, a register a branded ad cannot occupy, so the curiosity gap reads as a public-interest story rather than a pitch.",
      icp:
        "The Partial Results Prisoner: the 40-plus woman already taking single-source collagen daily, quietly disappointed that only some symptoms improved.",
      hookStrategy:
        "Curiosity gap, not resolution. The headline names the secret without revealing it, and the cracked egg with a glowing core implies the hidden answer sits inside an everyday food. The click is the only way to close the loop.",
      whyItWorks:
        "It weaponises the reader's own half-result. She has lived the 'nails improved, joints did not' pattern, so 'why only partial results' reads as her exact question. The journalist frame and the $3.5B number raise the stakes and lower the sense of being sold to.",
      strategicIntent:
        "Top-of-funnel traffic driver. Its only job is the click-through to the long-form advertorial, where the Collagen Type Deficiency mechanism does the converting. Success is measured by click-through rate to the article, not direct purchase.",
      diversePotential:
        "The 'partial results' hook and the egg-with-a-secret visual extend into a carousel (one symptom per card), a six-second video hook, and a VSL thumbnail.",
      campaignRole:
        "Campaign 1 (The Partial Results Diagnosis), cold-traffic acquisition layer. The editorial, long-form entry point that warms cold audiences before the VSLs retarget them.",
    },
  },

  // ─── Advertorial driver static → the personal-essay editorial page ─────
  {
    id: "an-midlife-report",
    brand: "ancient-nutrition",
    format: "static",
    awareness: "problem-aware",
    status: "spec",
    state: "produced",
    conceptName: "Static: The Throw-It-Away Fix",
    builtDate: "Built June 2026",
    caption:
      "At 47, I'd quietly given up on my skin, hair, joints, nails and gut.\n\nThen my oldest friend told me the fix was something I throw in the trash almost every morning.\n\nTwo years of half-results from the collagen with the celebrity face on it. One dinner, one rabbit hole, and a name for why none of it ever fully worked. The full story is at the link.",
    hooks: [
      {
        line: "The fix was something I throw in the trash almost every morning.",
        rationale:
          "Curiosity-gap confession hook. Names an everyday, almost embarrassing object (the eggshell membrane) without revealing it, so the only way to close the loop is the click. Reads as a friend's overshare, not a brand claim.",
      },
    ],
    asset: "/advertorial/assets/mr-static.webp",
    landingUrl: "/advertorial/ancient-nutrition-midlife-report.html",
    landingSource: "The Midlife Wellness Report",
    landingTitle:
      "At 47, the Fix Was Something I Throw in the Trash Every Morning",
    rationale: {
      angle:
        "First-person discovery essay, not an exposé. Where the investigation static borrows a journalist's authority, this one borrows a peer's vulnerability. The advertorial it opens reads as a personal essay in a wellness publication, so the static has to feel like the confession that essay starts from.",
      icp:
        "The 40-plus woman living the all-at-once decline (skin, hair, joints, nails, gut) who is already taking a single-source collagen and quietly disappointed it only moved one needle. Problem-aware, partial-results prisoner, high word-of-mouth trust.",
      hookStrategy:
        "Two-layer curiosity gap. Line one is the full-body surrender every reader recognises; line two is the trash-can fix she cannot place. The withheld object (fermented eggshell membrane) is the bait, and the editorial masthead lowers her sense of being sold to before she clicks.",
      whyItWorks:
        "It weaponises her own half-result. She has lived 'better nails, everything else nothing,' so the essay's Collagen Type Deficiency mechanism reads as the answer to a question she has actually asked. Vulnerability outperforms authority for this peer-trust buyer, and the everyday-object reveal makes the science feel discovered rather than pitched.",
      strategicIntent:
        "Top-of-funnel cold-traffic driver. Its only job is the click into the long-form advertorial, where the mechanism, proof and offer do the converting. Measured on click-through to the article, not direct purchase.",
      diversePotential:
        "The 'gave up on five things / the fix is in your trash' structure extends into a carousel (one symptom per card, the reveal on the last), a six-second hook video, and an email subject line.",
      campaignRole:
        "Campaign 1 (The Partial Results Diagnosis), cold acquisition layer. The empathy-led editorial entry point that runs alongside the investigation static and warms cold audiences before the VSLs retarget them.",
    },
  },
];
