import { StackScreenProps } from "@react-navigation/stack";
import { SECPokemonRecord } from "../types/pokemon.types";

export type RootStackParamList = {
  Splash: undefined;
  Search: undefined;
  Pokemon: SECPokemonRecord
};

export type ScreenProps = StackScreenProps<RootStackParamList>;