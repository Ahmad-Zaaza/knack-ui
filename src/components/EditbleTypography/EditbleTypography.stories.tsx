import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import ThemeProvider from "../../theme/ThemeProvider";

import EditableTypography from "./EditbleTypography";

export default {
  title: "Components/EditableTypography",
  component: EditableTypography,
  argTypes: {
    showInput: {
      control: "boolean",
      defaultValue: false
    }
  }
} as ComponentMeta<typeof EditableTypography>;

const Template: ComponentStory<typeof EditableTypography> = ({
  showInput,
  ..._
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("You can edit me! ");
  return (
    <ThemeProvider mode='light'>
      <EditableTypography
        showInput={open || showInput}
        inputProps={{
          size: "small",
          value,
          onChange: (e) => setValue(e.target.value)
        }}
        onToggleEdit={() => {
          setOpen(!open);
        }}
        onSubmit={() => {
          setOpen(!open);
        }}
      >
        {value}
      </EditableTypography>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
