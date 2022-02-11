import LayoutProvider from "../src/context/layout/layout.provider";
import { primary_color } from "../assets/colors/";

export const parameters = {
  backgrounds: {
    values: [
      { name: "main", value: primary_color }
    ]
  },
};

export const decorators = [
  (Story) => (
    <LayoutProvider>
      <Story />
    </LayoutProvider>
  )
];