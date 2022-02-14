import { ComponentStory, ComponentMeta } from "@storybook/react";

import ModalHead from "./ModalHead";

export default {
  title: "Components/ModalHead",
  component: ModalHead,
  argTypes: {}
} as ComponentMeta<typeof ModalHead>;

const Template: ComponentStory<typeof ModalHead> = (args) => (
  <ModalHead {...args} />
);

export const Default = Template.bind({});
Default.args = {
  content: "Modal Head",
  onClose: () => {}
};
