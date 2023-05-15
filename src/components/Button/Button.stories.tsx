import { StoryFn, Meta } from "@storybook/react";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      defaultValue: "medium",
      options: ["small", "medium", "large"],
      control: "radio"
    },
    variant: {
      defaultValue: "default",
      options: ["primary", "secondary", "tertiary", "ghost"],
      control: "radio"
    },
    theme: {
      defaultValue: "default",
      options: ["primary", "success", "info", "neutral", "danger"],
      control: "radio"
    },
    kind: { control: "radio" },
    children: { defaultValue: "Get started", control: "text" },
    fullWidth: { defaultValue: false, control: "boolean" },
    disabled: { defaultValue: false, control: "boolean" },
    isLoading: { defaultValue: false, control: "boolean" },
    shape: {
      options: ["square", "rounded", "semi-rounded", "default"],
      control: "radio"
    }
  }
} as Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = ({ ...args }) => <Button {...args} />;
const IconTemplate: StoryFn<ButtonProps> = ({ ...args }) => <Button startIcon={<AiFillEdit />} {...args} />;

const RouterTemplate: StoryFn<ButtonProps> = (args) => (
    <Button size="large" as={Link} to="/" {...args} />
  
);

export const Primary = Template.bind({});

export const WithIcon = IconTemplate.bind({});
WithIcon.args = {
  variant: "primary"
};
export const AsLink = RouterTemplate.bind({});
