import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Stack } from "..";

import Typography from "./Typography";

export default {
  title: "Components/Typography",
  component: Typography,
  argTypes: {
    color: { control: "text" }
  }
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = ({ ...args }) => (
  <Stack direction="column" gap={2}>
    <Typography mb={4} color='themes.warning' variant="h1" as="h1">
      This is an h1 variant
    </Typography>
    <Typography {...args} variant="h2">
      This is an h2 variant
    </Typography>
    <Typography color="" {...args} variant="h3">
      This is an h3 variant
    </Typography>
    <Typography {...args} variant="h4">
      This is an h4 variant
    </Typography>
    <Typography {...args} variant="h5">
      This is an h5 variant
    </Typography>
    <Typography {...args} variant="h6">
      This is an h6 variant
    </Typography>
    <Typography {...args} variant="subtitle1">
      This is subtitle1 variant
    </Typography>
    <Typography {...args} variant="subtitle2">
      This is subtitle2 variant
    </Typography>

    <Typography {...args} variant="body1">
      This is body1 variant
    </Typography>
    <Typography {...args} variant="body2">
      This is body2 variant
    </Typography>
    <Typography {...args} variant="body3">
      This is body3 variant
    </Typography>
    <Typography {...args} variant="caption">
      This is caption variant
    </Typography>
  </Stack>
);

export const Default = Template.bind({});
