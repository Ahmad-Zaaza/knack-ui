import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Avatar, Stack } from "..";

import AvatarGroup from "./AvatarGroup";

export default {
  title: "Components/AvatarGroup",
  component: AvatarGroup,
  argTypes: {},
  subcomponents: { Avatar }
} as ComponentMeta<typeof AvatarGroup>;

const Template: ComponentStory<typeof AvatarGroup> = (args) => (
  <Stack justifyContent="flex-start">
    <AvatarGroup {...args}>
      <Avatar
        image="https://cdn-icons-png.flaticon.com/512/147/147140.png"
        text="dsa"
      />
      <Avatar
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRna0Yn_AMMEcnVGFuHNG0-UENJAFjsGKO8RQ&usqp=CAU"
        text="dsa"
      />
      <Avatar
        image="https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/02/Female_Portrait_1296x728-header-1296x729.jpg?w=1155&h=2268"
        text="dsa"
      />
    </AvatarGroup>
  </Stack>
);

export const Default = Template.bind({});
