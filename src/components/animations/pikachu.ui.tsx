import React, { useContext } from "react";
import Lottie from "lottie-react-native";
import { colors } from "../../style/colors";
import { layoutContext } from "../../context/layout";
import { pikachuAnimationStyles } from "./pikachu.style";
import { getStyleByLayout } from "../../style/util/functions";
import { Platform } from "react-native";
import AnimatedLottieView from "lottie-react-native";
import { background } from "../../style";

export type Ref = AnimatedLottieView;
export interface PikachuAnimationUIProps {
  loop: boolean;
  onAnimationFinish?: () => void;
};

export const PikachuAnimationUI = React.forwardRef(({
  loop,
  onAnimationFinish
}: PikachuAnimationUIProps, ref: React.Ref<AnimatedLottieView>) => {

  const { layout } = useContext(layoutContext);

  return (
    <Lottie 
      source={
        require("../../../assets/animation/lottie/pikachu.json")
      }
      ref={ref}
      autoPlay={true}
      loop={loop}
      onAnimationFinish={onAnimationFinish}
      style={[
        background.primary,
        Platform.OS === "web"
        ? pikachuAnimationStyles.webSpecific
        : pikachuAnimationStyles[layout] 
      ]}
    />
  );
})