import { Story, ComponentMeta } from "@storybook/react";
import { Router, Link } from "react-router-dom";
import { createMemoryHistory } from "history";
import { BsFillBagFill } from "react-icons/bs";
import Button, { TButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      defaultValue: "medium",
      options: ["small", "medium"],
      control: "radio"
    },
    kind: { control: "radio" },
    children: { defaultValue: "Hello", control: "text" },
    fullWidth: { defaultValue: false, control: "boolean" },
    disabled: { defaultValue: false, control: "boolean" }
  }
} as ComponentMeta<typeof Button>;
const history = createMemoryHistory();
const Template: Story<TButtonProps<"button">> = ({ as: _, ...args }) => (
  <Button as="button" {...args} />
);
const RouterTemplate: Story<TButtonProps<typeof Link>> = (args) => (
  <Router navigator={history} location={history.location}>
    <Button {...args} />
  </Router>
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  kind: "secondary"
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
export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true
};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
export const LinkButton = RouterTemplate.bind({});
LinkButton.args = {
  as: Link,
  to: "/"
};
export const IconButton = Template.bind({});
IconButton.args = {
  iconOnly: true,
  children: <BsFillBagFill />
};
