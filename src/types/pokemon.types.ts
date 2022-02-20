export interface NativePokemonType {
  slot: number;
  type: PokemonType;
}

export interface PokemonType {
  name: string;
  url: string;
}

export interface SECPokemonRecord {
  id: number;
  name: string;
  sprite: string;
  type: PokemonType | PokemonType[];
  weakAgainst: PokemonType | PokemonType[];
}


