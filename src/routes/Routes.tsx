import { createStackNavigator } from "@react-navigation/stack";
import { fonts } from "../style";
import { Search, Splash, Pokemon } from "../views";
import { Home } from "../views/Home";
import { RootStackParamList } from "./routes.types";
import { SearchBar } from "react-native-elements";
import { EvilIcons, Feather, Ionicons } from "@expo/vector-icons";
import React from "react";
import { Animated, TextInput, View, StatusBar } from "react-native";
import { Header } from "../components/header";

const RootStack = createStackNavigator<RootStackParamList>();

export const Routes = () => (
  <RootStack.Navigator
    initialRouteName="Splash"
    screenOptions={{
      headerShown: false,
    }}
  >
    <RootStack.Screen name="Splash" component={Splash} />
    <RootStack.Screen name="Search" component={Search} />
    <RootStack.Screen name="Pokemon" component={Pokemon} />
  </RootStack.Navigator>
);

type HomeStackParamList = {
  Home: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          // headerTitle: "buddy",
          header: () => <Header />,
        }}
      />
    </HomeStack.Navigator>
  );
};
