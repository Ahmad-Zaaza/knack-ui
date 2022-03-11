import { ComponentStory, ComponentMeta } from "@storybook/react";
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
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <div style={{ height: "110vh" }}>
        <Drawer {...args} isOpen={open} onClose={() => setOpen(false)}>
          <div style={{ height: 300 }}>Hello</div>
        </Drawer>
      </div>
    </>
  );
};
export const Default = Template.bind({});
