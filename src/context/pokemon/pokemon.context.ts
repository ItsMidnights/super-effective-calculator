import { createContext } from "react";
import { PokemonRepository } from "../../data/repository/pokemon.repository";

interface DatabaseConnectionContextData {
  pokemonRepository: PokemonRepository;
}

export const DatabaseConnectionContext = createContext<DatabaseConnectionContextData>(
  {} as DatabaseConnectionContextData,
)