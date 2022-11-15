import { ComponentStory, Meta } from "@storybook/react";
import ThemeProvider from "../../theme/ThemeProvider";

import Toggle, { ToggleProps } from "./Toggle";

export default {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {
    size: {
      control: "radio",
      options: ["l", "m"],
      defaultValue: "medium"
    }
  }
} as Meta<ToggleProps>;

const Template: ComponentStory<typeof Toggle> = ({ size }) => (
  <ThemeProvider>
    <Toggle size={size}>
      <Toggle.Text>Turn Off</Toggle.Text>
      <Toggle.Control />
      <Toggle.Text>Turn On</Toggle.Text>
    </Toggle>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
