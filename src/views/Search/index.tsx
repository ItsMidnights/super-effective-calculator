import React from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import fonts from "../../../assets/fonts";
import { layoutContext } from "../../context/layout";
import { ScreenProps } from "../../routes/routes.types";
import { colors } from "../../style/colors";
import { SECPokemonRecord } from "../../types/pokemon.types";
import { getSECPokemon } from "../../data/api/pokemon.get";
import { SearchForm } from "../../components/form";
import { background } from "../../style/background";

export const Search: React.FC<ScreenProps> = ({ navigation }) => {

  const { layout } = React.useContext(layoutContext);
  const [terms, setTerms] = React.useState<SECPokemonRecord[]>([]);

  // TODO needs error handling
  const handleSubmit = React.useCallback(async (term: string): Promise<void> => { 
    const pokemon = await getSECPokemon(term);
    navigation.navigate("Pokemon", pokemon);
  }, []);

  const handleTerms = async (term: string): Promise<void> => {
    //TODO bring up terms with debounced fuzzy
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        background.primary,
      ]}
    >
      <SearchForm 
        onSubmit={handleSubmit}
      />
      <View>
        <Text>Hmmm... Looks empty here.</Text>
      </View> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    ...Platform.select({
      android: {
        paddingTop: 40
      }
    })
  },
  text: {
    fontSize: 30,
    fontFamily: fonts.body,
  },
});
