import { Meta, StoryObj } from "@storybook/react";
import DashBoardTemplate from ".";
import AllStackHolder from "@/components/organism/AllStackHolders";

const meta: Meta<typeof DashBoardTemplate> = {
  component: DashBoardTemplate,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof DashBoardTemplate>;

export const Render: Story = {
  args: {
    children: <AllStackHolder />,
  },
};

export default meta;
