import { StoryFn, Meta } from "@storybook/react";

import Avatar from "./Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    image: {
      defaultValue: ""
    },
    alt: {
      defaultValue: "Ahmad"
    }
  }
} as Meta<typeof Avatar>;

const Template: StoryFn<typeof Avatar> = ({ ...args }) => (
  <Avatar {...args} />
);

export const Default = Template.bind({});
export const Square = Template.bind({});
Square.args = {
  shape: "square"
};
export const Semirounded = Template.bind({});
Semirounded.args = {
  shape: "semi-rounded"
};
