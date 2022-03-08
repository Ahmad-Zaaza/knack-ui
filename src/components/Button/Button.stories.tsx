import { Story, ComponentMeta } from "@storybook/react";
import { Router, Link } from "react-router-dom";
import { createMemoryHistory } from "history";
import { BsFillBagFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      defaultValue: "medium",
      options: ["small", "medium", "large"],
      control: "radio"
    },
    kind: { control: "radio" },
    children: { defaultValue: "Hello", control: "text" },
    fullWidth: { defaultValue: false, control: "boolean" },
    disabled: { defaultValue: false, control: "boolean" },
    rounded: { defaultValue: false, control: "boolean" }
  }
} as ComponentMeta<typeof Button>;
const history = createMemoryHistory();
const Template: Story<ButtonProps> = ({ ...args }) => <Button {...args} />;
const RouterTemplate: Story<ButtonProps> = (args) => (
  <Router navigator={history} location={history.location}>
    <Button as={Link} to="/" {...args} />
  </Router>
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  kind: "secondary",
  startIcon: <AiFillEdit />
};
export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  kind: "primaryOutline",
  variant: "medium"
};
export const SecondaryOutline = Template.bind({});
SecondaryOutline.args = {
  kind: "secondaryOutline",
  variant: "medium"
};
export const Tertiary = Template.bind({});
Tertiary.args = {
  kind: "tertiary",
  variant: "medium"
};
export const Ghost = Template.bind({});
Ghost.args = {
  kind: "ghost",
  variant: "medium"
};
export const Danger = Template.bind({});
Danger.args = {
  kind: "danger",
  variant: "medium"
};
export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true
};

export const LinkButton = RouterTemplate.bind({});
LinkButton.args = {};
export const IconButton = Template.bind({});
IconButton.args = {
  iconOnly: true,
  children: <BsFillBagFill />
};
