import { ComponentStory, ComponentMeta } from "@storybook/react";
import Step from "./Step/Step";

import Stepper from "./Stepper";

export default {
  title: "Components/Stepper",
  component: Stepper,
  argTypes: {}
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = ({ ...args }) => (
  <Stepper clickable {...args}>
    <Step>First step</Step>
    <Step>hello</Step>
    <Step>I am disabled</Step>
    <Step>4th step</Step>
  </Stepper>
);

export const Uncontrolled = Template.bind({});
