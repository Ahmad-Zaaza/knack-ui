import { ComponentStory, ComponentMeta } from "@storybook/react";

import Box from "./Box";
import { Typography } from "../Typography";
import { Stack } from "../Stack";

export default {
  title: "Components/Box",
  component: Box,
  argTypes: {}
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = ({
  children: _,

  ...args
}) => (
  <Box elevation={1} br="large" p={4} paper {...args}>
    <div>Hey ma, I am dynamic! </div>
  </Box>
);
const ElevationsTemplate: ComponentStory<typeof Box> = ({
  children: __,
  ...args
}) => (
  <>
    <Typography style={{ marginBottom: "1rem" }} variant="h5">
      Box as Stack
    </Typography>
    <Box as={Stack} flexWrap="wrap" mt={4} p={4} gap={4} {...args}>
      {Array.from(new Array(10).keys()).map((i) => (
        <Stack
          justifyContent="center"
          alignItems="center"
          h={125}
          w={125}
          p={4}
          br={16}
          paper
          key={i}
          elevation={i}
          {...args}
        >
          <div>Elevation {i}</div>
        </Stack>
      ))}
    </Box>
  </>
);

export const Default = Template.bind({});

export const WithElevations = ElevationsTemplate.bind({});
