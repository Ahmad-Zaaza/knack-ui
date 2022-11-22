import { ComponentStory, Meta } from "@storybook/react";
import { BsQuestion } from "react-icons/bs";
import ThemeProvider from "../../theme/ThemeProvider";
import { Button } from "../Button";

import Notice, { INoticeProps } from "./Notice";

export default {
  title: "Components/Notice",
  component: Notice,
  argTypes: {
    theme: {
      control: "select",
      options: ["info", "success", "danger", "warning"],
      defaultValue: "info"
    },
    visible: {
      control: "boolean",
      defaultValue: "false"
    }
  }
} as Meta<INoticeProps>;

const Template: ComponentStory<typeof Notice> = ({ theme, visible }) => (
  <ThemeProvider>
    <Notice theme={theme} visible={visible}>
      <Notice.Label>
        <BsQuestion size={20} />
      </Notice.Label>
      <Notice.Content>
        <Notice.Title>Look at this cool notice!</Notice.Title>
        This is your message.
        <Notice.Actions>
          <Button theme="success">Wow, so cool!</Button>
        </Notice.Actions>
      </Notice.Content>
      <Notice.CloseIcon />
    </Notice>
  </ThemeProvider>
);

export const Default = Template.bind({});
