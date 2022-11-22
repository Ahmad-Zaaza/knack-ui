
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Notice from "./Notice";

export default {
  title: "Components/Notice",
  component: Notice,
  argTypes: {}
} as ComponentMeta<typeof Notice>;


const Template: ComponentStory<typeof Notice> = (args) => <Notice {...args} />;

export const Default = Template.bind({});
