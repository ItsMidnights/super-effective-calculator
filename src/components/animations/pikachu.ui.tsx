import { useContext } from "react";
import Lottie from "lottie-react-native";
import Colors, { colors } from "../../style/colors";
import { layoutContext } from "../../context/layout";
import { pikachuAnimationStyles } from "./pikachu.style";
import { getStyleByLayout } from "../../style/util/functions";
import { Platform } from "react-native";

export interface PikachuAnimationUIProps {
  loop: boolean;
  onAnimationFinish?: () => void;
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
        colors.purpleBackground,
        Platform.OS === "web"
        ? pikachuAnimationStyles.webSpecific
        : pikachuAnimationStyles[layout] 
      ]}
    />
  );
}