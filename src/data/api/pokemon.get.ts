import Axios, { AxiosError, AxiosResponse } from "axios";
import { castNativePokemonToPokemonType } from "../../functions/util/cast";
import { filterDuplicates } from "../../functions/util/filter";
import { mergeSort } from "../../functions/util/sort";
import { isAxiosError } from "../../types/guards.types";
import {
  PartialSECPokemon,
  PokeAPINamedResource,
  PokeAPIPokemon,
  PokeAPIType,
  PokemonType,
  SECPokemonRecord,
} from "../../types/pokemon.types";

export const getPokemon = async (name: string): Promise<PokeAPIPokemon> => {
  const response = await Axios.get<PokeAPIPokemon>(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );
  const { data } = response;
  return data;
};

export const getDamageRelations = async (
  name: string
): Promise<PokeAPIType> => {
  const response = await Axios.get(`https://pokeapi.co/api/v2/type/${name}`);
  const { data } = response;
  return data;
};

export const getWeaknessesByTypes = async (
  types: PokemonType[]
): Promise<PokeAPINamedResource[]> => {
  let weaknesses: PokeAPINamedResource[] = [];
  let strengths: PokeAPINamedResource[] = [];

  const result = types.map(async (type) => {
    const data = await getDamageRelations(type.type.name);
    const { double_damage_from, half_damage_from } = data.damage_relations;
    weaknesses.push(...double_damage_from);
    strengths.push(...half_damage_from);
  });

  await Promise.all(result);

  weaknesses = mergeSort(weaknesses).filter((type, idx, arr) =>
    filterDuplicates(type, idx, arr)
  );
  strengths = mergeSort(strengths).filter((type, idx, arr) =>
    filterDuplicates(type, idx, arr)
  );

  weaknesses = weaknesses.filter((type) => {
    return !strengths.find((element) => {
      return element.name === type.name;
    });
  });

  return weaknesses;
};

export const getSECPokemon = async (term: string) => {
  try {
    const { id, name, sprites, weight, types }: PartialSECPokemon =
      await getPokemon(term);
    const weakAgainst = await getWeaknessesByTypes(types);
    const pokemon: SECPokemonRecord = {
      id,
      name,
      weight,
      sprite: sprites.front_default,
      types: castNativePokemonToPokemonType(types),
      weakAgainst,
    };
    return pokemon;
  } catch (err) {
    if (isAxiosError(err)) {
      console.error(`Axios Error Occured:\n${err.message}`);
    }
    console.error(err);
  }
};
