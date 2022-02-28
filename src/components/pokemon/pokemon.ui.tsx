import React from "react";

import "Pokemon.css;";
import { ImageSourcePropType } from "react-native";

export interface PokemonUIProps {
  id: number;
  name: string;
  weight: number;
  sprite: ImageSourcePropType;
}

export const PokemonUI: React.FC<PokemonUIProps> = ({
  id,
  name,
  weight,
  sprite,
}): JSX.Element => {
  return <></>;
};
