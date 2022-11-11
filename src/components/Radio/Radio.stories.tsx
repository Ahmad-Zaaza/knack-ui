import { ComponentStory, Meta } from "@storybook/react";
import { useState } from "react";
import ThemeProvider from "../../theme/ThemeProvider";

import Radio, { RadioProps } from "./Radio";

export default {
  title: "Components/Radio",
  component: Radio,
  argTypes: {
    size: {
      defaultValue: "default"
    },
    checked: {
      control: {
        disable: true
      }
    }
  }
} as Meta<RadioProps>;

const Template: ComponentStory<typeof Radio> = ({ size }) => {
  const [value, setValue] = useState<"oranges" | "apples" | null>(null);
  return (
    <ThemeProvider>
      <div style={{ gap: "2rem", display: "flex", flexDirection: "column" }}>
        <Radio mt={6} mx={12} size={size}>
          <Radio.Control
            checked={value === "apples"}
            onChange={() => setValue("apples")}
          />
          <Radio.Text>Apples</Radio.Text>
        </Radio>
        <Radio mt={6} mx={12} size={size}>
          <Radio.Control
            checked={value === "oranges"}
            onChange={() => setValue("oranges")}
          />
          <Radio.Text>Oranges</Radio.Text>
        </Radio>
      </div>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  size: "m"
};
export const Large = Template.bind({});
Large.args = {
  size: "l"
};
