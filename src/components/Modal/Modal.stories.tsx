import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Stack } from "../Stack";
import { Button } from "../Button";
import { Modal } from ".";
import ThemeProvider from "../../theme/ThemeProvider";
import { BREAKPOINTS } from "../../styles/constants";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {}
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <div>
        <StyledModal
          width="clamp(550px, 70vw, 750px)"
          {...args}
          isOpen={open}
          onClose={() => setOpen(false)}
        >
          <div
            style={
              {
                // maxBlockSize: "85vh",
                // gridTemplateRows: "1fr auto",
                // display: "grid",
                // borderRadius: 12
              }
            }
          >
            <div style={{ height: 400 }}>123</div>

            <Stack gap={2}>
              <Button>OK</Button>
              <Button>Cancel</Button>
            </Stack>
          </div>
        </StyledModal>
      </div>
    </ThemeProvider>
  );
};
export const Default = Template.bind({});

const StyledModal = styled(Modal)`
  @media (max-width: ${BREAKPOINTS.tabletMin}px) {
    height: 100%;
    width: 100%;
    padding: 0;
    margin-top: 0;
  }
`;
