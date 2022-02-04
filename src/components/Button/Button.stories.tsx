import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Router, Link } from "react-router-dom";
import { createMemoryHistory } from "history";

import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: { defaultValue: "primary" },
    size: { defaultValue: "medium" },
    children: { defaultValue: "Hello" }
  }
} as ComponentMeta<typeof Button>;
const history = createMemoryHistory();
const Template: ComponentStory<typeof Button> = (args) => (
  <Router navigator={history} location={history.location}>
    <Button {...args} />
  </Router>
);

export const Default = Template.bind({});
export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary"
};
export const LinkButton = Template.bind({});
LinkButton.args = {
  as: Link
};
