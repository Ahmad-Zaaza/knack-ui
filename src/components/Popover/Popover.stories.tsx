import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useRef, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Popover } from ".";
import { Button, Input, MenuItem } from "..";

export default {
  title: "Components/Popover",
  component: Popover,
  argTypes: {}
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (_) => {
  const parentRef = useRef<HTMLButtonElement | null>(null);

  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
      <Input />
      <Button
        onClick={() => {
          if (!open) {
            setOpen(true);
          }
        }}
        ref={parentRef}
      >
        Click me
      </Button>
      <Popover
        position={() => ({
            top: 0,
            left: 0
          })}
        animationType="fade-up"
        isOpen={open}
        onClose={() => setOpen(false)}
        parentRef={parentRef}
      >
        <MenuItem kind="ghost">Go to home</MenuItem>
        <MenuItem kind="ghost">Go to home</MenuItem>
        <MenuItem kind="ghost">Go to home</MenuItem>
      </Popover>
    </BrowserRouter>
  );
};

export const Default = Template.bind({});