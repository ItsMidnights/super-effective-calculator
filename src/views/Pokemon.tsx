import React from "react";
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import { getPokemon } from "../data/asyncStorage";
import { ScreenProps } from "../routes/routes.types";
import { colors } from "../style/colors";

export type PokemonProps = {} & ScreenProps;

export const Pokemon: React.FC<PokemonProps> = ({
  route,
  navigation,
}): JSX.Element => {
  const { id, name, weight, sprite, types, weakAgainst } = route.params!;

  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <Image
        source={sprite as ImageSourcePropType}
        style={{
          width: 300,
          height: 300,
        }}
      />
      <Text>ID: {JSON.stringify(id)}</Text>
      <Text>NAME: {name}</Text>
      <Text>WEIGHT: {JSON.stringify(weight)}</Text>
      <Text>TYPES: {JSON.stringify(types)}</Text>
      <Text>WEAK AGAINST: {JSON.stringify(weakAgainst)}</Text>

      <Button
        title={"Go Back"}
        style={{
          backgroundColor: "purple",
        }}
        onPress={() => navigation.goBack()}
      />
    </ScrollView>
  );
};
