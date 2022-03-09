import { PokemonUI, PokemonUIProps } from "./pokemon.ui";

type PokemonProps = {} & PokemonUIProps;

export const Pokemon: React.FC<PokemonProps> = ({ sprite, types }) => {
  return <PokemonUI sprite={sprite} types={types} />;
};
