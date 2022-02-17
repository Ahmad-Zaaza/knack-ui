import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LinearProgress } from ".";

export default {
  title: "Components/LinearProgress",
  component: LinearProgress,
  argTypes: {
    color: {
      control: "text"
    }
  }
} as ComponentMeta<typeof LinearProgress>;

const Template: ComponentStory<typeof LinearProgress> = (args) => (
  <LinearProgress {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 50,
  percentage: 45,
  showPercentage: true
};
