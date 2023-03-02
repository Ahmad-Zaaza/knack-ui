import { ComponentStory, Meta } from "@storybook/react";
import { useState } from "@storybook/addons";

import Stepper from "./Stepper";

export default {
  title: "Components/Stepper",
  component: Stepper,
  argTypes: {}
} as Meta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = ({
  activeStep: _,
  onChange: __,
  ...args
}) => {
  const [active, setActive] = useState(0);
  return (
    <>
      <Stepper
        onChange={(i) => {
          setActive(i);
        }}
        activeStep={active}
        clickable
        {...args}
      >
        <Stepper.Step iconSize={20}>First step</Stepper.Step>
        <Stepper.Step completed iconSize={30}>
          hello
        </Stepper.Step>
        <Stepper.Step disabled iconSize={40}>
          I am disabled
        </Stepper.Step>
        <Stepper.Step iconSize={50}>
          4th step bla bla 4th step bla bla
        </Stepper.Step>
      </Stepper>
      {active === 0 && "step 1"}
      {active === 1 && "step 2"}
    </>
  );
};

export const Uncontrolled = Template.bind({});
export const VerticalStepper = Template.bind({});
VerticalStepper.args = {
  vertical: true
};
