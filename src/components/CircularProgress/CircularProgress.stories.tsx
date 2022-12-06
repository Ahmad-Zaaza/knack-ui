import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CircularProgress } from ".";
import ThemeProvider from "../../theme/ThemeProvider";

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
} as ComponentMeta<typeof CircularProgress>;

const Template: ComponentStory<typeof CircularProgress> = (args) => (
  <ThemeProvider mode="light">
    <CircularProgress {...args} />
  </ThemeProvider>
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
