// The four-tag content model from PLAN.md §3.
// Everything in the grid is a Concept. Campaign rooms, About, and Contact are not.

export type Brand = "pethonesty" | "neurogum" | "mitoq" | "ancient-nutrition";

export type Format = "video" | "static" | "vsl-script" | "advertorial";

export type Awareness =
  | "unaware"
  | "problem-aware"
  | "solution-aware"
  | "product-aware"
  | "most-aware";

// Status is always 'spec' per the honesty spine. State distinguishes
// the 5 produced videos + 17 produced statics from concept-only work.
export type Status = "spec";
export type State = "produced" | "concept";

export type Hook = {
  line: string;
  rationale: string;
  /** path under /public if a frame/static exists for this hook */
  asset?: string;
};

/**
 * Mirrors the portfolio markdown's Strategic Rationale block, so the modal can
 * render the same depth Adish writes — not a paraphrase.
 *
 * Field order maps to the portfolio convention:
 *   Angle → ICP → Hook Strategy → Why It Works → Strategic Intent → Diverse Potential
 * Plus Campaign Role for where the asset sits in the architecture.
 */
export type Rationale = {
  /** The angle the asset attacks the prospect from */
  angle: string;
  /** Ideal Customer Profile this asset is engineered for */
  icp: string;
  /** Why the hook stops the scroll and reframes the category */
  hookStrategy: string;
  /** The mechanism behind why this asset works on this prospect */
  whyItWorks: string;
  /** What the asset is supposed to do inside the funnel */
  strategicIntent: string;
  /** Optional, how the same idea redeploys into other formats or angles */
  diversePotential?: string;
  /** Where this concept sits in the campaign architecture */
  campaignRole: string;
};

export type Concept = {
  id: string;
  brand: Brand;
  format: Format;
  awareness: Awareness;
  status: Status;
  state: State;
  /** sits where Library ID sits in the real Ad Library card */
  conceptName: string;
  /** sits where "Started running" sits */
  builtDate: string;
  /** the ad as it would actually run — brand voice, 30–40% distilled, no em dashes */
  caption: string;
  hooks: Hook[];
  /** path under /public to the produced asset, if any */
  asset?: string;
  /** poster frame for videos */
  poster?: string;
  rationale: Rationale;
};

export type BrandMeta = {
  slug: Brand;
  displayName: string;
  /** what the brand sells in one line, for tooltips and Campaign room TL;DR */
  oneLiner: string;
};

export const BRAND_META: Record<Brand, BrandMeta> = {
  pethonesty: {
    slug: "pethonesty",
    displayName: "PetHonesty",
    oneLiner: "10-in-1 multivitamin chews for aging dogs",
  },
  neurogum: {
    slug: "neurogum",
    displayName: "NeuroGum",
    oneLiner: "Caffeine and L-theanine gum, smooth focus without the crash",
  },
  mitoq: {
    slug: "mitoq",
    displayName: "MitoQ Pure",
    oneLiner: "Mitochondria-targeted CoQ10 for cellular longevity",
  },
  "ancient-nutrition": {
    slug: "ancient-nutrition",
    displayName: "Ancient Nutrition",
    oneLiner: "Multi-Collagen Protein from food sources",
  },
};

export const AWARENESS_LABELS: Record<Awareness, string> = {
  unaware: "Unaware",
  "problem-aware": "Problem Aware",
  "solution-aware": "Solution Aware",
  "product-aware": "Product Aware",
  "most-aware": "Most Aware",
};

export const FORMAT_LABELS: Record<Format, string> = {
  video: "Video",
  static: "Static",
  "vsl-script": "VSL Script",
  advertorial: "Advertorial",
};
