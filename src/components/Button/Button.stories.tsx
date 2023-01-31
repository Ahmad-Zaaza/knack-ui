import { Story, ComponentMeta } from "@storybook/react";
import { createMemoryHistory } from "history";
import { AiFillEdit } from "react-icons/ai";
import { Link, Router } from "react-router-dom";
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
    children: { defaultValue: "Hello", control: "text" },
    fullWidth: { defaultValue: false, control: "boolean" },
    disabled: { defaultValue: false, control: "boolean" },
    isLoading: { defaultValue: false, control: "boolean" },
    shape: { options: ["square", "rounded"], control: "radio" },
    loaderType: { options: ["Dual Ring"], control: "radio" }
  }
} as ComponentMeta<typeof Button>;
const history = createMemoryHistory();
const Template: Story<ButtonProps> = ({ ...args }) => <Button {...args} />;
const RouterTemplate: Story<ButtonProps> = (args) => (
  <Router navigator={history} location={history.location}>
    <Button size="large" as={Link} to="/" {...args} />
  </Router>
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "primary",
  startIcon: <AiFillEdit />
};
export const AsLink = RouterTemplate.bind({});
Secondary.args = {
  variant: "primary"
};
