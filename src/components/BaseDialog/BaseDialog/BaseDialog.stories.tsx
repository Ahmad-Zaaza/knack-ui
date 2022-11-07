import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { Button } from "../..";
import ThemeProvider from "../../../theme/ThemeProvider";
import { Box } from "../../Box";
import { Stack } from "../../Stack";

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
    <ThemeProvider>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <div style={{ height: "110vh" }}>
        <Dialog {...args} isOpen={open} onClose={() => setOpen(false)}>
          <Box paddingPreset="card">
            Dialog
            <Stack gap={2}>
              <Button>OK</Button>
              <Button>Cancel</Button>
            </Stack>
          </Box>
        </Dialog>
      </div>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
// Default.args = {
//   children: "Base Dialog"
// };
