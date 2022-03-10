import React from "react";
import { FlatList, Platform, View, Image, SafeAreaView } from "react-native";
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
  const { data } = route.params!;

  const handleBack = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={[pokemonStyle.container, background.primary]}>
      <Header name={data.name} backOnPress={handleBack} />
      <PokemonView sprite={data.sprite} types={data.types} />
      <Weaknesses weakAgainst={data.weakAgainst} />
    </SafeAreaView>
  );
};

export default Pokemon;
