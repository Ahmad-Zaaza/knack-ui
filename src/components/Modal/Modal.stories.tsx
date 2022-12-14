import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "@storybook/addons";
import styled from "styled-components";
import { Stack } from "../Stack";
import { Button } from "../Button";
import { Modal } from ".";
import { BREAKPOINTS } from "../../theme/builtInTokens";
import { Box } from "../Box";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {}
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <div>
        <StyledModal
          width="clamp(550px, 70vw, 750px)"
          {...args}
          isOpen={open}
          onClose={() => setOpen(false)}
        >
          <Box h='100%' paper>
            <div style={{ height: 400 }}>123</div>

            <Stack gap={2}>
              <Button>OK</Button>
              <Button>Cancel</Button>
            </Stack>
          </Box>
        </StyledModal>
      </div>
    </div>
  );
};
export const Default = Template.bind({});
export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true
};

const StyledModal = styled(Modal)`
  @media (max-width: ${BREAKPOINTS.tabletMin}px) {
    height: 100%;
    width: 100%;
    padding: 0;
    margin-top: 0;
  }
`;
