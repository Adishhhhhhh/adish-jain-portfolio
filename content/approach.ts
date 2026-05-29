// Notion section: Approach. Verbatim from Adish's portfolio.
// "How I build creative assets, from first principles to final execution."

export type ApproachPart = { n: string; title: string; markdown: string };

export const APPROACH_INTRO =
  "How I build creative assets, from first principles to final execution.";

export const APPROACH_PARTS: ApproachPart[] = [
  {
    n: "01",
    title: "Research Foundation",
    markdown: `Every project starts with structured intelligence gathering. No research, no creative. This phase takes 3-5 days for a new brand and it's non-negotiable.

**Competitive Analysis**

- Audit 200-500+ competitor ads across platforms
- Identify long-running ads as proof of performance, not just recency
- Map gaps in positioning, messaging, and awareness-level coverage
- Extract successful patterns across hooks, story structures, and CTAs

**Customer Voice Extraction**

- Analyze 100-200+ reviews for pain language, desire language, objection patterns
- Extract exact phrases customers use, not marketer assumptions
- Map emotional drivers behind purchase decisions
- Find the "ghost in the machine": what they're really buying beneath the surface

**Market Sizing and Segmentation**

- Calculate TAM by awareness level (unaware through most aware)
- Build ICP profiles with specific pain and desire manifestations
- Identify underserved segments competitors are ignoring
- Map buying triggers, beliefs, and objection hierarchies

**Product Mechanism Deep-Dive**

- Understand the unique mechanism at a technical level
- Translate technical proof into customer-facing language
- Position mechanism as differentiation, not just a feature list
- Identify what makes this product defensible against alternatives`,
  },
  {
    n: "02",
    title: "Strategic Framework Development",
    markdown: `Research becomes strategy through constraint definition.

**The Ideation Equation**

Creative ideation isn't random brainstorming. It's the intersection of constraints that increase the likelihood of standing out and finding winning angles to double down on.

Those constraints are:

- Product and brand research (what's true about this specific offer)
- Competitive research (what's working, what's saturated, what's being ignored)
- Unique mechanism (the functional reason it works differently)
- ICP definition (who specifically, not "anyone who needs more energy")
- Awareness levels within those ICPs (unaware needs stories, solution-aware needs comparisons)
- Target market's beliefs, norms, cliches, and buying triggers
- Input from live campaigns (data refines the model over time)

These variables form the equation. The constraint is where creativity is conceived, not where it's killed.

You can't write a winning VSL for an unaware audience using solution-aware messaging. You can't write a comparison static without mapping competitor positioning first. The constraints aren't limitations. They're the scaffolding that makes systematic creative output possible.

**Direct Response Principles Applied**

- Problem agitation before solution introduction
- Unique mechanism as differentiation, not just benefit stacking
- Proof stacking: clinical, authority, social
- Urgency creation: scarcity, FOMO, consequence of inaction
- CTA clarity: one action, no decision paralysis`,
  },
  {
    n: "03",
    title: "AI Systems Architecture",
    markdown: `I use AI for speed and scale. I use human judgment for strategy and refinement.

**What AI Does**

*Research Synthesis*

- Processes hundreds of competitor ads to identify patterns
- Extracts customer language from review databases
- Maps awareness-level distribution across messaging
- Generates competitive positioning matrices

*Asset Generation*

- VSL script generation: hook variants, story structures, CTAs
- Static ad copy across formats: comparison, testimonial, benefit-driven
- Advertorial long-form content: education to conversion flow
- Image generation prompts: JSON specifications for text-to-image models
- Angle ideation at volume: 50+ concepts per project

*Campaign Architecture*

- Awareness-level creative mapping
- A/B testing variant creation
- Format recommendation based on awareness stage

**What I Do**

*Strategic Direction*

- Define the constraints AI operates within
- Choose which angles have strategic merit, not just novelty
- Refine positioning to exploit competitive gaps
- Decide what gets produced and what gets killed

*Creative Refinement*

- Edit AI output for customer voice authenticity
- Tighten pacing, remove filler, sharpen hooks
- Ensure mechanism-first storytelling over generic benefit claims
- Validate emotional resonance and conversion psychology

*Quality Control*

- Test scripts against direct response principles
- Verify claims are defensible and compliant
- Check for cliche and oversaturation (AI defaults to tired patterns)

**The Workflow**

AI generates volume → I refine for strategy → AI iterates on feedback → I approve final assets

This creates 10x output velocity versus traditional copywriting while maintaining strategic coherence.`,
  },
  {
    n: "04",
    title: "Asset Production Pipeline",
    markdown: `**VSL Scripts**

- Awareness-level specific: stories for unaware, comparisons for solution-aware
- 45-90 second optimal length, platform- and awareness-dependent
- 2-3 hook variants per script for A/B testing
- Customer language integrated directly from review extraction
- Mechanism-first education: why it works differently, not just that it works

**Static Ads**

- Comparison charts: upstream vs downstream, product vs alternatives
- Belief disruption visuals: challenging category assumptions
- Testimonial and review formats for social proof at scale
- Benefit-driven when audience is warm or in retargeting

**Advertorials**

- Long-form education to conversion arc
- Story-driven: personal transformation and discovery narrative
- Scientific proof layered throughout, not dumped at the end
- Objection handling woven in across the piece, not isolated to an FAQ

**Image Generation (JSON Method)**

- JSON prompt specifications for text-to-image models
- Design token systems covering color, typography, and layout constraints
- Format diversity: product shots, lifestyle, diagrams, comparison tables
- Reverse-engineered from 60+ proven static ads, image to JSON, not the other way around

**Output:** 20-30 creative assets per project, mapped to awareness levels and ICPs, ready for deployment.`,
  },
  {
    n: "05",
    title: "Iteration and Compound Learning",
    markdown: `Creative ideation compounds when focused on one offer consistently. This portfolio work was built over focused days to weeks. With real campaign data, in-house mentorship, daily iteration cycles, and team collaboration, the output quality and velocity would amplify exponentially.

The constraint-based ideation framework gets sharper with each project. The AI prompts get more refined. The customer language database grows. The competitive intelligence deepens.

**What accelerates this further:**

- Real campaign data (what converts versus what doesn't)
- Team environment with cross-functional feedback loops
- Senior strategist reviewing output
- Daily iteration that compounds over time

I'm an asset that compounds with investment. Not of money, but of time, context, and collaboration. The systems are built. The workflow is proven. The output is here. What's missing is the environment that turns systematic creative into systematic wins.`,
  },
];
