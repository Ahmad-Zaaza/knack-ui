import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { Button } from "../..";

import ConfirmationDialog from "./ConfirmationDialog";

export default {
  title: "Components/ConfirmationDialog",
  component: ConfirmationDialog,
  argTypes: {
    isOpen: {
      control: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof ConfirmationDialog>;

const Template: ComponentStory<typeof ConfirmationDialog> = ({ ...args }) => {
  const [open, setOpen] = useState(args.isOpen);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <ConfirmationDialog
        disableFocusLock
        {...args}
        isOpen={open}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export const Default = Template.bind({});
