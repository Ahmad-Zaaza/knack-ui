import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import Step from "../Step/Step";

import Stepper from "./Stepper";

export default {
  title: "Components/Stepper",
  component: Stepper,
  argTypes: {}
} as ComponentMeta<typeof Stepper>;

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
        <Step>First step</Step>
        <Step>hello</Step>
        <Step>I am disabled</Step>
        <Step>4th step</Step>
      </Stepper>
      {active === 0 && "step 1"}
      {active === 1 && "step 2"}
    </>
  );
};

export const Uncontrolled = Template.bind({});
