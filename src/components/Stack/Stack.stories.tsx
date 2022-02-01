import { Meta, Story } from "@storybook/react";

import Stack, { IStackProps } from "./Stack";

export default {
  title: "Components/Stack",
  component: Stack,
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 4 }
  }
} as Meta<typeof Stack>;

const Template: Story<IStackProps & { numberOfChildren: number }> = ({
  numberOfChildren,
  ...args
}) => (
  <Stack {...args}>
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
  direction: "column",
  gap: 6,
  children: (
    <>
      <p>first</p>
      <h1>second</h1>
      <div>third</div>
      <span>fourth</span>
    </>
  )
};
