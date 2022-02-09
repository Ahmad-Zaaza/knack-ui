
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Radio from "./Radio";

export default {
  title: "Components/Radio",
  component: Radio,
  argTypes: {}
} as ComponentMeta<typeof Radio>;


const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
