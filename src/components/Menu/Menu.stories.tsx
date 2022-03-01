import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { MenuButton, MenuItem, MenuList } from "..";

import Menu from "./Menu";

export default {
  title: "Components/Menu",
  component: Menu,
  argTypes: {}
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => (
  <BrowserRouter>
    <Menu>
      <MenuButton {...args}>Open me</MenuButton>
      <MenuList>
        <MenuItem>Go to home</MenuItem>
      </MenuList>
    </Menu>
  </BrowserRouter>
);

export const Default = Template.bind({});
