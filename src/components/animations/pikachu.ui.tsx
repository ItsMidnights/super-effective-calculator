import { useContext } from "react";
import Lottie from "lottie-react-native";
import Colors from "../../style/colors";
import { layoutContext } from "../../context/layout";
import { pikachuStyles } from ".";
import { getStyleByLayout } from "../../style/util/functions";

export interface PikachuAnimationUIProps {
  loop: boolean;
  onAnimationFinish: () => void;
};

export const PikachuAnimationUI: React.FC<PikachuAnimationUIProps> = ({
  loop,
  onAnimationFinish
 }) => {

  const { layout } = useContext(layoutContext);

  return (
    <Lottie 
      source={
        require("../../../assets/animation/lottie/pikachu.json")
      }
      autoPlay={true}
      loop={loop}
      onAnimationFinish={onAnimationFinish}
      style={[
        Colors.primaryBackground,
        pikachuStyles[layout],
      ]}
    />
  );
}