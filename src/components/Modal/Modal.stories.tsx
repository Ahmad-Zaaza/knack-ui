import { StoryFn, Meta } from "@storybook/react";
import { useState } from "@storybook/addons";
import { Stack } from "../Stack";
import { Button } from "../Button";
import { Modal } from ".";
import { Box } from "../Box";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {}
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <div>
        <Modal
          width="clamp(550px, 70vw, 750px)"
          {...args}
          isOpen={open}
          onClose={() => setOpen(false)}
        >
          <Box h="100%" paper>
            <div style={{ height: 400 }}>123</div>

            <Stack gap={2}>
              <Button>OK</Button>
              <Button>Cancel</Button>
            </Stack>
          </Box>
        </Modal>
      </div>
    </div>
  );
};
export const Default = Template.bind({});
export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: { breakpointThreshold: "tabletAndUp" }
};


