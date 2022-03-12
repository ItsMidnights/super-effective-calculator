import { atom, selector } from "recoil";
import { SECPokemonRecord } from "../../types/pokemon.types";
import Pokemon from "pokemon";
import { getSECPokemon } from "../api";

const pokemonKeys = atom<readonly string[]>({
  key: "pokemonKeys",
  default: Pokemon.all(),
});

export const searchTerm = atom<string>({
  key: "searchTerm",
  default: "",
});

// export const cwPokemon = selector<SECPokemonRecord>({
//   key: "cwPokemon",
//   get: async ({get}) => {
//     const term = get(searchTerm);
//     const response = await getSECPokemon(term);
//     if (!response) {
//       return {} as SECPokemonRecord;
//     }
//     return response;
//   },
//   set: async ({get, set}) =>  {
//     const current = get(cwPokemon);
//     const term = get(searchTerm);
//     const response = await getSECPokemon(term);

//     if (!response) {
//       set(current, {} as SECPokemonRecord);
//     }
//     return response;
//   }
// });
