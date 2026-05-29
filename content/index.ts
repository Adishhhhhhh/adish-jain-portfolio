import type { Concept } from "./types";
import { PETHONESTY_CONCEPTS } from "./pethonesty";
import { NEUROGUM_CONCEPTS } from "./neurogum";
import { MITOQ_CONCEPTS } from "./mitoq";
import { ANCIENT_NUTRITION_CONCEPTS } from "./ancient-nutrition";

export const ALL_CONCEPTS: Concept[] = [
  ...PETHONESTY_CONCEPTS,
  ...NEUROGUM_CONCEPTS,
  ...MITOQ_CONCEPTS,
  ...ANCIENT_NUTRITION_CONCEPTS,
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
