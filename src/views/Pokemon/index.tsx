import React from "react";
import {
  FlatList,
  Platform,
  View,
  Image
} from "react-native";
import { Back } from "../../components/icons";
import { PokemonUI as PokemonView } from "../../components/pokemon";
import { Types } from "../../components/pokemon-types";
import { H1 } from "../../components/text/h1";
import { ScreenProps } from "../../routes/routes.types";
import { background } from "../../style";

export type PokemonProps = {} & ScreenProps;

export const Pokemon: React.FC<PokemonProps> = ({
  route,
  navigation,
}): JSX.Element => {
  const { id, name, weight, sprite, types, weakAgainst } = route.params!;

  return (
    <View
      style={[
        { flex: 1, ...Platform.select({
          android: {
            paddingTop: 40
          }
        })},
        background.primary
      ]}
    >
      <View style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15 
      }}>
        <Back 
          color="white"
          size={40}
          onPress={() => navigation.goBack()}
          // style={{ backgroundColor: "blue" }}
        />
        <H1
          style={{ fontSize: 15 }}
        >{name.toLocaleUpperCase()}</H1>
        <View style={{ height: 40, width: 40} }></View>
      </View>

      <PokemonView 
        sprite={sprite} 
        types={types}
      />

        <H1 style={{alignSelf: "center", fontSize: 20}}>Weaknesses: </H1>
        <FlatList 
          data={weakAgainst}
          keyExtractor={(_, idx) => idx.toLocaleString()}
          contentContainerStyle={{
            paddingTop: 10,
            width: "50%",
            alignSelf: "center"
          }}
          renderItem={({item}) => (
            <Types 
              type={item.name}
            />
          )}
        />
    </View>
  );
};

export default Pokemon;