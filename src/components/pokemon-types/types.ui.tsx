import React from "react";
import { Text, View } from "react-native";
import { typeStyles } from "./types.style";
import { PokemonTypeNames, PokemonTypeColors } from "./pokemon.types";
import { colors } from "../../style/colors";

export type TypesUIProps = {

} & TypesUIPropTypes;

export interface TypesUIPropTypes {
  key?: number;
  type: PokemonTypeNames;
};

export const TypesUI: React.FC<TypesUIProps> = ({
  type,
}): JSX.Element => {
  return (
    <View
      style={[
        typeStyles.container,
        {
          backgroundColor: PokemonTypeColors[type]
        }
      ]} 
    >
      <Text
        style={[
          typeStyles.name,
          colors.white
        ]}
      >
        {type}
      </Text>
    </View>
  );
};