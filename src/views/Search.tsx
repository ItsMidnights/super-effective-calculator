import React from "react";
import {
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from "react-native";
import fonts from "../../assets/fonts";
import { layoutContext } from "../context/layout";
import { ScreenProps } from "../routes/routes.types";
import { colors } from "../style/colors";
import { SECPokemonRecord } from "../types/pokemon.types";
import { storePokemon } from "../data/asyncStorage";
import { useFormik, useField } from "formik";
import { getSECPokemon } from "../data/api/pokemon.get";
import { SearchBar } from "../components/input";

export const Search: React.FC<ScreenProps> = ({ navigation }) => {
  const { layout } = React.useContext(layoutContext);
  const [terms, setTerms] = React.useState<SECPokemonRecord[]>([]);
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      term: "",
    },
    onReset: () => {
      setTerms([]);
    },
    onSubmit: async (values) => {
      const pokemon = await getSECPokemon(values.term);
      await storePokemon(pokemon.name, pokemon);
      navigation.navigate("Pokemon", pokemon);
    },
  });

  const handleSetCWPokemon = async (pokemon: SECPokemonRecord) => {};

  const handleTerms = (e?: NativeSyntheticEvent<TextInputChangeEventData>) => {
    //TODO bring up terms with debounced fuzzy
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        colors.purpleBackground,
        { width: "100%" },
      ]}
    >
      {/* <SearchForm 
        navigation={navigation} 
        handleCWPokemon={handleSetCWPokemon}
      /> */}
      <SearchBar
        placeholder="Search for a Pokemon..."
        value={values.term}
        onChange={handleTerms}
        onChangeText={handleChange("term")}
        onSubmitEditing={handleSubmit}
      />
      <View>
        <Text>Hmmm... Looks empty here.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  text: {
    fontSize: 30,
    fontFamily: fonts.body,
  },
});
