import { Story, ComponentMeta } from "@storybook/react";
// import { Router } from "react-router-dom";
// import { createMemoryHistory } from "history";
import { AiFillEdit } from "react-icons/ai";
import Button, { ButtonProps } from "./Button";
import ThemeProvider from "../../theme/ThemeProvider";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      defaultValue: "medium",
      options: ["medium", "large"],
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
// const history = createMemoryHistory();
const Template: Story<ButtonProps> = ({ ...args }) => (
  <ThemeProvider>
    <Button {...args}>
      Hello
    </Button>
  </ThemeProvider>
);
// const RouterTemplate: Story<ButtonProps> = (args) => (
//   <ThemeProvider>
//     <Router navigator={history} location={history.location}>
//       <Button {...args} />
//     </Router>
//   </ThemeProvider>
// );

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "primary",
  startIcon: <AiFillEdit />
};
