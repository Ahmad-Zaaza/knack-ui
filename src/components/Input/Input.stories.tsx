import { Story, Meta } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY
} from "@storybook/addon-docs";
import Input, { IInputProps } from "./Input";
import { Stack } from "../Stack";
import { Box } from "../Box";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component: "Basic input component"
      },
      subtitle: "Sibtitle",
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      )
    }
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      defaultValue: "check"
    },
    error: { control: { type: "text" }, description: "Error state" }
  }
} as Meta<IInputProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<IInputProps> = (args) => <Input {...args} />;
const OTPTemplate: Story<IInputProps> = (args) => (
  <Box className="container max-w-lg p-4 mx-auto rounded-2xl">
    <Stack gap={2}>
      {Array.from(new Array(4).keys()).map((c) => (
        <Input
          variant="filled"
          key={c}
          max={9}
          min={0}
          maxLength={1}
          inputClassName="min-w-0  whitespace-nowrap font-bold text-center"
          className="flex-1 p-0 bg-gray-100 whitespace-nowrap"
          {...args}
        />
      ))}
    </Stack>
  </Box>
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Basic = Template.bind({});
export const XSmall = Template.bind({});
XSmall.args = {
  size: "small"
};
export const Small = Template.bind({});
Small.args = {
  size: "small"
};


export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  value: "Disabled Input"
};
export const WithErrorState = Template.bind({});
WithErrorState.args = {
  error: "Error message"
};
export const OTPInput = OTPTemplate.bind({});
// OTPInput.args = {
//   className: "flex-1 p-0 bg-gray-100 whitespace-nowrap",
//   inputClassName: "min-w-0  whitespace-nowrap font-bold text-center"
// };
export const InputWithPrefix = Template.bind({});
InputWithPrefix.args = {
  value: "Input With prefix",
  inputPrefix: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  )
};
export const InputWithSuffix = Template.bind({});
InputWithSuffix.args = {
  value: "Input With prefix",
  inputSuffix: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  )
};
