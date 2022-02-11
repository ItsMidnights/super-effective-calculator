import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SearchBar } from ".";

export default {
  component: SearchBar
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />

export const Primary = () => (
  <SearchBar />
);
