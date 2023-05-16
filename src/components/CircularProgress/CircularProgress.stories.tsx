import { StoryFn, Meta } from "@storybook/react";
import { CircularProgress } from ".";

export default {
  title: "Components/CircularProgress",
  component: CircularProgress,
  argTypes: {
    color: {
      control: "text"
    },
    percentage: {
      control: "range"
    }
  }
} as Meta<typeof CircularProgress>;

const Template: StoryFn<typeof CircularProgress> = (args) => (
  <CircularProgress {...args} />
);

export const Default = Template.bind({});

Default.args = {
  size: 150,
  percentage: 45,
  strokeWidth: 15,
  showText: true
};
export const DynamicColors = Template.bind({});

DynamicColors.args = {
  size: 150,
  dynamicColors: true,
  percentage: 24,
  strokeWidth: 15,
  showText: true
};
