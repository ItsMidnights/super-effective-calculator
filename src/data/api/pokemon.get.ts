import Axios, { AxiosError, AxiosResponse } from "axios";
import { PokemonType } from "../../types/pokemon.types";

export const getPokemonByName = async (name: string): Promise<any | undefined> => {
  return await Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  .then((response: AxiosResponse) => {
    return response.data
  })
  .catch((error: AxiosError | Error) => {
    if (Axios.isAxiosError(error)) {
      console.error(error.message);
      return undefined;
    } else {
      console.error(error.message);
      return undefined;
    }
  });
}

export const getDamageRelationsFromTypeName = async (name: string): Promise<any> => {
  return await Axios.get(`https://pokeapi.co/api/v2/type/${name}`)
  .then((response: AxiosResponse<any>) => {
    if (response.status != 200) {
      throw new Error("Request failed: " + response.statusText);
    }
    return response.data
  }).catch((e: Error) => {
    console.error(e.message);
  })
}