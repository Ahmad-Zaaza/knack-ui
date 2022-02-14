import { ComponentStory, ComponentMeta } from "@storybook/react";
// import { BaseDialog } from "../BaseDialog";

import ConfirmationDialog from "./ConfirmationDialog";

export default {
  title: "Components/ConfirmationDialog",
  component: ConfirmationDialog,
  argTypes: {},
  // subcomponents: { BaseDialog }
} as ComponentMeta<typeof ConfirmationDialog>;

const Template: ComponentStory<typeof ConfirmationDialog> = (args) => (
  <ConfirmationDialog {...args} />
);

export const Default = Template.bind({});
