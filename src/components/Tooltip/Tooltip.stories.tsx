import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Tooltip } from ".";
import ThemeProvider from "../../theme/ThemeProvider";
import { Button } from "../Button";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {}
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (_) => (
  <BrowserRouter>
    <ThemeProvider>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "500px",
          alignItems: "center"
        }}
      >
        <Button>
          Hi
          <Tooltip />
        </Button>
      </div>
    </ThemeProvider>
  </BrowserRouter>
);

export const Default = Template.bind({});
