import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "./Input";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: { control: "variant", description: "Input Size" }
  }
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Small = Template.bind({});
Small.args = {
  variant: "small"
};
export const Default = Template.bind({});

export const Large = Template.bind({});
Large.args = {
  variant: "large"
};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  value: "Disabled Input"
};
