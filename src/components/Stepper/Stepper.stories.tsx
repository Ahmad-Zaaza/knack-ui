import { ComponentStory, Meta } from "@storybook/react";
import { useState } from "react";
import ThemeProvider from "../../theme/ThemeProvider";

import { Stepper, IStepperProps } from ".";

export default {
  title: "Components/Stepper",
  component: Stepper,
  argTypes: {}
} as Meta<IStepperProps>;

const Template: ComponentStory<typeof Stepper> = ({
  activeStep: _,
  onChange: __,
  ...args
}) => {
  const [active, setActive] = useState(0);
  return (
    <ThemeProvider>
      <Stepper
        onChange={(i) => {
          setActive(i);
        }}
        activeStep={active}
        clickable
        {...args}
      >
        <Stepper.Step>First step</Stepper.Step>
        <Stepper.Step completed>hello</Stepper.Step>
        <Stepper.Step disabled>I am disabled</Stepper.Step>
        <Stepper.Step >4th step bla bla 4th step bla bla</Stepper.Step>
      </Stepper>
      {active === 0 && "step 1"}
      {active === 1 && "step 2"}
    </ThemeProvider>
  );
};

export const Uncontrolled = Template.bind({});
export const VerticalStepper = Template.bind({});
VerticalStepper.args = {
  vertical: true
};
