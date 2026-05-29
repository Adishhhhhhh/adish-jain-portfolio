import type { Concept } from "./types";

// PetHonesty 10-in-1 Multivitamin Chews for Dogs.
// Source: portfolio-content/ §11-1980. Produced visual assets only for now
// (2 videos + 3 statics). Concept-only VSL scripts intentionally omitted.

export const PETHONESTY_CONCEPTS: Concept[] = [
  {
    id: "ph-walk-shorter",
    brand: "pethonesty",
    format: "video",
    awareness: "problem-aware",
    status: "spec",
    state: "produced",
    conceptName: "VSL #1: The Walk That Keeps Getting Shorter",
    builtDate: "Built May 2026",
    caption:
      "Okay so this is my walking app data with my dog over the last eight months.\n\nMarch, two miles easy. May, mile and a half. July, just under a mile. August, to the end of the street and back.\n\nShe's six. Six is not old. Something was actually wrong.\n\nFood alone can't hit all the nutrition a dog needs as they age, no matter how premium.",
    hooks: [
      {
        line: "Okay so this is my walking app data with my dog over the last eight months.",
        rationale:
          "Visual proof device. Walking app data signals 'this is real' before any product claim is made. Bypasses 'it's just aging' as a viewer defense.",
      },
    ],
    asset: "/assets/The-Walk-That-Keeps-Getting-Shorter.mp4",
    poster: "/assets/posters/The-Walk-That-Keeps-Getting-Shorter.jpg",
    rationale: {
      angle:
        "Aging nutritional gap revealed through walking-app data as measurable, undeniable proof of decline.",
      icp:
        "The Anxious Caregiver, dog visibly slowing down, dismissing it as normal aging.",
      hookStrategy:
        "Walking-app data as visual proof device, signals 'this is real' before a single product claim is made. The owner expected another supplement claim and got monthly mileage instead.",
      whyItWorks:
        "Turns an invisible emotional experience into concrete evidence the viewer cannot rationalize away. Bypasses the 'it's just aging' defense and replaces it with a nutritional explanation. The numbers do the persuasion, not the script.",
      strategicIntent:
        "Moves the Problem Aware viewer from passive observation to active concern. Designed to convert the owner who sees the decline but has not connected it to nutrition yet. Top of the funnel, opens belief shift one.",
      diversePotential:
        "The walking-app data device works independently as a static, a carousel, or a 30-second cutdown. The same insight can be reformatted as an Instagram screenshot story.",
      campaignRole:
        "Anchors Campaign 1 (The Decline You're Normalizing), Ad Set 1.1 (Anxious Caregiver). Pairs with VSL #3 (Silent Decline) and VSL #7 (3 Early Warning Signs) as the same insight in three different scroll states.",
    },
  },
  {
    id: "ph-dog-to-dog",
    brand: "pethonesty",
    format: "video",
    awareness: "unaware",
    status: "spec",
    state: "produced",
    conceptName: "VSL #21: Dog-to-Dog Conversation",
    builtDate: "Built May 2026",
    caption:
      "Two dogs walk into a park. One can still jump. The other watches.\n\nIt isn't age. It's the gap a premium kibble bag was never built to close. Joints, gut, immunity, energy, all running on different clocks.\n\nOne chew, ten gaps closed.",
    hooks: [
      {
        line: "Two dogs walk into a park. One can still jump. The other watches.",
        rationale:
          "Anthropomorphic parable. Stops the scroll because the viewer expects a testimonial; gets a fable instead.",
      },
    ],
    asset: "/assets/Dog-to-Dog-Conversation.mp4",
    poster: "/assets/posters/Dog-to-Dog-Conversation.jpg",
    rationale: {
      angle:
        "Anthropomorphized dog-to-dog dialogue surfaces the nutritional gap through peer comparison, the social register dog owners actually use to narrate decline.",
      icp:
        "Broad reach across all owner clusters. Skit format earns the scroll-stop from audiences fatigued by direct supplement claims.",
      hookStrategy:
        "Two-dog observational opening. The visual is the entire hook; copy stays minimal and the comparison does the work in the first three seconds.",
      whyItWorks:
        "Owners narrate decline as 'he just stopped jumping for the ball' before they ever narrate it as a nutrition problem. The skit speaks in that voice. The reframe from social observation to nutritional explanation lands harder when the viewer has already accepted the social observation.",
      strategicIntent:
        "Unaware-to-Problem-Aware bridge for scroll-resistant, ad-fatigued audiences. Entertainment-first format does the targeting; only viewers who care continue past the first five seconds.",
      campaignRole:
        "Campaign 5 (Emotional Core and Broad Reach), Ad Set 5.2. The broad-reach humor entry for the rotation, distinct from VSL #6's emotional cinematic register.",
    },
  },
  {
    id: "ph-anatomy",
    brand: "pethonesty",
    format: "static",
    awareness: "solution-aware",
    status: "spec",
    state: "produced",
    conceptName: "Static #1: The Anatomy",
    builtDate: "Built May 2026",
    caption:
      "One chew. Ten jobs.\n\nGlucosamine for joints. Omega-3s for coat and brain. Probiotics for gut. B-complex for energy. Pumpkin fiber base for absorption.\n\nNo soy, no palm oil, no fillers that block the rest from getting in.",
    hooks: [
      {
        line: "One chew. Ten jobs.",
        rationale:
          "Pyramid-principle headline. The educated viewer wants the spec sheet first; the rest of the static is annotation.",
      },
    ],
    asset: "/assets/The-Anatomy-AD.png",
    rationale: {
      angle:
        "Full-formula anatomy disclosure. Ten ingredients mapped to ten systems, no claims that the ingredients don't already justify.",
      icp:
        "The Frustrated Optimizer, mid-funnel comparison shopper who reads ingredient panels before product descriptions.",
      hookStrategy:
        "The image is the hook. A central chew with ten branching annotations, each ingredient tied to its tissue role. Format does the work before copy is even read.",
      whyItWorks:
        "Mid-funnel reinforcement for owners who already accept the consolidation thesis and need the formula confirmation to feel safe converting. Specificity is the proof.",
      strategicIntent:
        "Workhorse retargeting static. Pre-handles formula objections without requiring the viewer to leave the ad to research.",
      campaignRole:
        "Campaign 2 (The Filler Truth) and Campaign 3 (Proof Without a Pitch) as mid-funnel consolidation reinforcement. Pairs with VSL #4 (Natural Doesn't Mean Safe) for the same belief shift in video form.",
    },
  },
  {
    id: "ph-90-day-timeline",
    brand: "pethonesty",
    format: "static",
    awareness: "product-aware",
    status: "spec",
    state: "produced",
    conceptName: "Static #2: The 90-Day Timeline",
    builtDate: "Built May 2026",
    caption:
      "Day 30. The coat looks different first.\nDay 60. The walk gets longer.\nDay 90. The dog you remember.\n\nNutrition fills gaps on its own schedule. The chew is daily. The change is cumulative.",
    hooks: [
      {
        line: "Day 30. The coat looks different first.",
        rationale:
          "Specificity-as-proof hook. Cadenced milestones make the claim feel mechanical, not magical.",
      },
    ],
    asset: "/assets/90-day-timeline%20.png",
    rationale: {
      angle:
        "Expectation-setting timeline that pre-handles the '30-day cancel' objection by extending the buyer's mental commitment to 90.",
      icp:
        "The Proactive Planner and Anxious Caregiver, both willing to subscribe but anxious about the timeline.",
      hookStrategy:
        "Three milestones, three weeks, three sensory cues. The cadence mirrors a habit tracker, which is the audience's existing trust format.",
      whyItWorks:
        "Subscription buyers cancel before the product has had time to compound. Naming the sequence (coat first, walk second, full restoration third) sets the right window of patience before the next billing cycle decision.",
      strategicIntent:
        "Subscription anchor. Designed to live in the post-purchase email and in the retargeting rotation that follows the first month.",
      campaignRole:
        "Campaign 4 (Results and Conversion), retargeting Ad Sets. Pairs with VSL #12 (30/60/90 Day Timeline) for the same insight in video form.",
    },
  },
  {
    id: "ph-everything",
    brand: "pethonesty",
    format: "static",
    awareness: "problem-aware",
    status: "spec",
    state: "produced",
    conceptName: "Static #3: The Everything",
    builtDate: "Built May 2026",
    caption:
      "Joint pill. Coat oil. Probiotic chew. Multivitamin. Calming chew. Five bottles. Five schedules.\n\nOr one chew that does all of it, with a base that helps the rest get absorbed.",
    hooks: [
      {
        line: "Five bottles. Five schedules. Or one chew.",
        rationale:
          "Reduction hook. Names the operational pain the owner is living before naming the product.",
      },
    ],
    asset: "/assets/Everything-your-dog-needs.png",
    rationale: {
      angle:
        "Operational consolidation. The owner's shelf is the problem the asset solves before the product does.",
      icp:
        "Frustrated Optimizers and Anxious Caregivers already running a 3-5 bottle stack.",
      hookStrategy:
        "Pain-first inventory hook. Listing the audience's own cabinet is the scroll-stop; the pivot to consolidation is the conversion event.",
      whyItWorks:
        "Owners describe their supplement shelf as exhausting to manage in the qualitative research. The asset reflects that exhaustion back, then resolves it.",
      strategicIntent:
        "Cold and warm traffic conversion across multiple campaign placements. Generalist consolidation pitch, broad enough to use everywhere.",
      campaignRole:
        "Campaigns 1, 3, and 4. The most-deployed static in the rotation by design. It earns its slot in problem-aware, solution-aware, and product-aware contexts because consolidation works at every belief stage.",
    },
  },
];
