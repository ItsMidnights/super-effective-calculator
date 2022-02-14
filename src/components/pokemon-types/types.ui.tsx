import React from "react";
import { Text, View } from "react-native";
import { typeStyles } from "./types.style";
import { PokemonTypeNames, PokemonTypeColors } from "./pokemon.types";
import { colors } from "../../style/colors";

export type TypesUIProps = {

} & TypesUIPropTypes;

export interface TypesUIPropTypes {
  key?: number;
  name: PokemonTypeNames;
};

export const TypesUI: React.FC<TypesUIProps> = ({
  key,
  name,
}): JSX.Element => {
  return (
    <View
      style={[
        typeStyles.container,
        {
          backgroundColor: PokemonTypeColors[name]
        }
      ]} 
      key={key}
    >
      <Text
        style={[
          typeStyles.name,
          colors.white
        ]}
      >
        {name}
      </Text>
    </View>
  );
};