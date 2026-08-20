// Self-assigned projects. Agents, skills, and systems built outside client
// work, because the fastest way to understand a discipline is to try to
// automate a piece of it and find out where it refuses.
//
// Everything here is running or in active development. Depth of the write-up
// tracks depth of the thing, so the research system gets paragraphs and the
// smaller tools get a line.

export type Project = {
  id: string;
  name: string;
  /** what kind of thing it is */
  kind: string;
  status: "In use" | "In development" | "Ongoing";
  /** one line, what it does */
  summary: string;
  /** the interesting part, in the detail the thing deserves */
  markdown: string;
};

export const PROJECTS_INTRO =
  "Agents, skills, and systems I build for myself, mostly to find out where a process breaks when you try to automate it.";

export const PROJECTS: Project[] = [
  {
    id: "deep-research",
    name: "deep-research",
    kind: "Research agent",
    status: "In development",
    summary:
      "A research system that gathers a corpus, reads it several different ways, and refuses to let a claim into a document without a pointer back to where it came from.",
    markdown: `The problem it exists for: a well-written research document reads as authoritative whether it is true or invented. Invented depth captivates nobody, because a model's stereotype of a persona is exactly what that persona already tunes out. The gap between a hook that lands and one that dies is often that one was harvested and one was hallucinated, and most research cannot tell you which.

Five things it does that I could not find anywhere else.

**Source discovery runs before gathering.** Where a category's conversation actually lives is a finding rather than an assumption. Menopause supplements live in Facebook groups. Golf equipment lives on YouTube and in forums. Everything else hardcodes Reddit and Amazon and hopes.

**It researches in two directions.** Inbound starts from what customers say, which caps it at problem-aware buyers forever, since people can only name problems they already know they have. Outbound starts from the product's mechanism, moves out through the systems it touches, and lands on an everyday symptom nobody has connected to the category.

**It computes where those two meet.** A validated unaware angle is a problem the product genuinely addresses, whose symptoms already appear verbatim in the corpus, that nobody has connected to the category, and that no competitor is claiming. That intersection is only computable if both directions ran and both corpora were kept.

**It attacks its own output.** A falsification pass hunts disconfirming evidence, re-tests every whitespace gap, and re-checks inference. Some findings die. A pass that confirms everything did not run.

**It can find out whether it was right.** Claims carry a confidence mark and an exposure mark, because a shaky claim nobody acts on is harmless and a shaky claim carrying the whole campaign is the one to catch. Outcomes get written back, so eventually you know whether your three-source claims actually beat your one-source claims.

A run moves through eight phases behind gates, from intake and corpus to falsification and assembly, and produces thirteen documents plus the corpus itself. The governing idea is gather once, read many times: the eight questions a strategist usually asks become eight readings of one shared corpus instead of eight separate research runs.`,
  },
  {
    id: "lander-engine",
    name: "Lander Engine",
    kind: "Autonomous agent",
    status: "In use",
    summary:
      "Generates advertorials and listicles as Replo-compatible HTML, built around one rule: the page has to not feel like an advertisement.",
    markdown: `A winning advertorial reads like editorial the reader stumbled into. A personal story, an industry exposé, a nine-reasons listicle on some ordinary blog. The disguise is the conversion mechanism, so the instant a page smells like a brand's sales page the reader's defences fire and the page is dead.

That single constraint decides everything downstream, including some things that feel wrong at first. **Polish is the enemy.** Over-designed, perfectly branded, agency-grade visuals break the illusion, so high-end web design skills actively hurt an advertorial. Controlled imperfection is the craft. The reader should be emotionally invested in a story well before they consciously register a product.

Underneath it sits the part that took the longest: a swipe knowledge base distilled from 95 real, live, high-converting advertorials, broken into 118 full teardowns and then synthesised into five working files. Twenty-three structural archetypes with a journey library mapped by awareness stage and vertical. A tactics codex across thirteen categories. Headline formulas, voice archetypes, and belief-shift patterns. A visual system. And the file that governs the rest, an information-selection doctrine that decides what to foreground, what to let tag along, what to omit, and what to dimensionalize, per awareness stage and ICP and angle.

Output runs through an eleven-dimension review rubric before it ships, checking customer language, believability, compliance, and AI voice markers.`,
  },
  {
    id: "skill-library",
    name: "The creative skill library",
    kind: "Skill chain",
    status: "In use",
    summary:
      "A chain of purpose-built skills where each one owns a stage of the pipeline and hands a structured artifact to the next.",
    markdown: `The point is not that AI writes the copy. It is that judgment gets encoded once and then applies every time, which is the only way output stays on-voice across twenty assets.

**Research to brand brain.** A research skill produces four dense documents: brand brief, voice of customer, five avatars, and mechanism. A second skill converts those into a reusable brand context package, so every downstream skill loads the same brand on demand and nothing drifts.

**Angles.** An angle architect runs a four-pass interrogation of the loaded research and refuses to jump to generation. Output is a fixed skeleton per angle: the belief being attacked, the new belief, the mechanism that justifies it, the awareness stage, and the emotional driver. Then optionally five execution concepts per locked angle.

**Copy.** A scriptwriter for VSLs, a reference-based writer that deconstructs a proven script and rebuilds it for the loaded brand rather than imposing model defaults, an advertorial writer, and a hook generator. Each runs its own quality checks before delivering.

A standing banned-constructions file travels with every project through a global context layer, so the writing rules are enforced everywhere instead of living inside one prompt.`,
  },
  {
    id: "shot-pipeline",
    name: "The shot and video pipeline",
    kind: "Production system",
    status: "In use",
    summary:
      "Turns a finished script into per-shot image and video prompts, with frame consistency engineered rather than hoped for.",
    markdown: `A shot engine takes a completed script and converts it into paste-ready prompts: a starter frame for each shot, then the video prompt built from it. Two modes, one for silent character-driven b-roll under a voiceover and one for on-camera lip-synced dialogue, across ten render styles.

The hard part is consistency. A person generated in clip three has no memory of clip one, so the reference subject gets translated into exhaustive written description, face structure through to wardrobe and camera characteristics, and that description rides in every prompt alongside anti-artifact rules.

Separate prompt skills sit underneath for each generator, since VEO, Sora, and Kling each reward a different prompt shape. One clip per prompt, reviewed before the next is issued, so volume never outruns judgment.`,
  },
  {
    id: "second-brain",
    name: "The second brain",
    kind: "Knowledge system",
    status: "Ongoing",
    summary:
      "A vault that rewrites itself, where new evidence revises an existing claim in place instead of stacking another pass on top of it.",
    markdown: `Most note systems grow by appending. That makes them bigger and less true over time, because the same fact ends up in three places, contradictions sit side by side, and nothing is ever removed.

This one is organised by claim rather than by source. When new evidence arrives it sharpens, contradicts, or deletes the claim already there, and every claim carries its evidence inline so the lineage survives without a pass structure. Contradiction is the signal to edit rather than to add.

The most useful artifact in it is a voice profile built from my own raw writing and finished posts, treated as one voice under different amounts of compression rather than two separate registers. It carries the bans, the rhythmic habits, the analogy pantry, and the lines worth keeping, and it loads before anything gets written in my name.`,
  },
];
