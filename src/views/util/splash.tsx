import { useFonts } from "@expo-google-fonts/roboto";
import LottieView from "lottie-react-native";
import colors from "../../../assets/colors";
import { preloadedFonts } from "../../../assets/fonts";
import Positioning from "../../style/util/position";

export const Splash = ({ navigation }: {navigation: any}) => {

  let [loaded] = useFonts({
    ...preloadedFonts
  });

  // const navigation = useNavigation();

  return (
    <LottieView
      style={[{ flex: 1, backgroundColor: colors.background }, Positioning.centered]}
      source={require("../../../assets/animation/lottie/pikachu.json")}
      autoPlay
      // loop
      loop={false}
      onAnimationFinish={() => {
        console.log("animation finished");
        navigation.navigate("Home");
      }}
    />
  );
};

