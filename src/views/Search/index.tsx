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
import { background } from "../../style/background";
import { P } from "../../components/text";
import { useFuzzySearch } from "../../hooks/fuzzy.hooks";
import { Term } from "../../components/terms";
import { SearchBar } from "../../components/input";

export const Search: React.FC<ScreenProps> = ({ navigation }) => {
  const { layout } = React.useContext(layoutContext);
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  // TODO! make a forEach over the Pokemon Array to find the blacklist/depricated pokemon!
  // (store logs injson and load the blacklist and use the filtered as keys)
  const [pokemon] = React.useState(
    React.useMemo(() => {
      const toLowerPokemon = Pokemon.all().map((name) => {
        return name.toLowerCase();
      });
      return toLowerPokemon as readonly string[];
    }, [])
  );

  const { results, setResults, search } = useFuzzySearch<string>(pokemon, {
    includeMatches: true,
    ignoreLocation: true,
    includeScore: true,
    threshold: 0.5,
    minMatchCharLength: 2,
  });

  // TODO needs error handling
  const handleSubmit = React.useCallback(
    async (term: string): Promise<void> => {
      const pokemon = await getSECPokemon(term);
      navigation.navigate("Pokemon", {
        data: pokemon,
      });
    },
    [searchTerm]
  );

  const handleClear = React.useCallback(() => {
    setSearchTerm("");
    setResults([]);
  }, [searchTerm]);

  const handleChange = React.useCallback(
    (text: string) => {
      setSearchTerm(text);
      search(text);
    },
    [searchTerm]
  );

  // TODO lets get react query in and a handleNavigation callback
  const handleTermPress = React.useCallback(
    async (term: string) => {
      const pokemon = await getSECPokemon(term);
      navigation.navigate("Pokemon", {
        data: pokemon,
      });
    },
    [results, searchTerm]
  );
  const transitionHandler = React.useCallback(() => {
    navigation.addListener("transitionStart", () => {
      handleClear();
    });
  }, [navigation, searchTerm]);

  React.useEffect(() => {
    const unsubscribe = transitionHandler;
    console.log("Search View Mounted");

    return () => {
      unsubscribe();
      console.log("Search View Unmounted");
    };
  }, [navigation]);

  return (
    <SafeAreaView style={[styles.container, background.primary]}>
      <SearchBar
        placeholder="Search for a pokemon"
        onCancel={handleClear}
        onClear={handleClear}
        onChangeText={(text: string) => handleChange(text)}
        value={searchTerm}
        onSubmitEditing={() => {
          handleSubmit(searchTerm);
        }}
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
