import { ComponentStory, ComponentMeta } from "@storybook/react";

import Textarea from "./Textarea";

export default {
  title: "Components/Textarea",
  component: Textarea,
  argTypes: {
    variant: {
      defaultValue: "default"
    },
    error: { control: { type: "text" }, description: "Error state" }
  }
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const Default = Template.bind({});
