import { Meta, Story } from "@storybook/react";

import Stack, { StackProps } from "./Stack";

export default {
  title: "Components/Stack",
  component: Stack,
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 4 }
  }
} as Meta<typeof Stack>;

const Template: Story<StackProps & { numberOfChildren: number }> = ({
  numberOfChildren,
  ...args
}) => (
  <Stack
    mt={2}
    justifyContent="space-around"
    elevation={1}
    p={4}
    flexWrap="wrap"
    {...args}
  >
    {[...Array(numberOfChildren).keys()].map((n) => (
      <div
        style={{
          width: 50,
          height: 50,
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {n + 1}
      </div>
    ))}
  </Stack>
);

export const Default = Template.bind({});
Default.args = {
  direction: "row",
  gap: 16
};
