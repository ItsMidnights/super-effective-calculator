import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('pokemon')
export class Pokemon {

  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  sprite: string;

  @Column()
  weight: number;
  
  @Column()
  types: string;

  @Column()
  weakAgainst: string;

}