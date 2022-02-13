import { useFonts } from "@expo-google-fonts/roboto";
import React from "react";
import { preloadedFonts } from "../../../assets/fonts";
import { PikachuAnimation } from "../../components/animations";
import { ScreenProps } from "../../routes/routes.types";

export const Splash: React.FC<ScreenProps> = ({ navigation }) => {

  let [loaded] = useFonts({
    ...preloadedFonts
  });

  return (
    <PikachuAnimation 
      loop={loaded}
      onAnimationFinish={() => {
        navigation.navigate("Home")
      }}
    />
  );
};

