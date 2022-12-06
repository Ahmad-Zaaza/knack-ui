import { ComponentStory, Meta } from "@storybook/react";
import { useState } from "react";
import ThemeProvider from "../../theme/ThemeProvider";

import Checkbox, { CheckboxProps } from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    size: {
      defaultValue: "default"
    },
    checked: {
      control: {
        control: "boolean"
        // disable: true
      }
    },
    disabled: {
      control: {
        control: "boolean"
      }
    }
  }
} as Meta<CheckboxProps>;

const Template: ComponentStory<typeof Checkbox> = ({ size, ...args }) => {
  const [checked, setChecked] = useState(true);
  return (
    <ThemeProvider>
      <Checkbox size={size} {...args}>
        <Checkbox.Control
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <Checkbox.Text>Send weekly email</Checkbox.Text>
      </Checkbox>
    </ThemeProvider>
  );
};
const WithLabel: ComponentStory<typeof Checkbox> = ({ size, ...args }) => {
  const [checked, setChecked] = useState(true);
  return (
    <ThemeProvider>
      <Checkbox mt={6} mx={12} size={size} {...args}>
        <Checkbox.Control
          checked={checked}
          disabled
          onChange={(e) => setChecked(e.target.checked)}
        />
        <Checkbox.Text>Send weekly email</Checkbox.Text>
      </Checkbox>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

export const Large = Template.bind({});
Large.args = {
  size: "l"
};

export const CheckboxWithLabel = WithLabel.bind({});
CheckboxWithLabel.args = {};
