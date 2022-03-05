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
import { SECPokemonService } from "../data/services/secpokemon.service";
import { SearchForm } from "../components/form";

export const Search: React.FC<ScreenProps> = ({ navigation }) => {
  
  const pokemonService = new SECPokemonService();
  const { layout } = React.useContext(layoutContext);
  const [terms, setTerms] = React.useState<SECPokemonRecord[]>([]);

  const handleSubmit = async (term: string): Promise<void> => { 
    const pokemon = await pokemonService.getPokemon(term);
    const arr = await pokemonService.findAll();
    console.log(arr);
    navigation.navigate("Pokemon", pokemon);
  }

  const handleTerms = async (term: string): Promise<void> => {
    //TODO bring up terms with debounced fuzzy
  };

  React.useEffect(() => {
    const checkPokemon = async () => {
      const pokemon = await pokemonService.findAll();
      console.log(pokemon);
      return pokemon
    }
    // TODO URGENT ASYNC STORAGE IS NO LONGER RELIABLE
    // LETS GET EXPO-SQLITE GOING
    checkPokemon();
    
  });

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        colors.purpleBackground,
        { width: "100%" },
      ]}
    >
      <SearchForm 
        onSubmit={handleSubmit}
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
