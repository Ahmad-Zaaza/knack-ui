import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState, useRef } from "@storybook/addons";
import { BrowserRouter } from "react-router-dom";
import { Popover } from ".";

import { Button } from "../Button";
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
      <Stack h="120vh" justifyContent="space-between">
        {/* <Input /> */}
        <Button
          onClick={() => {
            if (!open) {
              setOpen(true);
            }
          }}
          style={{ marginTop: 300 }}
          ref={parentRef}
        >
          Click me
        </Button>
      </Stack>
      <Popover
        isOpen={open}
        offset={{ bottom: 10, left: 0 }}
        onClose={() => setOpen(false)}
        parentRef={parentRef}
      >
        <Stack br="medium" elevation={4} paper p={4}>
          <div>Go to home</div>
          <div>Go to home</div>
          <div>Go to home</div>
          <Button>Hello</Button>
        </Stack>
      </Popover>
      <Button>Fake Button</Button>
    </BrowserRouter>
  );
};

export const Default = Template.bind({});
