import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";

import Dialog from "./BaseDialog";

export default {
  title: "Components/Dialog",
  component: Dialog,
  argTypes: {}
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = ({
  isOpen:_,
  onClose:__,
  ...args
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ height: "100vh" }}>
      <Dialog isOpen={open} onClose={() => setOpen(false)} {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: "Base Dialog",
  // isOpen: false
};
