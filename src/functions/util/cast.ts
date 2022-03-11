import { PokeAPINamedResource, PokemonType } from "../../types/pokemon.types";

export const castNativePokemonToPokemonType = (
  types: PokemonType[]
): PokeAPINamedResource[] => {
  const castedTypes: PokeAPINamedResource[] = [];
  types.forEach((item) => {
    castedTypes.push({
      name: item.type.name,
      url: item.type.url,
    });
  });
  return castedTypes;
};
