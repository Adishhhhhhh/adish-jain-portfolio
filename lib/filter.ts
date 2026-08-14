import type { Concept, Brand, Format, Awareness } from "@/content/types";

export type Sort = "newest" | "format" | "awareness";

export type FilterState = {
  brand: Brand | null;
  format: Format | null;
  awareness: Awareness | null;
  query: string;
  sort: Sort;
};

export const INITIAL_FILTER: FilterState = {
  brand: null,
  format: null,
  awareness: null,
  query: "",
  sort: "newest",
};

/**
 * PLAN.md §Screen 2 default-grid rule:
 * "Default grid is curated, not overwhelming: show the produced creative
 * (5 videos, 17 statics) and the four Campaign entries first. The full
 * concept libraries (scripts, advertorials, hook variants) reveal when
 * the visitor filters by a brand, format, or stage."
 *
 * isFiltering returns true if any filter narrows the result set.
 */
export function isFiltering(f: FilterState): boolean {
  return Boolean(f.brand || f.format || f.awareness || f.query.trim());
}

export function applyFilters(
  all: Concept[],
  f: FilterState,
): Concept[] {
  // The full library is always in scope. The grid separates produced work from
  // the concept library visually, so hiding concepts behind a filter only made
  // the deepest part of the portfolio the hardest part to find.
  let pool: Concept[] = all;

  const q = f.query.trim().toLowerCase();
  pool = pool.filter((c) => {
    if (f.brand && c.brand !== f.brand) return false;
    if (f.format === "advertorial") {
      // Advertorial work lives behind driver statics: any concept that clicks
      // through to a live advertorial page belongs to this filter.
      if (c.format !== "advertorial" && !c.landingUrl) return false;
    } else if (f.format && c.format !== f.format) {
      return false;
    }
    if (f.awareness && c.awareness !== f.awareness) return false;
    if (q) {
      const hay = `${c.conceptName} ${c.caption} ${c.rationale.angle}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  switch (f.sort) {
    case "format":
      pool = [...pool].sort((a, b) => a.format.localeCompare(b.format));
      break;
    case "awareness": {
      const order: Awareness[] = [
        "unaware",
        "problem-aware",
        "solution-aware",
        "product-aware",
        "most-aware",
      ];
      pool = [...pool].sort(
        (a, b) => order.indexOf(a.awareness) - order.indexOf(b.awareness),
      );
      break;
    }
    case "newest":
    default:
      // Video first, then advertorial, then static, so the heaviest production
      // effort leads the grid. Within a tier the array order is preserved,
      // which already lists newest concepts first in each brand file.
      pool = [...pool].sort((a, b) => mediaTier(a) - mediaTier(b));
      break;
  }

  return pool;
}

/**
 * Grid hierarchy. A static that clicks through to a live advertorial counts as
 * advertorial work, since the deliverable it opens is the advertorial.
 */
function mediaTier(c: Concept): number {
  if (c.format === "video") return 0;
  if (c.format === "advertorial" || c.landingUrl) return 1;
  return 2;
}
