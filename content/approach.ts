// Notion section: Approach, restructured for depth. Five stages, one loop,
// each stage with nested collapsible items. Sourced from the four case
// studies, the research orchestration framework, and Adish's process notes.
// Rules: no em dashes, no contrast-negation patterns in narration.

export type ApproachItem = { heading: string; markdown: string };

export type ApproachPart = {
  n: string;
  /** anchor id for the section rail */
  id: string;
  title: string;
  /** one-breath framing line rendered under the title */
  intro: string;
  /** optional diagram rendered between the intro and the items */
  diagram?: "ideation" | "architecture" | "workflow";
  items: ApproachItem[];
};

export const APPROACH_INTRO =
  "How I build creative assets, from first principles to final execution.";

export const APPROACH_PARTS: ApproachPart[] = [
  // ── 01 ──────────────────────────────────────────────────────────────────
  {
    n: "01",
    id: "research",
    title: "Research Foundation",
    intro:
      "Every project starts with structured intelligence gathering. No research, no creative. This phase takes 3 to 5 days for a new brand and it is non-negotiable. The goal is unfair context: the customer's exact language, the competitor's blind spots, and the product's mechanism, held at a depth nobody else in the account has.",
    items: [
      {
        heading: "Competitive Intelligence",
        markdown: `The Meta Ad Library is an open book. Most teams skim it. I catalog it.

- Audit 200 to 500+ competitor ads across Meta and TikTok, covering every competitor on the same spectrum and scale level, not just the two obvious rivals
- Treat long-running ads as proof of performance. Recency tells you what they are testing; longevity tells you what is working
- Build a profile per competitor
  - Positioning claim and price point
  - Product use cases
  - The personas and ICPs their creative is visibly targeting
  - The acquisition funnel behind the click
- Tear down each competitor's creative in depth
  - Angles and awareness coverage
  - Hooks and the first three seconds
  - Script structure and copy patterns
  - Format mix and variation families
  - Offers, CTAs, and landing destinations
- Quantify their format mix (UGC vs static vs educational split) and read testing velocity from active ad volume
- Map the category conversation: what everyone says, what nobody says, which claims are saturated and which are unclaimed

**Output: a white-space map.** In the MitoQ case study this pass surfaced the one position no competitor could occupy, prevention at the source, and the entire campaign hangs off it.`,
      },
      {
        heading: "Customer Voice and Psychographics",
        markdown: `The goal is being able to speak as the customer, from inside their head.

- Analyze 100 to 200+ reviews per product for pain language, desire language, and objection patterns
  - Product and Amazon reviews for purchase-moment language
  - Reddit and Quora for unguarded peer talk
  - YouTube and TikTok comments for reaction language
  - Community forums for long-tenure vocabulary
- Extract exact phrases, never marketer paraphrases
  - Cliches and buzzwords, documented per ICP
  - Running jokes and shared references
  - Register and tone: how they talk when no brand is listening
- Harvest the metaphors they reach for unprompted. "The pharmacy on the counter." "Wired but scattered." These become creative raw material
- Build the failed-solution autopsy: the frustration, what they already tried, why it failed them. The gap between what they bought and what they wanted is where the next ad lives
- Weight behavioral signals over stated preferences. What they screenshot, save, and send matters more than what they claim to want

**The verbatims feed hooks directly.** "I'm not focused, I'm just caffeinated" came out of this pass and opens a NeuroGum VSL unchanged.`,
      },
      {
        heading: "Market Sizing, Sophistication and Segmentation",
        markdown: `- Calculate TAM by awareness level, per ICP and persona, as a distribution: what share of the market is unaware, problem aware, solution aware, product aware, most aware, and what each stage needs from creative
- Turn the distribution into a targeting decision instead of a demographics deck. For PetHonesty, Product Aware plus Solution Aware held 55 to 65% of the market, so the rotation leads there
- Assess market sophistication separately from awareness, using Schwartz's five stages. A stage-two market still buys claims. A stage-four market needs a new mechanism. A stage-five market buys identity. Pitching a mechanism to a market that needs identity is how good products run dead creative
- Build two to three named ICP profiles per brand (the Anxious Caregiver, the Skeptical Optimizer, the Partial Results Prisoner), each with specific pains, desires, objections, and buying triggers
- Identify the underserved segments competitors are ignoring, then check whether the product can credibly serve them before a single concept is written`,
      },
      {
        heading: "Product Mechanism Deep-Dive",
        markdown: `- Develop two unique mechanisms. The **problem mechanism** explains why the pain exists and persists despite everything the customer has tried. The **solution mechanism** explains why this product resolves what the alternatives structurally cannot. Ancient Nutrition's Collagen Type Deficiency is the problem mechanism; the full-spectrum activation stack is the solution mechanism. One creates the itch, the other is the only scratch
- Understand the mechanism at a technical level first, then translate it into customer-facing language without flattening it
- Calibrate the mechanism to the persona. The importance of sleep reads differently to a 60-year-old than to a 30-year-old. Same science, different stakes, different vocabulary, different proof
- Map every proof point: the evidence, its source, and what precisely it proves. Claims that cannot be traced to receipts get cut
- Position the mechanism as differentiation rather than a feature list. The mechanism is the reason to believe, and the reason the cheaper alternative stays in the cart`,
      },
      {
        heading: "Offer and Funnel Context",
        markdown: `The creative closes what the offer opens, so both get researched together.

- Price framing is mapped before scripts are written: per-day math, stack-replacement math, cost-of-inaction math. $85 a month meets resistance; $0.85 a day next to a five-product stack reads as relief
- Risk reversal is inventoried as creative material: guarantees, trials, and subscription terms decide how hard a CTA can close
- Subscription mechanics shape the asset list. The 30-day churn window is why timeline creatives exist in three of the four case studies
- The click destination is chosen per awareness stage: advertorial pre-sell for cold education, product page for warm intent, and the ad is written to its lander so both make one argument`,
      },
      {
        heading: "Deep Desire and Identity Research",
        markdown: `Under every stated desire there is an identity purchase.

- Uncover identity-level aspirations, emotional end-states, and the social validation fantasies driving consideration. The MitoQ buyer is not buying CoQ10; she is buying "present and active," the version of herself her grandkids remember
- Run the dimensionalization ladder on every benefit: feature, functional benefit, emotional payoff, identity claim. Copy that stops at the functional rung reads like a label
- Locate the identity gap: the tension between how the customer currently sees themselves and who they are trying to become. Every strong close sells the second self`,
      },
      {
        heading: "Master Brief Synthesis",
        markdown: `- All research converges into one master brief: positioning messages, ICP profiles, awareness and sophistication calls, both mechanisms, the verbatim bank, the proof map
- The positioning messages act as the anchor for every creative decision that follows. If an asset cannot be traced back to the brief, it does not get made
- Every messaging recommendation grounds in documented evidence, so 20 to 30 assets cohere as one campaign instead of scattering as 30 opinions`,
      },
    ],
  },

  // ── 02 ──────────────────────────────────────────────────────────────────
  {
    n: "02",
    id: "strategy",
    title: "Strategic Framework",
    intro:
      "Research becomes strategy through constraint definition. This is where the brief turns into a system: one positioning anchor, a message for every awareness stage, and an architecture that gives every asset a job.",
    diagram: "architecture",
    items: [
      {
        heading: "The Positioning Anchor",
        markdown: `- One reframe, held everywhere. Upstream vs downstream for MitoQ. Energy you can steer for NeuroGum. Expensive because, not expensive despite, for Ancient Nutrition
- The anchor claims the white space the competitive map exposed, phrased in language the customer research proved the audience already thinks in
- Own the language, not just the position. "Patching holes vs preventing them" is engineered to be repeated by the buyer to themselves after the ad is gone`,
      },
      {
        heading: "Awareness-Stage Mapping",
        markdown: `- Every campaign is built around Schwartz's awareness spectrum: unaware, problem aware, solution aware, product aware, most aware
- Each stage gets its own entry point, message, format, and CTA. Stories for the unaware, mechanism education for the solution aware, direct comparison for the product aware, reinforcement for the most aware
- Most DTC brands overinvest in stages four and five and underinvest in one through three, which is exactly where the cheapest attention and the biggest creative opportunity sit`,
      },
      {
        heading: "Campaign Architecture",
        markdown: `The unit of planning is the intersection: **persona × angle × offer**, with format last, because format is the cheapest variable to swap.

- Campaigns target an awareness stage with a goal. Ad sets target an ICP intersection with specific creatives. No asset runs without a defined place in the system
- The same creative can hold two jobs. NeuroGum's VSL #3 attacks coffee in Campaign 1 and teaches the pairing in Campaign 2. Same asset, different strategic function, decided by audience
- The architecture is what makes the right person see the right message at the right stage: no impressions wasted educating believers, no selling to people who do not yet see the problem`,
      },
      {
        heading: "Direct Response Principles, the Full Stack",
        markdown: `These are structural, not tactics bolted on at the end. Grouped by the job each does:

**Attention.** Pattern-interrupt hooks that stop the scroll in the first one to three seconds. Curiosity gaps that only the next line can close. Open loops that hold the viewer through the mechanism.

**Emotion.** Storytelling before selling. Agitation that names the pain sharper than the customer can. Relatability: talking in their own language, their cliches, their register. Dimensionalization that turns a feature into a lived scene.

**Belief.** Mechanism-first positioning: why it works, not just that it works. Proof stacking: clinical, authority, social, in that order of scrutiny. Intensification: one claim escalated with evidence beats five claims stated once. Neurochemical sequencing: curiosity and rapport before education, because logical delivery alone does not close.

**Action.** Desire manufacturing before the offer, so the CTA harvests instead of pitches. Future pacing that lets the prospect live the after-state. Urgency and scarcity only where they are true. Irresistible offer framing plus risk reversal. One CTA, one action, no decision paralysis.`,
      },
    ],
  },

  // ── 03 ──────────────────────────────────────────────────────────────────
  {
    n: "03",
    id: "ideation",
    title: "Creative Ideation",
    intro:
      "Ideation is a constraint system with an inspiration layer on top and an incubation process underneath. The winning concepts live where everything intersects.",
    diagram: "ideation",
    items: [
      {
        heading: "The Constraint Set",
        markdown: `Creativity is conceived inside constraints. The variables:

- Product and brand truths: what is verifiably true about this specific offer
- Competitive research: what is working, what is saturated, what is being ignored
- The unique mechanisms: the functional reason it works differently, problem side and solution side
- ICP definition: who specifically, never "anyone who needs more energy"
- Awareness and sophistication stage: unaware needs stories, solution aware needs comparisons, jaded markets need identity
- The target market's beliefs, norms, cliches, and buying triggers
- Input from live campaigns, when it exists, refining the model over time

You cannot write a winning VSL for an unaware audience using solution-aware messaging. The constraints are the scaffolding that makes volume possible without drift.`,
      },
      {
        heading: "The Inspiration Layer",
        markdown: `On top of the constraints sits everything the constraints cannot generate:

- Organic content: the memes, skits, and native formats the audience already rewards with attention. The Autocorrect static is an iMessage thread because that is what the feed already looks like
- The swipe bank: proven direct response assets, classic and current, studied until their structure is muscle memory
- The personal hive mind: my own knowledge base, the books, the cross-domain content I consume, and the lived experiences that float up mid-process. A hook can come from a walking app, a breakup letter, or a receptor pathway, if the mind is stocked`,
      },
      {
        heading: "The Incubation Process",
        markdown: `The least talked-about stage in direct response, and the one that separates volume from noise.

- Load the constraints, saturate on the research, then step away. The subconscious keeps working the intersection while the desk is closed
- Ideas surface on walks, between projects, mid-shower, and they surface pre-filtered, because the constraints were loaded first
- This is why the process front-loads research so hard: incubation quality is a function of input quality. A lean, stocked mind produces angles a prompt never will`,
      },
      {
        heading: "Where Winning Concepts Live",
        markdown: `Run every candidate concept through the full stack of constraints. Most die there. The ones that survive every circle, true to the product, differentiated from the category, aimed at one ICP, matched to their stage, phrased in their language, are the ones worth producing.

The diagram above is the actual test: a concept that clears only two or three circles is a clever line. A concept at the center is a campaign.`,
      },
    ],
  },

  // ── 04 ──────────────────────────────────────────────────────────────────
  {
    n: "04",
    id: "production",
    title: "Production System",
    intro:
      "AI for speed and scale, human judgment for strategy, taste, and the kill decision. One system, built not borrowed, and every format chosen by awareness stage and emotional register, never by default.",
    diagram: "workflow",
    items: [
      {
        heading: "What AI Does",
        markdown: `- Research synthesis: processes hundreds of competitor ads into pattern maps, extracts customer language from review databases at volume, builds positioning matrices and awareness-distribution reads
- Asset generation: VSL script variants, hook alternatives, static ad concepts, advertorial long-form, angle ideation at 50+ concepts per project. Across the four-brand portfolio that meant roughly 85 script blocks, including 23 VSL scripts for Ancient Nutrition alone
- Architecture support: awareness-level creative mapping, A/B variant families, format recommendations per stage`,
      },
      {
        heading: "What I Do",
        markdown: `- Define the constraints AI operates within. The output is only as strategic as the brief it is generated against
- Make the merit calls: which angles have strategic weight versus mere novelty, what gets produced, what gets killed
- Edit for customer-voice authenticity, tighten pacing, sharpen hooks, and strip the cliches AI defaults to. AI reaches for tired patterns; a swipe-trained ear catches them
- Verify every claim is defensible and compliant before anything ships`,
      },
      {
        heading: "The Skill Library",
        markdown: `The engine is a library of purpose-built skills inside Claude and Claude Code, each owning one stage of the pipeline:

- **Research:** a method-actor research system that gets inside the customer's head before any copy exists: psychology maps, content ecosystem maps (what they watch, read, follow, and which rabbit holes they fall down), customer avatars, verbatim language banks, market awareness analysis. Swipe intelligence pulls from the Meta Ad Library, Taboola, Outbrain, and ClickBank, so every concept is grounded in ads already spending money
- **Brand context:** a brand-brief creator converts raw research into a reusable brand brain: brand context, avatars, and an angle library, packaged so every downstream skill loads it on demand. One pass, and every later script is on-voice by construction
- **Scripting:** a reference-based copywriting skill deconstructs proven scripts and rebuilds them for the loaded brand, running internal quality checks before anything is delivered. An advertorial copywriter pairs with a lander engine that turns finished copy into production HTML; the three live advertorials in this Library shipped through it
- **Verified stats:** a maintained swipe file of source-checked statistics. No number ships without a traceable citation`,
      },
      {
        heading: "The Video and Voice Pipeline",
        markdown: `- Script to shot plan: every VSL is broken into a per-clip prompting document, and script beats are mapped to planned B-roll before anything is generated, so the edit plan drives what gets generated
- Generation through Kling and Seedance, driven by dedicated frame-to-video prompt skills. Frame consistency is engineered: the reference frame's subject is translated into exhaustive written description (face structure, skin texture, wardrobe, camera characteristics) so the same person holds across separately generated clips, with anti-artifact rules riding in every prompt
- One clip per prompt, reviewed before the next is issued. Volume never outruns judgment
- Voice through ElevenLabs, with a consistency system that keeps delivery uniform across separately generated segments, so a multi-clip VSL reads as one continuous performance
- Assembly, timing, and finishing in Premiere Pro. Output: the five produced videos in this Library
- On the wider bench, cast per job: dedicated prompt skills for VEO 3 and Sora, plus Gemini and Higgsfield`,
      },
      {
        heading: "VSL Scripts",
        markdown: `- Awareness-level specific: stories for unaware, mechanism education for solution aware, comparison for product aware
- 45 to 90 seconds optimal, never past 120. Attention is a hard constraint: no filler, no preamble, no recap, every line earns the next
- Two to three hook variants per script for testing, each with its own rationale
- Customer language integrated straight from the verbatim bank
- Format follows emotional register: heavy emotional scripts run UGC confessional, mechanism scripts run educational DR, humor runs skit. No format by default`,
      },
      {
        heading: "Static Ads",
        markdown: `- Comparison charts, one of the highest-performing static families in DTC health, because they let the viewer self-diagnose without reading a word
- Belief-disruption visuals that attack a category assumption in a single frame
- Native-format statics: iMessage threads, reviews turned into ads, formats that pretend not to be advertising
- Testimonial and social-proof formats built on specific numbers, never vague claims
- Benefit-driven product shots reserved for warm and most-aware retargeting`,
      },
      {
        heading: "Advertorials",
        markdown: `- Long-form education-to-conversion arc, story-driven: personal transformation or investigation narrative
- Scientific proof layered through the piece, not dumped at the end
- Objection handling woven in as the story unfolds, not isolated in an FAQ
- Two registers built and tested: journalist investigation and first-person confession, because authority and vulnerability convert different readers`,
      },
      {
        heading: "Statics: Reverse-Engineered Systems",
        markdown: `- The generation system is reverse-engineered from proven ads: winning statics are deconstructed into layout, hierarchy, and copy structure, then encoded as reusable generation systems in Claude Code. Proven ad in, repeatable system out
- An earlier JSON-spec method proved the approach and was retired. The current system keeps the rigor and drops the ceremony
- System-level consistency keeps a brand's statics coherent across a 20-asset rotation
- Format diversity on demand: comparison charts, native formats, diagrams, product shots, lifestyle scenes
- Output: the 18 finished statics in this Library`,
      },
      {
        heading: "The QA Gates",
        markdown: `Four gates, run in order. Nothing ships on machine judgment alone.

- **Gate 1, machine tells:** hard bans on known AI-writing constructions, contrast negation first among them, thesis restatement, the patterns a trained eye spots in one line
- **Gate 2, the banned list:** a standing banned-constructions file travels with every project through a global context layer, so the rules are enforced everywhere instead of living in one prompt
- **Gate 3, receipts:** every claim and statistic clears the verified-stats file before publication
- **Gate 4, the human read:** nothing ships that I have not read the way the customer would`,
      },
      {
        heading: "The Workflow Loop",
        markdown: `AI generates volume → I refine for strategy → AI iterates on feedback → I approve final assets.

Ten times the output velocity of traditional copywriting, with strategic coherence intact, because every loop runs inside the constraint set defined upstream. The loop is also where compounding starts: every edit teaches the next generation pass.`,
      },
    ],
  },

  // ── 05 ──────────────────────────────────────────────────────────────────
  {
    n: "05",
    id: "iteration",
    title: "Testing, Iteration and Compound Learning",
    intro:
      "Output: 20 to 30 assets per project, mapped to awareness levels and ICPs, ready for deployment. Then the system starts learning.",
    items: [
      {
        heading: "The Testing Logic",
        markdown: `- Hooks are the first variable: same body, different opening, because the first three seconds decide most of the outcome
- Judgment waits for sample: 72 hours, 2,000 impressions, or 150 clicks, whichever lands first, before any verdict on a creative
- The metric hierarchy is diagnostic: 3-second view rate reads hook health, CTR reads attention, landing CVR reads offer and message match. Each failure points at a different fix
- Kill and scale are thresholds set before launch, and budget rebalances weekly toward marginal winners until returns diminish
- Fatigue has signals: frequency creep and CTR decay trigger a refresh from the angle map, and the map is already written
- Creative diversity is portfolio logic: angles spread across stages and ICPs so fatigue in one lane never stalls the account
- Winners get scaled and multiplied into adjacent formats. Learnings feed back into the constraint set, so the next generation pass starts smarter`,
      },
      {
        heading: "Compound Learning",
        markdown: `Creative ideation compounds when focused on one offer consistently, and the same compounding applies to any offer I generate concepts for. This portfolio work was built over focused days to months collectively. With real campaign data, in-house mentorship, daily iteration cycles, and team collaboration, the output quality and velocity would amplify exponentially.

- The constraint-based ideation framework gets sharper with each project
- The AI prompts and skills get more refined, the customer language database grows, the competitive intelligence deepens`,
      },
      {
        heading: "What Accelerates It",
        markdown: `- Real campaign data: what converts versus what does not
- A team environment with cross-functional feedback loops
- A senior strategist reviewing output
- Daily iteration that compounds over time

I am an asset that compounds with investment. Not of money, but of time, context, and collaboration. The systems are built. The workflow is proven. The output is here. What is missing is the environment that turns systematic creative into systematic wins.`,
      },
    ],
  },
];
