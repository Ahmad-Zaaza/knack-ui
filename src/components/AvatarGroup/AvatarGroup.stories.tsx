import { StoryFn, Meta } from "@storybook/react";
import { useState, useEffect } from "@storybook/addons";

import { Stack } from "../Stack";
import AvatarGroup from "./AvatarGroup";
import { Avatar } from "../Avatar";

export default {
  title: "Components/AvatarGroup",
  component: AvatarGroup,
  argTypes: {
    max: {
      control: "number"
    }
  }
} as Meta<typeof AvatarGroup>;

const Template: StoryFn<typeof AvatarGroup> = ({ max, size, shape }) => {
  const [localMax, setMax] = useState<number | null>(null);

  useEffect(() => {
    if (max) {
      setMax(max);
    }
  }, [max]);
  return (
    <Stack style={{ background: "black" }} justifyContent="flex-start">
      <AvatarGroup
        size={size}
        shape={shape}
        onRemainingClick={() => setMax(4)}
        max={localMax}
      >
        <Avatar
          image="https://cdn-icons-png.flaticon.com/512/147/147140.png"
          alt="dsa"
        />
        <Avatar
          // image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRna0Yn_AMMEcnVGFuHNG0-UENJAFjsGKO8RQ&usqp=CAU"
          alt="dsa"
        />
        <Avatar
          image="https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/02/Female_Portrait_1296x728-header-1296x729.jpg?w=1155&h=2268"
          alt="dsa"
        />
        <Avatar
          image="https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/02/Female_Portrait_1296x728-header-1296x729.jpg?w=1155&h=2268"
          alt="dsa"
        />
      </AvatarGroup>
    </Stack>
  );
};

export const Default = Template.bind({});

export const ShowLimitedItems = Template.bind({});

ShowLimitedItems.args = {
  max: 2
};
