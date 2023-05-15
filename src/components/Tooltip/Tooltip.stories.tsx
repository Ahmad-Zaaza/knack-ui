import { StoryFn, Meta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Tooltip } from ".";
import { Button } from "../Button";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {}
} as Meta<typeof Tooltip>;

const Template: StoryFn<typeof Tooltip> = ({ position }) => (
  <BrowserRouter>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "500px",
        alignItems: "center"
      }}
    >
      <Button
        tooltipProps={{
          text: "My informative text",
          position
        }}
      >
        I have a tooltip
      </Button>
    </div>
  </BrowserRouter>
);

export const Default = Template.bind({});
