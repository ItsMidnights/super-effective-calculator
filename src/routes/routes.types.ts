import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
};

export type ScreenProps = StackScreenProps<RootStackParamList>;