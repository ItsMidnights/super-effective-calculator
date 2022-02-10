import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PikachuAnimation, PikachuAnimationProps } from ".";

export default {
  component: PikachuAnimation
} as ComponentMeta<typeof PikachuAnimation>;

const Template: ComponentStory<typeof PikachuAnimation> = 
  (args: PikachuAnimationProps) => <PikachuAnimation {...args}/>

export const Looped = Template.bind({

});

Looped.args = {
  loop: true,
  autoPlay: true, 
  onAnimationFinish: () => {}
}