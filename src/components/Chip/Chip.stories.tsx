import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Stack } from "..";

import Chip from "./Chip";

export default {
  title: "Components/Chip",
  component: Chip,
  argTypes: {
    shape: {
      control: "radio",
      options: ["rounded", "square"]
    }
  }
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = ({
  children: _,
  variant: __,

  ...args
}) => (
  <Stack gap={4}>
    <Chip variant="primaryOutline" {...args}>
      Default Chip
    </Chip>
    <Chip variant="secondaryOutline" {...args}>
      Secondary Outline
    </Chip>
    <Chip variant="primary" {...args}>
      Primary
    </Chip>
    <Chip variant="secondary" {...args}>
      Secondary
    </Chip>
    <Chip variant="danger" {...args}>
      Danger
    </Chip>
    <Chip variant="success" {...args}>
      Success
    </Chip>
    <Chip variant="warning" {...args}>
      Warning
    </Chip>
  </Stack>
);

export const Default = Template.bind({});
Default.args = {
  size: "medium"
};
export const Small = Template.bind({});
Small.args = {
  size: "small"
};
