import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { Types } from "../../../components/pokemon-types";
import { H1 } from "../../../components/text";
import {
  PokeAPINamedResource,
  PokemonType,
} from "../../../types/pokemon.types";

export interface WeaknessesProps {
  weakAgainst: PokeAPINamedResource[];
}

export const Weaknesses: React.FC<WeaknessesProps> = ({
  weakAgainst,
}): JSX.Element => {
  return (
    <>
      <H1 style={styles.headerText}>Weaknesses: </H1>
      <FlatList
        data={weakAgainst}
        keyExtractor={(_, idx) => idx.toLocaleString()}
        contentContainerStyle={styles.weaknesses}
        renderItem={({ item }) => <Types type={item.name} />}
      />
    </>
  );
};

const styles = StyleSheet.create({
  headerText: {
    alignSelf: "center",
    fontSize: 20,
    paddingVertical: 10,
  },
  weaknesses: {
    paddingVertical: 10,
    width: "50%",
    alignSelf: "center",
  },
});
