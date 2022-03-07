import React from "react";

import { Image, View, Text, FlatList } from "react-native";
import { colors, fonts } from "../../style";
import { PokemonType } from "../../types/pokemon.types";
import { Types } from "../pokemon-types";
import { H1 } from "../text";
import { pokemonStyle } from "./pokemon.style";

export interface PokemonUIProps {
  sprite: string;
  types: PokemonType[]
}

export const PokemonUI: React.FC<PokemonUIProps> = ({
  sprite,
  types
}): JSX.Element => {
  return (
    <View style={[ pokemonStyle.container ]}>
      <Image
        source={{
          uri: sprite
        }}
        style={[ pokemonStyle.image ]}
      />
      <FlatList 
        data={types}
        keyExtractor={(_, idx) => idx.toLocaleString()}
        contentContainerStyle={[ pokemonStyle.types ]}
        renderItem={({item}) => (
          <Types 
            type={item.name}
          />
        )}
      />
    </View>
  );
};
