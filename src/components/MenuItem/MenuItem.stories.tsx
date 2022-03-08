import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AiFillEdit } from "react-icons/ai";
import { Stack } from "..";
import MenuItem from "./MenuItem";

export default {
  title: "Components/MenuItem",
  component: MenuItem,
  argTypes: {
    color: {
      defaultValue: "normal",
      options: [
        "primary",
        "secondary",
        "muted",
        "normal",
        "warning",
        "success"
      ],
      control: "select"
    }
  }
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = () => (
  <Stack direction="column" gap={1}>
    <MenuItem startIcon={<AiFillEdit />}>Menu Item 1</MenuItem>
  </Stack>
);

export const Default = Template.bind({});
