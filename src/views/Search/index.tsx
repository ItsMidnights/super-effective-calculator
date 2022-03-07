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
import { P } from "../../components/text";

export const Search: React.FC<ScreenProps> = ({ navigation }) => {

  const { layout } = React.useContext(layoutContext);
  const [terms, setTerms] = React.useState<SECPokemonRecord[]>([]);

  // TODO needs error handling
  const handleSubmit = React.useCallback(async (term: string): Promise<void> => { 
    const pokemon = await getSECPokemon(term);
    navigation.navigate("Pokemon", pokemon);
  }, []);

  React.useEffect(() => {
    navigation.addListener("beforeRemove", () => {
      setTerms([]);
    });
  });

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
      <View
        style={{
          position: "absolute",
          top: "50%",
          height: 100,
          width: 200
        }} 
      >
        <P
          style={{color: "grey", fontSize: 18, textAlign: "center" }} 
        >Hmm... Looks Empty... Try searching for a pokemon to find it's weaknesses.</P>
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
});
