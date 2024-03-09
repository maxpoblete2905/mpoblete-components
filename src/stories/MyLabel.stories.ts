import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

const meta = {
  title: "mi label",
  component: MyLabel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "radio",
    },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "basic",
    size: "normal",
  },
};

export const AllCaps: Story = {
  args: {
    label: "All Caps Label",
    size: "normal",
    allCaps: true,
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary label",
    size: "normal",
    color: "text-secondary",
  },
};

export const CustomColor: Story = {
  args: {
    label: "Custom label",
    size: "normal",
    fontColor: "#ae23d8",
  },
};

export const BackgraundColor: Story = {
  args: {
    label: "back groud color",
    backgroundColor: "black",
    size: "normal",
    fontColor: "#ffffff",
  },
};
