import { PokemonType } from "../../types/pokemon.types";

export const filterDuplicates = (
  type: PokemonType,
  idx: number,
  arr: PokemonType[]
) => {
  return arr.findIndex(t=>(t.name===type.name)) === idx;
} 