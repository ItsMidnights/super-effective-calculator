import React from "react";
import * as Font from "expo-font";
import { preloadedFonts } from "../../../assets/fonts";
import { PikachuAnimation } from "../../components/animations";
import { ScreenProps } from "../../routes/routes.types";
import AnimatedLottieView from "lottie-react-native";

export const Splash: React.FC<ScreenProps> = ({ navigation }) => {

  const AnimationRef = React.createRef<AnimatedLottieView>();

  const loadFontsAsync = async () => {
    await Font.loadAsync({
      ...preloadedFonts
    });
    AnimationRef.current?.play();
  }  

  React.useEffect(() => {
    loadFontsAsync();
  }, []);

  return (
    <PikachuAnimation 
      ref={AnimationRef}
      loop={false}
      onAnimationFinish={() => {
        navigation.navigate("Home")
      }}
    />
  )
};

