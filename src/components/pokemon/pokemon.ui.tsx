import React from "react";

import { Image, View, Text, FlatList } from "react-native";
import { colors, fonts } from "../../style";
import { PokemonType } from "../../types/pokemon.types";
import { Types } from "../pokemon-types";
import { H1 } from "../text";

export interface PokemonUIProps {
  sprite: string;
  types: PokemonType[]
}

export const PokemonUI: React.FC<PokemonUIProps> = ({
  sprite,
  types
}): JSX.Element => {
  return (
    <View style={{
      alignItems: "center",
      paddingBottom: 20
    }}>
      <Image
        source={{
          uri: sprite
        }}
        style={{
          width: 200,
          height: 200,
        }}
      />
      <FlatList 
        data={types}
        keyExtractor={(_, idx) => idx.toLocaleString()}
        contentContainerStyle={{ flexDirection: "row" }}
        renderItem={({item}) => (
          <Types 
            type={item.name}
          />
        )}
      />
    </View>
  );
};
