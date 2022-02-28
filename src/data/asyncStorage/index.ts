import AsyncStorage from "@react-native-async-storage/async-storage";
import { SECPokemonRecord } from "../../types/pokemon.types";

export const storePokemon = async (name: string, pokemon: SECPokemonRecord) => {
  try {
    const pokemonAsJSON = JSON.stringify(pokemon);
    await AsyncStorage.setItem(name, pokemonAsJSON);
  } catch (error) {
    throw new Error("Storing the pokemon failed");
  }
};

export const getPokemon = async (name: string) => {
  try {
    const _asJson = await AsyncStorage.getItem(name);
    return _asJson != null ? JSON.parse(_asJson) : null;
  } catch (error) {
    throw new Error("Reading the pokemon failed");
  }
};
