import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { SearchBar } from ".";
import { Back } from "../icons";

export default {
  component: SearchBar,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    handleChange: {
      action: "text changing",
    },
    onCancel: {
      action: "text cleared"
    }
  }
} as ComponentMeta<typeof SearchBar>;


export const Default: 
  ComponentStory<typeof SearchBar> 
= (args) => <SearchBar {...args} />

Default.args = {
  placeholder: "Search for a pokemon...",
  value: "",
};

export const Searching:
  ComponentStory<typeof SearchBar> 
= (args) => <SearchBar {...args} />

Searching.args = {
  placeholder: "Search for a pokemon...",
  value: "",
  leftIcon: <Back 
    size={24} 
    color="grey"
  />,
};