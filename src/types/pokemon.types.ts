interface GenericPokeAPIType {
  name: string;
  url: string;
}

export interface NativePokemonType {
  slot: number;
  type: PokemonType;
}

export interface PartialSECPokemon {
  id: number;
  name: string;
  weight: number;
  sprites: any;
  types: NativePokemonType[];
}

export interface PokemonType extends GenericPokeAPIType {};

export interface SECPokemonRecord {
  id: number;
  name: string;
  sprite: string;
  weight: number;
  types: PokemonType[];
  weakAgainst: PokemonType | PokemonType[];
}


