import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "../Box";
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
  <Box
    style={{ height: 150 }}
    as={Stack}
    gap={4}
    className="p-4"
    variant="outlined"
  >
    <img
      className="object-cover h-full rounded-lg"
      style={{ width: 150 }}
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
      alt="A Duck"
    />
    <Stack direction="column" gap={2}>
      <div>
        <Typography variant="body2" color="muted">
          Program Name
        </Typography>
        <Typography clamp={1} variant="body2" fontWeight="semibold">
          Internal Coaching program
        </Typography>
      </div>
      <div>
        <Typography className="mb-1" variant="body2" color="muted">
          Coaching topics
        </Typography>

        <HorizontalList gap={2}>
          {[
            "Communications",
            "Behaviour",
            "Behaviour",
            "Behaviour",
            "Behaviour",
            "Behaviour",
            "Behaviour"
            // "Behaviour",
            // "Behaviour",
            // "Behaviour",
            // "Behaviour",
            // "Behaviour",
            // "Behaviour",
            // "Behaviour",
          ].map((t) => (
            <Chip shape="rounded" size="small" variant="primaryOutline" key={t}>
              {t}
            </Chip>
          ))}
        </HorizontalList>
      </div>
    </Stack>
  </Box>
);

export const Default = Template.bind({});
