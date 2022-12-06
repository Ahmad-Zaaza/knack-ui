import { ComponentStory, ComponentMeta } from "@storybook/react";
import ThemeProvider from "../../theme/ThemeProvider";
import { Box } from "../Box";
import Divider from "./Divider";

export default {
  title: "Components/Divider",
  component: Divider,
  argTypes: {}
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = ({ ...args }) => (
  <ThemeProvider mode='light'>
    <Box h={300}>
      <Divider {...args} />
    </Box>
  </ThemeProvider>
);

export const Default = Template.bind({});
