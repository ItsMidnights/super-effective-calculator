import AnimatedLottieView from "lottie-react-native";
import React from "react";
import { PikachuAnimationUI, PikachuAnimationUIProps } from "./pikachu.ui";

export type PikachuAnimationProps = {} & PikachuAnimationUIProps;

export const PikachuAnimation = React.forwardRef(({
  loop,
  onAnimationFinish,
}: PikachuAnimationProps, ref: React.Ref<AnimatedLottieView>) => {
  return (
    <PikachuAnimationUI 
      ref={ref}
      loop={loop} 
      onAnimationFinish={onAnimationFinish}
    />
  );
});