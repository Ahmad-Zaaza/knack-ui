import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CircularProgress } from ".";

export default {
  title: "Components/CircularProgress",
  component: CircularProgress,
  argTypes: {
    color: {
      control: "text"
    }
  }
} as ComponentMeta<typeof CircularProgress>;

const Template: ComponentStory<typeof CircularProgress> = (args) => (
  <CircularProgress {...args} />
);

export const Default = Template.bind({});

Default.args = {
  size: 150,
  percentage: 45,
  strokeWidth: 5,
  showText: true
};
