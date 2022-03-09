import React from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Pokemon from "pokemon";
import { layoutContext } from "../../context/layout";
import { ScreenProps } from "../../routes/routes.types";
import { SECPokemonRecord } from "../../types/pokemon.types";
import { getSECPokemon } from "../../data/api/pokemon.get";
import { SearchForm } from "../../components/form";
import { background } from "../../style/background";
import { P } from "../../components/text";
import { useFuzzySearch } from "../../hooks/fuzzy.hooks";
import { Term } from "../../components/terms";

export const Search: React.FC<ScreenProps> = ({ navigation }) => {
  const { layout } = React.useContext(layoutContext);
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [pokemon] = React.useState(
    React.useMemo(() => {
      const toLowerPokemon = Pokemon.all().map((name) => {
        return name.toLowerCase();
      });
      return toLowerPokemon as readonly string[];
    }, [])
  );

  const { results, search } = useFuzzySearch<string>(pokemon);

  // TODO needs error handling
  const handleSubmit = React.useCallback(
    async (term: string): Promise<void> => {
      const pokemon = await getSECPokemon(term);
      navigation.navigate("Pokemon", pokemon);
    },
    [searchTerm]
  );

  const handleClear = React.useCallback(() => {
    setSearchTerm("");
  }, [searchTerm]);

  const handleChange = React.useCallback(
    (text: string) => {
      // console.log("trying");
      setSearchTerm(text);
      search(text);
    },
    [searchTerm]
  );

  const handleTermPress = React.useCallback(
    async (term: string) => {
      const pokemon = await getSECPokemon(term);
      navigation.navigate("Pokemon", pokemon);
    },
    [results, searchTerm]
  );

  React.useEffect(() => {
    navigation.addListener("beforeRemove", () => {});
  }, []);

  React.useEffect(() => {
    // console.log(results);
  }, [results]);

  return (
    <SafeAreaView style={[styles.container, background.primary]}>
      <SearchForm
        value={searchTerm}
        onSubmit={handleSubmit}
        onChange={handleChange}
        onClear={handleClear}
      />
      {results == null ? (
        <View
          style={{
            position: "absolute",
            top: "50%",
            height: 100,
            width: 200,
          }}
        >
          <P style={{ color: "grey", fontSize: 18, textAlign: "center" }}>
            Hmm... Looks Empty... Try searching for a pokemon to find it's
            weaknesses.
          </P>
        </View>
      ) : null}
      <FlatList
        data={results}
        keyExtractor={(_, idx) => {
          return idx.toLocaleString();
        }}
        renderItem={({ item, index }) => {
          return (
            <Term
              key={index}
              term={item.item}
              onPress={async () => handleTermPress(item.item)}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    ...Platform.select({
      android: {
        paddingTop: 40,
      },
    }),
  },
});
