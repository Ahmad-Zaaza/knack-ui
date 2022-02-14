import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { Button } from "../..";

import Dialog from "./BaseDialog";

export default {
  title: "Components/Dialog",
  component: Dialog,
  argTypes: {
    isOpen: {
      control: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <div style={{ height: "110vh" }}>
        <Dialog {...args} isOpen={open} onClose={() => setOpen(false)} />
      </div>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: "Base Dialog"
};
