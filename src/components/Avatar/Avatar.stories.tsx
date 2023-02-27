import { ComponentStory, ComponentMeta } from "@storybook/react";

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
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = ({ ...args }) => (
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
