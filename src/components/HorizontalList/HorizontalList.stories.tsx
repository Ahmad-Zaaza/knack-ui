import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Chip } from "../Chip";
import { Stack } from "../Stack";
import { Typography } from "../Typography";

import HorizontalList from "./HorizontalList";

export default {
  title: "Components/HorizontalList",
  component: HorizontalList,
  argTypes: {}
} as ComponentMeta<typeof HorizontalList>;

const Template: ComponentStory<typeof HorizontalList> = () => (
  
    <Stack style={{ height: 150 }} gap={4} className="p-4">
      <img
        className="object-cover h-full rounded-lg"
        style={{ width: 150 }}
        src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
        alt="A Duck"
      />
      <Stack style={{ maxWidth: 600 }} direction="column" gap={2}>
        <div>
          <Typography variant="body2" color="muted">
            Program Name
          </Typography>
          <Typography clamp={1} variant="body2" fontWeight="600">
            Internal Coaching program
          </Typography>
        </div>
        <div>
          <Typography className="mb-1" variant="body2" color="muted">
            Coaching topics
          </Typography>

          <HorizontalList spacing={2}>
            {[
              "Behaviour",
              "Behaviour1",
              "Behaviour2",
              "Behaviour23",
              "Behaviour45",
              "Behaviour3",
              "Behaviour4",
              "Behaviour5ewqewqdsa",
              "Behaviour6",
              "Behaviour7",
              "Behaviour8",
              "Behaviour9",
              "Behaviour0",
              "Behaviour-",
              "Behaviour=",
              "Communications"
            ].map((t) => (
              <Chip
                shape="rounded"
                size="small"
                variant="secondary"
                theme="info"
                key={t}
              >
                {t}
              </Chip>
            ))}
          </HorizontalList>
        </div>
      </Stack>
    </Stack>
  
);

export const Default = Template.bind({});
