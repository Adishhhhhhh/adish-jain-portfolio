import type { Concept } from "./types";
import { PETHONESTY_CONCEPTS } from "./pethonesty";
import { NEUROGUM_CONCEPTS } from "./neurogum";
import { MITOQ_CONCEPTS } from "./mitoq";
import { ANCIENT_NUTRITION_CONCEPTS } from "./ancient-nutrition";
import { CONCEPT_ONLY } from "./concepts";

// Produced work first, then the written-but-unproduced concept library pulled
// out of the case studies. The grid renders them as two movements.
export const ALL_CONCEPTS: Concept[] = [
  ...PETHONESTY_CONCEPTS,
  ...NEUROGUM_CONCEPTS,
  ...MITOQ_CONCEPTS,
  ...ANCIENT_NUTRITION_CONCEPTS,
  ...CONCEPT_ONLY,
];

export const PRODUCED_CONCEPTS: Concept[] = ALL_CONCEPTS.filter(
  (c) => c.state === "produced",
);

export function findConcept(id: string): Concept | undefined {
  return ALL_CONCEPTS.find((c) => c.id === id);
}

export function conceptsByBrand(
  brand: Concept["brand"],
  opts: { producedOnly?: boolean } = {},
): Concept[] {
  return ALL_CONCEPTS.filter((c) => {
    if (c.brand !== brand) return false;
    if (opts.producedOnly && c.state !== "produced") return false;
    return true;
  });
}
