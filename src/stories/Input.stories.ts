// InputComponent.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import {
  CustomInput,
  InputComponentProps,
} from "../components/input/Input.component";
import { ChangeEvent } from "react";

const meta: Meta<InputComponentProps> = {
  title: "Component/Input",
  component: CustomInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    theme: { control: "select" },
    isneon: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const InputBasic: Story = {
  args: {
    id: "username",
    isneon: false,
    label: "Username",
    type: "text",
    value: "test",
    handleChange: (value: ChangeEvent<HTMLInputElement>) =>
      console.log(`Input value: ${value}`),
  },
};
