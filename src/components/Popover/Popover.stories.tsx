import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useRef, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Popover } from ".";
import { Button, Box, Stack } from "..";
import ThemeProvider from "../../theme/ThemeProvider";

export default {
  title: "Components/Popover",
  component: Popover,
  argTypes: {}
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (_) => {
  const parentRef = useRef<HTMLButtonElement | null>(null);

  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider mode='light'>
      <BrowserRouter>
        <Stack justifyContent="space-between">
          {/* <Input /> */}
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
          onClose={() => setOpen(false)}
          parentRef={parentRef}
        >
          <Box p={4} style={{ backgroundColor: "#fff" }}>
            <div>Go to home</div>
            <div>Go to home</div>
            <div>Go to home</div>
            <Button>Hello</Button>
          </Box>
        </Popover>
        <Button>Fake Button</Button>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
