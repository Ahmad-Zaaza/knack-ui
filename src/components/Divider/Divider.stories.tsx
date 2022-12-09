import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "../Box";
import Divider from "./Divider";

export default {
  title: "Components/Divider",
  component: Divider,
  argTypes: {}
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = ({ ...args }) => (
  <Box h={300}>
    <Divider {...args} />
  </Box>
);

export const Default = Template.bind({});
