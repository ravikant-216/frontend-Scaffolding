import { type Meta, type StoryObj } from "@storybook/react";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import InputFieldField from ".";

const meta: Meta<typeof InputFieldField> = {
  component: InputFieldField,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["standard", "filled", "outlined"],
    },
    disabled: {
      control: "boolean",
    },
    onChange: {
      action: "onChange",
    },
  },
};
type Story = StoryObj<typeof InputFieldField>;

export const WithOutIcon: Story = {
  args: {
    variant: "outlined",
    label: "without",
  },
};

export const OneIconTextFiled: Story = {
  args: {
    startIcon: <LockIcon />,
    variant: "outlined",
    label: "one",
  },
};
export const DoubleIconTextFiled: Story = {
  args: {
    startIcon: <LockIcon />,
    endIcon: <VisibilityIcon />,
    label: "double",
  },
};

export default meta;
