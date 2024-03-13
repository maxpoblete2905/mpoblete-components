import { Meta, StoryObj } from "@storybook/react";
import { Label } from "../components/label/Label";

const meta = {
  title: "Component/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      control: "select",
    },
    text: { control: "select" },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "basic",
    text: "medium",
  },
};

export const AllCaps: Story = {
  args: {
    label: "All Caps Label",
    text: "medium",
    allCaps: true,
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary label",
    text: "medium",
    color: "secondary",
  },
};

export const CustomColor: Story = {
  args: {
    label: "Custom label",
    text: "medium",
  },
};

export const BackgraundColor: Story = {
  args: {
    label: "back groud color",
    text: "medium",
  },
};
