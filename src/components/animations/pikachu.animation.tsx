import { PikachuAnimationUI, PikachuAnimationUIProps } from "./pikachu.ui";

export type PikachuAnimationProps = {} & PikachuAnimationUIProps;

export const PikachuAnimation: React.FC<PikachuAnimationProps> = ({
  loop,
  onAnimationFinish,
}) => {
  return (
    <PikachuAnimationUI 
      loop={loop} 
      onAnimationFinish={onAnimationFinish}
    />
  );
}