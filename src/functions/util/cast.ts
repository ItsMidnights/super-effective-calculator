import { NativePokemonType, PokemonType } from "../../types/pokemon.types";

export const castNativePokemonToPokemonType = (
  types: NativePokemonType[]
): PokemonType[] => {
  const castedTypes: PokemonType[] = [];
  types.forEach((type) => {
    castedTypes.push({
      name: type.type.name,
      url: type.type.url,
    });
  });
  return castedTypes;
};
