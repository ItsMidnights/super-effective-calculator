import React from "react";
import { Image, Text, View } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";

export type PokemonProps = {}; 

export const Pokemon: React.FC<PokemonProps> = ({
  route,
  navigation
}): JSX.Element => {

  const {
    id,
    name,
    weight,
    sprite,
    types,
    weakAgainst
  } = route.params;

  return (
    <View>
      <Image 
        source={sprite} 
      />
      <Text>ID: {JSON.stringify(id)}</Text>
      <Text>NAME: {name}</Text>
      <Text>WEIGHT: {JSON.stringify(weight)}</Text>
      <Text>TYPES: {JSON.stringify(types)}</Text>
      <Text>TYPES: {JSON.stringify(weakAgainst)}</Text>

      <Button 
        onPress={() => navigation.goBack()} 
      />
    </View>
  );
};