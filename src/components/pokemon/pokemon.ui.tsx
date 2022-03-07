import React from "react";

import { Image, View, Text } from "react-native";

export interface PokemonUIProps {
  id: number;
  name: string;
  weight: number;
  sprite: string;
}

export const PokemonUI: React.FC<PokemonUIProps> = ({
  id,
  name,
  weight,
  sprite,
}): JSX.Element => {
  return (
    <View>
    <Image
      source={{
        uri: sprite
      }}
      style={{
        width: 300,
        height: 300,
      }}
    />
    <Text>ID: {JSON.stringify(id)}</Text>
    <Text>NAME: {name}</Text>
    <Text>WEIGHT: {JSON.stringify(weight)}</Text>
    </View>
  );
};
