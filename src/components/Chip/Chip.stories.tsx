import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Stack } from "../Stack";
import ThemeProvider from "../../theme/ThemeProvider";

import Chip from "./Chip";
import { createTheme } from "../../theme/utils";

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
}) => {
  const theme = createTheme({
    colors: {
      primary: "",
      gray: {
        600: ""
      }
    }
  });
  return (
    <ThemeProvider theme={theme}>
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
};

export const Default = Template.bind({});
Default.args = {
  size: "medium"
};
export const Small = Template.bind({});
Small.args = {
  size: "small"
};
