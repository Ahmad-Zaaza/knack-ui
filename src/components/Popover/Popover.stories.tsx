import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useRef, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Popover } from ".";
import { Button, Input } from "..";
import ThemeProvider from "../../theme/ThemeProvider";
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
    <ThemeProvider>
      <BrowserRouter>
        <Stack
          justifyContent="space-between"
          // className="flex-row-reverse"
        >
          <Input />
          <Button
            onClick={() => {
              if (!open) {
                setOpen(true);
              }
            }}
            className="mt-[300px]"
            ref={parentRef}
          >
            Click me
          </Button>
        </Stack>
        <Popover
          animationType="fade-up"
          isOpen={open}
          offset={{ bottom: 10, left: 0 }}
          popoverProps={{
            className: "w-64"
          }}
          onClose={() => setOpen(false)}
          parentRef={parentRef}
        >
          <div>Go to home</div>
          <div>Go to home</div>
          <div>Go to home</div>
        </Popover>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
