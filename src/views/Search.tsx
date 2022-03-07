import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import fonts from "../../assets/fonts";
import { layoutContext } from "../context/layout";
import { ScreenProps } from "../routes/routes.types";
import { colors } from "../style/colors";
import { SECPokemonRecord } from "../types/pokemon.types";
import { getSECPokemon } from "../data/api/pokemon.get";
import { SearchForm } from "../components/form";

export const Search: React.FC<ScreenProps> = ({ navigation }) => {

  const { layout } = React.useContext(layoutContext);
  const [terms, setTerms] = React.useState<SECPokemonRecord[]>([]);

  const handleSubmit = React.useCallback(async (term: string): Promise<void> => { 
    const pokemon = await getSECPokemon(term);
    // TODO IMPLEMENT THE ERROR HANDLING AND GET RID OF THIS ASSERTION
    navigation.navigate("Pokemon", pokemon!);
  }, []);

  const handleTerms = async (term: string): Promise<void> => {
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
