import { ComponentStory, ComponentMeta } from "@storybook/react";

import Checkbox from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    variant: {
      defaultValue: "default"
    }
  }
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
export const Small = Template.bind({});
Small.args = {
  variant: "small"
};
export const Large = Template.bind({});
Large.args = {
  variant: "large"
};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
