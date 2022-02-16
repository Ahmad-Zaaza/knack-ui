import { ComponentStory, ComponentMeta } from "@storybook/react";

import Toggle from "./Toggle";

export default {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {
    checked: {
      control: {
        control: null,
        disable: true
      }
    }
  }
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => (
  <Toggle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  color: "secondary",
  disabled: false
};
