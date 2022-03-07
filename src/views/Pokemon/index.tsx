import React from "react";
import {
  Image,
  ImageSourcePropType,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Back } from "../../components/icons";
import { PokemonUI as PokemonView } from "../../components/pokemon";
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
        >{name.toUpperCase()}</H1>
        <View style={{ height: 40, width: 40} }></View>
      </View>

      <PokemonView 
        id={id} 
        name={name}
        weight={weight}
        sprite={sprite}
      />
      <Text>TYPES: {JSON.stringify(types)}</Text>
      <Text>WEAK AGAINST: {JSON.stringify(weakAgainst)}</Text>
    </View>
  );
};

export default Pokemon;