
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Calendar from "./Calendar";

export default {
  title: "Components/Calendar",
  component: Calendar,
  argTypes: {}
} as ComponentMeta<typeof Calendar>;


const Template: ComponentStory<typeof Calendar> = (args) => <Calendar {...args} />;

export const Default = Template.bind({});
