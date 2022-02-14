import { AntDesign, Ionicons } from "@expo/vector-icons";
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
  term: "Pikachu"
};

export const SeenBefore = Template.bind({});
SeenBefore.args = {
  excess: 2,
  leftIcon: <AntDesign 
    size={24}
    name="clockcircleo"
    color="grey"
    style={{ padding: 5 }}
  />,
  term: "Gengar",
  types: ["poison", "dark", "psychic", "ground"]
}

