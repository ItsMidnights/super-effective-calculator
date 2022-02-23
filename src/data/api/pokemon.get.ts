import Axios, { AxiosError, AxiosResponse } from "axios";
import { filterDuplicates } from "../../functions/util/filter";
import { mergeSort } from "../../functions/util/sort";
import { NativePokemonType, PokemonType } from "../../types/pokemon.types";

export const getPokemonByName = async (name: string): Promise<any | undefined> => {
  const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  const { data } = response;
  return data
}

export const getDamageRelationsFromTypeName = async (name: string): Promise<any> => {
  const response = await Axios.get(`https://pokeapi.co/api/v2/type/${name}`)
  const { data } = response;
  return data;
}

export const getWeaknessesByTypes = async (types: NativePokemonType[]): Promise<PokemonType[]> => {
  let weaknesses: PokemonType[] = [];
  let strengths: PokemonType[] = [];

  const result = types.map(async (type) => {
    const data = await getDamageRelationsFromTypeName(type.type.name);

    const {
      double_damage_from,
      half_damage_from,
    } = data.damage_relations;

    weaknesses.push(...double_damage_from);
    strengths.push(...half_damage_from);
  });

  await Promise.all(result);

  weaknesses = mergeSort(weaknesses).filter((type, idx, arr) => filterDuplicates(type, idx, arr));
  strengths = mergeSort(strengths).filter((type, idx, arr) => filterDuplicates(type, idx, arr));

  weaknesses = weaknesses.filter((type) => {
    return !strengths.find((element) => {
      return element.name === type.name;
    })
  });

  return weaknesses;
}