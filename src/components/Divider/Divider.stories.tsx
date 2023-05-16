import { StoryFn, Meta } from "@storybook/react";
import { Box } from "../Box";
import Divider from "./Divider";

export default {
  title: "Components/Divider",
  component: Divider,
  argTypes: {}
} as Meta<typeof Divider>;

const Template: StoryFn<typeof Divider> = ({ ...args }) => (
  <Box h={300}>
    <Divider {...args} />
  </Box>
);

export const Default = Template.bind({});
