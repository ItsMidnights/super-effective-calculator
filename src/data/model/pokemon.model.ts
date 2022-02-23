import { PokemonType, SECPokemonRecord } from "../../types/pokemon.types";
import { BaseEntity, Column, Connection, Entity, OneToMany, PrimaryColumn, Repository } from "typeorm";

@Entity("pokemon")
export class Pokemon implements SECPokemonRecord  {

  @PrimaryColumn("smallint")
  id: number

  @Column()
  name: string;

  @Column()
  sprite: string;
  
  type: PokemonType | PokemonType[];
  weakAgainst: PokemonType | PokemonType[];

}


@Entity("types")
export class Type implements PokemonType {

  @PrimaryColumn("smallint")
  id: number;

  @Column({
    unique: true
  })
  name: string;

  @Column({
    unique: true
  })
  url: string;
}

export class PokemonRepository {

  private ormRepository: Repository<Pokemon>

  constructor(connection: Connection) {
    this.ormRepository = connection.getRepository(Pokemon);
  }

  public async create(pokemon: SECPokemonRecord) {
    const newPokemon = this.ormRepository.create({...pokemon});

    await this.ormRepository.save(newPokemon);

    return newPokemon;
  }

  /**
   * TODO make a public method to search for pokemon by name (fuzzy search)
   */
  public async getPokemonByName (name: string) {
    return await this.ormRepository.findOne({ where: {name}});
  }

}