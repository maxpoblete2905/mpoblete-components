// InputComponent.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import { InputComponent, InputComponentProps } from "../components/input/Input";

const meta: Meta<InputComponentProps> = {
  title: "Component/Input",
  component: InputComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const InputBasic: Story = {
  args: {
    id: "username",
    label: "Username",
    type: "text",
    value: "test",
    onChange: (value: unknown) => console.log(`Input value: ${value}`),
  },
};
