import { ComponentStory, Meta } from "@storybook/react";

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
 
    <Toggle size={size}>
      <Toggle.Text>Turn Off</Toggle.Text>
      <Toggle.Control />
      <Toggle.Text>Turn On</Toggle.Text>
    </Toggle>
  
);

export const Default = Template.bind({});
Default.args = {};
