import { useFonts } from "@expo-google-fonts/roboto";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { preloadedFonts } from "../../../assets/fonts";

export const Splash = () => {

  let [loaded] = useFonts({
    ...preloadedFonts
  });

  const navigation = useNavigation();

  return (
    <LottieView
      source={require("../../../assets/animation/lottie/pikachu.json")}
      autoPlay
      loop={false}
      onAnimationFinish={() => {
        console.log("animation finished");
        navigation.navigate("Home");
      }}
    />
  );
};