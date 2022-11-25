import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Stack, Typography } from "..";
import ThemeProvider from "../../theme/ThemeProvider";
import { createTheme } from "../../theme/utils";

import Box from "./Box";

export default {
  title: "Components/Box",
  component: Box,
  argTypes: {}
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = ({
  children: _,

  ...args
}) => {
  const customTheme = createTheme({
    colors: { paper: "hsl(160,13%,15%)" },
    borderRadiuses: { large: "16px" }
  });
  return (
    <ThemeProvider theme={customTheme} mode="auto">
      <Box elevation={1} br='large' p={4} paper {...args}>
        <div>Hey ma, I am dynamic! </div>
      </Box>
    </ThemeProvider>
  );
};
const ElevationsTemplate: ComponentStory<typeof Box> = ({
  children: __,
  ...args
}) => (
  <ThemeProvider mode="light">
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
  </ThemeProvider>
);

export const Default = Template.bind({});

export const WithElevations = ElevationsTemplate.bind({});
