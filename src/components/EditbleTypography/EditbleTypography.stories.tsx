
import { ComponentStory, ComponentMeta } from "@storybook/react";

import EditableTypography from "./EditbleTypography";

export default {
  title: "Components/EditableTypography",
  component: EditableTypography,
  argTypes: {}
} as ComponentMeta<typeof EditableTypography>;


const Template: ComponentStory<typeof EditableTypography> = (args) => <EditableTypography {...args} />;

export const Default = Template.bind({});
