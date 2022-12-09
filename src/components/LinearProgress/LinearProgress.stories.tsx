import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LinearProgress } from ".";

export default {
  title: "Components/LinearProgress",
  component: LinearProgress,
  argTypes: {
    color: {
      control: "text"
    },
    percentage: { control: "range" }
  }
} as ComponentMeta<typeof LinearProgress>;

const Template: ComponentStory<typeof LinearProgress> = (args) => (
  <LinearProgress {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 14,
  percentage: 45,
  showPercentage: true
};
export const DynamicColors = Template.bind({});

DynamicColors.args = {
  size: 14,
  dynamicColors: true,
  percentage: 24,
  strokeWidth: 15,
  showPercentage: true
};
