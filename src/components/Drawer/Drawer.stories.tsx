import { StoryFn, Meta } from "@storybook/react";
import { useState } from "react";
import { Button } from "../Button";

import Drawer from "./Drawer";

export default {
  title: "Components/Drawer",
  component: Drawer,
  argTypes: {
    isOpen: {
      control: {
        disable: true
      }
    }
  }
} as Meta<typeof Drawer>;

const Template: StoryFn<typeof Drawer> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <div style={{ height: "110vh" }}>
        <Drawer {...args} isOpen={open} onClose={() => setOpen(false)}>
          <div style={{ height: "100%", backgroundColor: "#fff", width: 300 }}>
            Hello
          </div>
        </Drawer>
      </div>
    </>
  );
};
export const Default = Template.bind({});
