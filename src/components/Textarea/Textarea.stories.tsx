import { ComponentStory, ComponentMeta } from "@storybook/react";

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
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
 
    <Textarea {...args} />
  
);

export const Default = Template.bind({});
