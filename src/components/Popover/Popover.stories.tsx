import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Popover } from ".";
import { Button, MenuItem } from "..";
import useGetBoundingClientRect from "../../utils/useGetBoundingClientRect";

export default {
  title: "Components/Popover",
  component: Popover,
  argTypes: {}
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (_) => {
  const [parentRect, ref] = useGetBoundingClientRect<HTMLButtonElement>();
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
      <Button onClick={() => setOpen(!open)} ref={ref}>
        Click me
      </Button>
      <Popover
        animationType="fade-up"
        isOpen={open}
        onClose={() => setOpen(false)}
        parentRect={parentRect}
      >
        <MenuItem>Go to home</MenuItem>
      </Popover>
    </BrowserRouter>
  );
};

export const Default = Template.bind({});
