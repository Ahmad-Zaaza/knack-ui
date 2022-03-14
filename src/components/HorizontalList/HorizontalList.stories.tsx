import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Chip } from "../Chip";

import HorizontalList from "./HorizontalList";

export default {
  title: "Components/HorizontalList",
  component: HorizontalList,
  argTypes: {}
} as ComponentMeta<typeof HorizontalList>;

const Template: ComponentStory<typeof HorizontalList> = (args) => (
  <HorizontalList gap={2} {...args}>
    <Chip>Long name here</Chip>
    <Chip>Long name here</Chip>
    <Chip>Long name here</Chip>
    <Chip>Long name here</Chip>
    <Chip>Long name here</Chip>
    <Chip>Long name here</Chip>
    <Chip>Long name here</Chip>
    <Chip>Long name here</Chip>
    <Chip>Long name here</Chip>
    <Chip>Long name here</Chip>
    <Chip>Long name here</Chip>
    <Chip>Long name here</Chip>
    <Chip>Long name here</Chip>
    <Chip>Long name here</Chip>
  </HorizontalList>
);

export const Default = Template.bind({});
