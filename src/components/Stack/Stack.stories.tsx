import { Meta, Story } from "@storybook/react";
import styled from "styled-components";
import ThemeProvider from "../../theme/ThemeProvider";

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
  <ThemeProvider>
    <Flex flexWrap="wrap" gap={5} {...args}>
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
    </Flex>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  direction: "column",
  gap: 2
};

const Flex = styled(Stack)`
  /* flex-wrap: wrap; */
`;
