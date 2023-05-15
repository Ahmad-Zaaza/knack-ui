import { StoryFn, Meta } from "@storybook/react";
import { Link, BrowserRouter } from "react-router-dom";

import Breadcrumbs from "./Breadcrumbs";

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {}
} as Meta<typeof Breadcrumbs>;

const Template: StoryFn<typeof Breadcrumbs> = ({
  children: _,
  ...args
}) => (
  <BrowserRouter>
    <Breadcrumbs {...args}>
      {[<Link key={1} to="/">Home</Link>, <Link key={2} to="/">Goals</Link>]}
    </Breadcrumbs>
  </BrowserRouter>
);

export const Default = Template.bind({});
