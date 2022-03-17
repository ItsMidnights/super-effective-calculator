import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native";
import { useRecoilValue } from "recoil";
import { SafeContainer } from "./components/safe-container";
import { theme } from "./data/store";
import { HomeNavigator } from "./routes";

export default function Main({}): JSX.Element {
  const currentTheme = useRecoilValue(theme);

  return (
    <SafeContainer
      style={{
        backgroundColor: currentTheme === "dark" ? "#000" : "#fff",
      }}
    >
      <HomeNavigator />
    </SafeContainer>
  );
}
