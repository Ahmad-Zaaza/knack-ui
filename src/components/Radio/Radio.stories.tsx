import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { Stack, Typography } from "..";

import Radio from "./Radio";

export default {
  title: "Components/Radio",
  component: Radio,
  argTypes: {
    checked: {
      control: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => {
  const [value, setValue] = useState<"oranges" | "apples" | null>(null);
  return (
    <Stack direction="column" gap={2}>
      <Stack alignItems="center" gap={2}>
        <Typography as="label" htmlFor="oranges" variant="body1">
          I Like Oranges
        </Typography>

        <Radio
          onChange={(e) => setValue(e.target.value as "oranges")}
          checked={value === "oranges"}
          id="oranges"
          value="oranges"
          {...args}
        />
      </Stack>
      <Stack gap={2} alignItems="center">
        <Typography as="label" htmlFor="apples" variant="body1">
          I Like Apples
        </Typography>
        <Radio
          checked={value === "apples"}
          id="apples"
          onChange={(e) => setValue(e.target.value as "apples")}
          value="apples"
          {...args}
        />
      </Stack>
    </Stack>
  );
};

export const Default = Template.bind({});
