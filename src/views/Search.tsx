import React from "react";
import {
  ScrollView, StyleSheet, Text, TextInput, View
} from "react-native";
import fonts from "../../assets/fonts";
import { layoutContext } from "../context/layout";
import { ScreenProps } from "../routes/routes.types";
import { colors } from "../style/colors";
import { SearchForm } from "../components/form";
import { SECPokemonRecord } from "../types/pokemon.types";

export const Search: React.FC<ScreenProps> = ({
  navigation
}) => {

  // TODO make Views from now on, hold the state
  const { layout } = React.useContext(layoutContext);

  // TODO make a Current Working Pokemon context with hooks to update it
  const [cwPokemon, setCWPokemon] = React.useState<SECPokemonRecord>();

  const handleSetCWPokemon = (pokemon: SECPokemonRecord) => {
    setCWPokemon(pokemon);
    navigation.navigate("Pokemon", pokemon);
  }

  return (
    <ScrollView contentContainerStyle={[
      styles.container, 
      colors.purpleBackground
    ]}>
      <SearchForm 
        navigation={navigation} 
        handleCWPokemon={handleSetCWPokemon}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  text: {
    fontSize: 30,
    fontFamily: fonts.body,
  }
});