import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Term } from ".";

export default {
  component: Term,
  parameters: {
    layout: "centered"
  }
} as ComponentMeta<typeof Term>

const Template: ComponentStory<typeof Term> = (args) =>
  <Term
    {...args}
  />;

export const Default = Template.bind({});
Default.args = {
  name: "Pikachu"
};

