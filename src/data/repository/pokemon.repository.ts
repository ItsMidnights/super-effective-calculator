import { Connection, Repository } from "typeorm";
import { SECPokemonRecord } from "../../types/pokemon.types";
import { getSECPokemon } from "../api/pokemon.get";
import { Pokemon } from "../model/pokemon.model";

export class PokemonRepository {

  private ormRepository: Repository<Pokemon>;

  constructor(connection: Connection) {
    this.ormRepository = connection.getRepository(Pokemon);
  }

  public async findAll(): Promise<Pokemon[]> {
    return await this.ormRepository.find();
  }

  public async create(pokemon: Pokemon): Promise<boolean> {
    const tmp = this.ormRepository.create({
      ...pokemon
    });
    return true;
  }

  public async findOne(name: string): Promise<Pokemon | undefined> {
    try {
      const pokemon = await this.ormRepository.findOne({ where: name });
      if (!pokemon) {
        throw new Error("pokemon not found");
      }
      return pokemon;
    } catch (e) {
      console.error(e);
    }
    return undefined;
  }

  public parseSEC (pokemon: Pokemon): SECPokemonRecord  {
    return {
      ...pokemon,
      types: JSON.parse(pokemon.types),
      weakAgainst: JSON.parse(pokemon.weakAgainst)
    }
  }
  
  public parsePokemon (pokemon: SECPokemonRecord): Pokemon {
    return {
      ...pokemon,
      types: JSON.stringify(pokemon.types),
      weakAgainst: JSON.stringify(pokemon.weakAgainst)
    }
  }

  public async getPokemon (name: string): Promise<SECPokemonRecord | undefined> {
    const unparsedPokemon = await this.findOne(name);
    if (!unparsedPokemon) {
      const fetchedPokemon = await getSECPokemon(name);
      await this.savePokemon(fetchedPokemon);
      return fetchedPokemon;
    }
    return this.parseSEC(unparsedPokemon);
  }

  public async savePokemon(pokemon: SECPokemonRecord): Promise<void> {
    const unparsedPokemon = this.parsePokemon(pokemon);
    await this.create({ ...unparsedPokemon });
  }

  public async getAllPokemon(): Promise<SECPokemonRecord[]> {
    const unparsedPokemon = await this.findAll();
    const parsedPokemon = unparsedPokemon.map((pokemon) => {
      return this.parseSEC(pokemon);
    });
    return parsedPokemon;
  }
}