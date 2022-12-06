import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Stack } from "../Stack";
import ThemeProvider from "../../theme/ThemeProvider";

import Chip from "./Chip";

export default {
  title: "Components/Chip",
  component: Chip,
  argTypes: {
    shape: {
      control: "radio",
      options: ["rounded", "square", "default"]
    }
  }
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = ({
  children: _,
  variant: __,

  ...args
}) => (
    <ThemeProvider mode='light'>
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
      </Stack>
    </ThemeProvider>
  );

export const Default = Template.bind({});
Default.args = {
  size: "medium"
};
export const Small = Template.bind({});
Small.args = {
  size: "small"
};
