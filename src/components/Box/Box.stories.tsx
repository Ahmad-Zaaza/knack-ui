import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Stack, Typography } from "..";
import { createTheme } from "../../theme/defaultTheme";
import ThemeProvider from "../../theme/ThemeProvider";

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
  const customTheme = createTheme({ colors: { paper: "hsl(160,13%,15%)" } });
  return (
    <ThemeProvider theme={customTheme} mode="auto">
      <Box elevation={1} p={4} paper {...args}>
        <div>Hey ma, I am dynamic! </div>
      </Box>
    </ThemeProvider>
  );
};
const PolymorphicTemplate: ComponentStory<typeof Box> = ({
  children: __,
  ...args
}) => (
  <ThemeProvider>
    <Typography style={{ marginBottom: "1rem" }} variant="h5">
      Box as Stack
    </Typography>
    <Box render={Stack} gap={4} {...args}>
      <Box {...args}>
        <div>Elevation 1 (Default)</div>
      </Box>
      <Box {...args}>
        <div>Elevation 2 </div>
      </Box>
      <Box {...args}>
        <div>Elevation 3 </div>
      </Box>
      <Box {...args}>
        <div>Elevation 4 </div>
      </Box>
      <Box {...args}>
        <div>Elevation 6 </div>
      </Box>
    </Box>
  </ThemeProvider>
);

export const Default = Template.bind({});

export const Polymorphic = PolymorphicTemplate.bind({});
