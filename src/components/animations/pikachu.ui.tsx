import { useContext } from "react";
import Lottie from "lottie-react-native";
import pikachuStyles from "./pikachu.style";
import Colors from "../../style/colors";
import { layoutContext } from "../../context/layout";
import { getStyleByLayout } from "../../style/util/functions";

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

  const { layout } = useContext(layoutContext);

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
        pikachuStyles[layout],
      ]}
    />
  );
}