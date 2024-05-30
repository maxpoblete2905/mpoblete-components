// En un archivo llamado Modal.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import Modal, { ModalProps } from "@components/CustomModal/CustomModal";

const meta: Meta<ModalProps> = {
  title: "Component/Modal/modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Placeholder para el input",
      table: {
        type: { summary: "boolean" },
      },
    },
    title: {
      control: "select",
      description: "Placeholder para el input",
      table: {
        type: { summary: "string" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<ModalProps>;

export const DefaultInput3: Story = {
  args: {
    isOpen: true,
    title: "modal estatus ",
    onClose: () => {
      alert("se ejecuta funcion anonima");
    },
  },
};
