import { useFonts } from "@expo-google-fonts/roboto";
import LottieView from "lottie-react-native";
import { useContext } from "react";
import { preloadedFonts } from "../../../assets/fonts";
import { layoutContext } from "../../context/layout";
import colors from "../../style/colors";
import Positioning from "../../style/util/position";
import style from "./splash.style";

export const Splash = ({ navigation }: { navigation: NavigationType }) => {

  const { layout } = useContext(layoutContext);

  let [loaded] = useFonts({
    ...preloadedFonts
  });

  // const navigation = useNavigation();

  return (
    <LottieView
      style={[
        colors.primaryBackground,
        style.mobile,
      ]}
      source={require("../../../assets/animation/lottie/pikachu.json")}
      autoPlay
      loop
      // loop={false}
      // onAnimationFinish={() => {
      //   console.log("animation finished");
      //   navigation.navigate("Home");
      // }}
    />
  );
};

