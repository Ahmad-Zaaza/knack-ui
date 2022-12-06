import { ComponentStory, ComponentMeta } from "@storybook/react";
import ThemeProvider from "../../theme/ThemeProvider";

import Counter from "./Counter";

export default {
  title: "Components/Counter",
  component: Counter,
  argTypes: {}
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => (
  <ThemeProvider mode="light">
    <Counter {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  children: "14"
};
