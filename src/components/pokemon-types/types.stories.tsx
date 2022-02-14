import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TypesUI } from "./types.ui";

export default {
  component: TypesUI,
  parameters: {
    layout: "centered"
  }
} as ComponentMeta<typeof TypesUI>;

const Template: ComponentStory<typeof TypesUI> 
= (args) => <TypesUI {...args} />; 

export const Normal = Template.bind({});
Normal.args = {
  type: "normal",
}

export const Fighting = Template.bind({});
Fighting.args = {
  type: "fighting",
}

export const Fire = Template.bind({});
Fire.args = {
  type: "fire",
}