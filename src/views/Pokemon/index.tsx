import React from "react";
import {
  FlatList,
  Platform,
  View,
  Image
} from "react-native";
import { Back } from "../../components/icons";
import { Pokemon as PokemonView } from "../../components/pokemon";
import { Types } from "../../components/pokemon-types";
import { H1 } from "../../components/text/h1";
import { ScreenProps } from "../../routes/routes.types";
import { background } from "../../style";
import { pokemonStyle } from "./pokemon.style";
import { Header } from "./sub/header";
import { Weaknesses } from "./sub/weaknesses";

export type PokemonProps = {} & ScreenProps;

export const Pokemon: React.FC<PokemonProps> = ({
  route,
  navigation,
}): JSX.Element => {
  const { name, sprite, types, weakAgainst } = route.params!;

  return (
    <View
      style={[
        pokemonStyle.container,
        background.primary
      ]}
    >
      <Header 
        name={name} 
      />
      <PokemonView 
        sprite={sprite} 
        types={types}
      />
      <Weaknesses
        weakAgainst={weakAgainst}
      />
    </View>
  );
};

export default Pokemon;