import { StoryFn, Meta } from "@storybook/react";

import Counter from "./Counter";

export default {
  title: "Components/Counter",
  component: Counter,
  argTypes: {}
} as Meta<typeof Counter>;

const Template: StoryFn<typeof Counter> = (args) => (
 
    <Counter {...args} />
 
);

export const Default = Template.bind({});

Default.args = {
  children: "14"
};
