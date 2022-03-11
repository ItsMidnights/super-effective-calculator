export interface PokeAPINamedResource {
  name: string;
  url: string;
}

export interface PokemonType {
  slot: number;
  type: PokeAPINamedResource;
}

export interface PartialSECPokemon {
  id: number;
  name: string;
  weight: number;
  sprites: PokemonSprites;
  types: PokemonType[];
}

export interface SECPokemonRecord {
  id: number;
  name: string;
  sprite: string;
  weight: number;
  types: PokeAPINamedResource[];
  weakAgainst: PokeAPINamedResource[];
}

export interface PokeAPIPokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  location_area_encounters: string;
  abilities: PokemonAbility[];
  forms: PokeAPINamedResource[];
  game_indices: VersionGameIndex[];
  held_items: PokemonHeldItem[];
  moves: PokemonMove[];
  past_types: PokemonTypePast[];
  species: PokeAPINamedResource;
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonType[];
}

export interface PokeAPIType {
  id: number;
  name: string;
  damage_relations: TypeRelations;
  past_damage_relations: TypeRelationsPast[];
  game_indices: GenerationGameIndex[];
  generation: PokeAPINamedResource;
  move_damage_class: PokeAPINamedResource;
  names: Name[];
  pokemon: TypePokemon[];
  moves: PokeAPINamedResource[];
}

interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: PokeAPINamedResource;
}

interface PokemonFormType {
  slot: number;
  type: PokeAPINamedResource;
}

interface PokemonHeldItem {
  item: PokeAPINamedResource;
  version_details: PokemonHeldItemVersion[];
}

interface PokemonHeldItemVersion {
  rarity: number;
  version: PokeAPINamedResource;
}

interface PokemonMove {
  move: PokeAPINamedResource;
  version_group_details: PokemonMoveVersion[];
}

interface PokemonMoveVersion {
  move_learn_method: PokeAPINamedResource;
  version_group: PokeAPINamedResource;
  level_learned_at: number;
}

interface PokemonStat {
  stat: PokeAPINamedResource;
  effort: number;
  base_stat: number;
}

interface PokemonSprites {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}

interface PokemonTypePast {
  generation: PokeAPINamedResource;
  types: PokemonType[];
}

interface TypePokemon {
  slot: number;
  pokemon: PokeAPINamedResource[];
}

interface TypeRelations {
  no_damage_to: PokeAPINamedResource[];
  half_damage_to: PokeAPINamedResource[];
  double_damage_to: PokeAPINamedResource[];
  no_damage_from: PokeAPINamedResource[];
  half_damage_from: PokeAPINamedResource[];
  double_damage_from: PokeAPINamedResource[];
}

interface TypeRelationsPast {
  generation: PokeAPINamedResource;
  damage_relations: TypeRelations;
}

interface Name {
  name: string;
  language: PokeAPINamedResource;
}

interface GenerationGameIndex {
  game_index: number;
  generation: PokeAPINamedResource;
}

interface VersionGameIndex {
  game_index: number;
  version: PokeAPINamedResource;
}
