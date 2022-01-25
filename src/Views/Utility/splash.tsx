import LottieView from "lottie-react-native";

interface SplashPropTypes {
  loop: boolean;
}

export const Splash = ({ loop }: SplashPropTypes) => {
  return (
    <LottieView
      source={require("../../../assets/animation/lottie/pikachu.json")}
      autoPlay
      loop
    />
  );
};