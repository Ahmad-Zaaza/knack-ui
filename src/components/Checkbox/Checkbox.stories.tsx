import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";

import Checkbox from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    variant: {
      defaultValue: "default"
    },
    checked: {
      control: {
        control: null,
        disable: true
      }
    },
    disabled: {
      control: {
        control: "boolean"
      }
    }
  }
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = ({...args}) => {
  const [checked, setChecked] = useState(args.checked);
  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
};

export const Default = Template.bind({});
export const Small = Template.bind({});
Small.args = {
  variant: "small"
};
export const Large = Template.bind({});
Large.args = {
  variant: "large"
};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
