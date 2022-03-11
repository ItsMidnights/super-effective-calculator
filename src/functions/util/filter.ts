import { PokeAPINamedResource } from "../../types/pokemon.types";

export const filterDuplicates = (
  type: PokeAPINamedResource,
  idx: number,
  arr: PokeAPINamedResource[]
) => {
  return arr.findIndex((t) => t.name === type.name) === idx;
};
