import Lottie from "lottie-react-native";
import { PikachuStyles as Styles } from ".";
import Colors from "../../style/colors";

export interface PikachuAnimationUIProps {
  loop: boolean;
  autoPlay: boolean;
  onAnimationFinish: () => void;
};

export const PikachuAnimationUI: React.FC<PikachuAnimationUIProps> = ({
  loop,
  autoPlay,
  onAnimationFinish
 }) => {
  return (
    <Lottie 
      source={
        require("../../../assets/animation/lottie/pikachu.json")
      }
      autoPlay={autoPlay}
      loop={loop}
      onAnimationFinish={onAnimationFinish}
      style={[
        Colors.primaryBackground,
        Styles.default.web
      ]}
    />
  );
}