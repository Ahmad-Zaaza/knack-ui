import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Stack, Typography } from "..";

import Box from "./Box";

export default {
  title: "Components/Box",
  component: Box,
  argTypes: {}
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = ({
  children: _,
  elevation: __,
  ...args
}) => (
  <Stack gap={4}>
    <Box paddingPreset="card" elevation={0} {...args}>
      <div>Elevation 0 </div>
    </Box>
    <Box paddingPreset="card" {...args}>
      <div>Elevation 1 (Default)</div>
    </Box>
    <Box paddingPreset="card" elevation={2} {...args}>
      <div>Elevation 2 </div>
    </Box>
    <Box paddingPreset="card" elevation={3} {...args}>
      <div>Elevation 3 </div>
    </Box>
    <Box paddingPreset="card" elevation={4} {...args}>
      <div>Elevation 4 </div>
    </Box>
    <Box paddingPreset="card" elevation={6} {...args}>
      <div>Elevation 6 </div>
    </Box>
  </Stack>
);
const PolymorphicTemplate: ComponentStory<typeof Box> = ({
  as: _,
  children: __,
  ...args
}) => (
  <div>
    <Typography style={{marginBottom:'1rem'}} variant="h5">Box as Stack</Typography>
    <Box as={Stack} gap={4} variant='outlined' paddingPreset="card" elevation={3} {...args}>
      <Box paddingPreset="card" {...args}>
        <div>Elevation 1 (Default)</div>
      </Box>
      <Box paddingPreset="card" elevation={2} {...args}>
        <div>Elevation 2 </div>
      </Box>
      <Box paddingPreset="card" elevation={3} {...args}>
        <div>Elevation 3 </div>
      </Box>
      <Box paddingPreset="card" elevation={4} {...args}>
        <div>Elevation 4 </div>
      </Box>
      <Box paddingPreset="card" elevation={6} {...args}>
        <div>Elevation 6 </div>
      </Box>
    </Box>
  </div>
);

export const Default = Template.bind({});
export const Square = Template.bind({});
Square.args = {
  square: true
};
export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined"
};

export const Polymorphic = PolymorphicTemplate.bind({});
