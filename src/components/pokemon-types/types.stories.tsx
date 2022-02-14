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
  name: "normal",
}

export const Fighting = Template.bind({});
Fighting.args = {
  name: "fighting",
}

export const Fire = Template.bind({});
Fire.args = {
  name: "fire",
}