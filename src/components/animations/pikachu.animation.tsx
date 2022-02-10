import { PikachuAnimationUI, PikachuAnimationUIProps } from "./pikachu.ui";

export type PikachuAnimationProps = {} & PikachuAnimationUIProps;

export const PikachuAnimation: React.FC<PikachuAnimationProps> = ({
  autoPlay,
  loop,
  onAnimationFinish,
}) => {
  return (
    <PikachuAnimationUI 
      autoPlay={autoPlay}
      loop={loop} 
      onAnimationFinish={onAnimationFinish}
    />
  );
}