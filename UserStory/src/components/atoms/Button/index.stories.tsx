import { Meta, StoryObj } from "@storybook/react";
import Button from ".";
import { ArrowDownward } from "@mui/icons-material";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Example: Story = {
  args: {
    text: "Button",
  },
};

export const ExampleWithIcon: Story = {
  args: {
    text: "Button",
    endIcon: <ArrowDownward />,
  },
};
