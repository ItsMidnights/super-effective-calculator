import AsyncStorage from "@react-native-async-storage/async-storage";
import { SECPokemonRecord } from "../../types/pokemon.types";
import { getSECPokemon } from "../api/pokemon.get";

export class SECPokemonService {
  constructor() {}
  
  // TODO step 1: save a pokemon 
  public async save(name: string, pokemon: SECPokemonRecord): Promise<void> {
    try {
      const pokemonAsJSON = JSON.stringify(pokemon);
      await AsyncStorage.setItem(name, pokemonAsJSON);
    } catch (e) {
      throw e;
    }
  }

  public async getPokemon(name: string): Promise<SECPokemonRecord> {
    const pokemon = await this.findOne(name);
    if (!pokemon) {
      const newPokemon = await getSECPokemon(name);
      await this.save(name, newPokemon);
      return newPokemon;
    }
    return pokemon;
  }

  public async findOne(name: string): Promise<SECPokemonRecord | undefined> {
    try {
      const _asJSON = await AsyncStorage.getItem(name);
      return _asJSON != null ? JSON.parse(_asJSON) : null;
    } catch (error) {
      console.error(error);
      throw new Error("Something went wrong.");
    }
  }

  public async findAll(): Promise<any> {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
      const arr = await AsyncStorage.multiGet(keys);
      console.log(arr);
      const _asSECPokemonRecordArray = arr.map((val) => {
        return JSON.parse(val[1]);
      });
      return _asSECPokemonRecordArray;
    } catch (e) {
      console.error(e);
    }
  }
}