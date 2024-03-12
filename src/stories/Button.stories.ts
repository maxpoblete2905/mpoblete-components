// ButtonComponent.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import {
  ButtonComponent,
  ButtonComponentProps,
} from "../components/button/Button.component";

const meta: Meta<ButtonComponentProps> = {
  title: "Component/Button",
  component: ButtonComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    theme: {
      control: "select",
    },
    size: { control: "radio" },
    AllCaps: { control: "boolean" },
    customTextColor: { control: "color" },
    label: { control: "text" },
  },
} satisfies Meta<typeof ButtonComponent>;

export default meta;

type Story = StoryObj<typeof ButtonComponent>;

export const ButonBasic: Story = {
  args: {
    onClickEvent: () => console.log("Button clicked"),
  },
};
