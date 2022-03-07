import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useRef, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Popover } from ".";
import { Button, Input, MenuItem } from "..";
import { Stack } from "../Stack";

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
    <Stack justifyContent='space-between'>

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
        animationType="fade-up"
        isOpen={open}
        onClose={() => setOpen(false)}
        parentRef={parentRef}
      >
        <MenuItem kind="ghost">Go to home</MenuItem>
        <MenuItem kind="ghost">Go to home</MenuItem>
        <MenuItem kind="ghost">Go to home</MenuItem>
      </Popover>
          </Stack>
    </BrowserRouter>
  );
};

export const Default = Template.bind({});
