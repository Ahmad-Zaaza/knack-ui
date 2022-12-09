import { ComponentStory, ComponentMeta } from "@storybook/react";

import Avatar from "./Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    image: {
      defaultValue: "https://cdn-icons-png.flaticon.com/512/147/147140.png"
    },
    text: {
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
