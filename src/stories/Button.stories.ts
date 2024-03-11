// ButtonComponent.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import {
  ButtonComponent,
  ButtonComponentProps,
} from "../components/button/Button";

const meta: Meta<ButtonComponentProps> = {
  title: "Component/Button",
  component: ButtonComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof ButtonComponent>;

export const ButonBasic: Story = {
  args: { onClickTest: () => console.log("Button clicked") },
};
