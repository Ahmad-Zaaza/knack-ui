import { ComponentStory, ComponentMeta } from "@storybook/react";

import Stack from "./Stack";

export default {
  title: "Components/Stack",
  component: Stack,
  argTypes: {}
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => <Stack {...args} />;

export const Default = Template.bind({});
Default.args = {
  direction: "column",
  gap: 6,
  children: (
    <>
      <p>first</p>
      <h1>second</h1>
      <div>third</div>
      <span>fourth</span>
    </>
  )
};
