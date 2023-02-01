import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Stack } from "../Stack";

import Chip from "./Chip";

export default {
  title: "Components/Chip",
  component: Chip,
  argTypes: {
    shape: {
      control: "radio",
      options: ["rounded", "square", "default", "semi-rounded"]
    },
    size: {
      defaultValue: "medium",
      options: ["small", "medium"],
      control: "radio"
    }
  }
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = ({
  children: _,
  variant: __,

  ...args
}) => (
  <Stack gap={4}>
    <Chip onDelete={() => {}} variant="primary" {...args}>
      Default Chip
    </Chip>
    <Chip variant="secondary" {...args}>
      Secondary Outline
    </Chip>
    <Chip
      onDelete={() => {}}
      theme="info"
      variant="secondary"
      shape="rounded"
      {...args}
    >
      Info Chip
    </Chip>
    <Chip variant="secondary" {...args}>
      Secondary
    </Chip>
    <Chip theme="danger" {...args}>
      Danger
    </Chip>
    <Chip theme="success" variant="secondary" {...args}>
      Success
    </Chip>
    <Chip theme="success" variant="tertiary" {...args}>
      Success
    </Chip>
    <Chip theme="primary" variant="tertiary" {...args}>
      Success
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
