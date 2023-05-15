import { StoryFn, Meta } from "@storybook/react";

import Textarea from "./Textarea";

export default {
  title: "Components/Textarea",
  component: Textarea,
  argTypes: {
    size: {
      defaultValue: ""
    },
    disabled: {
      control: "boolean",
      defaultValue: false
    },
    readOnly: {
      control: "boolean",
      defaultValue: false,
    },
    error: { control: { type: "text" }, description: "Error state" }
  }
} as Meta<typeof Textarea>;

const Template: StoryFn<typeof Textarea> = (args) => (
 
    <Textarea {...args} />
  
);

export const Default = Template.bind({});
