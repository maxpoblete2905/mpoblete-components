import { Meta, StoryObj } from "@storybook/react";
import { ModalProps, Modal } from "../components/CustomModal/CustomModal";

const meta: Meta<ModalProps> = {
  title: "Component/Modal/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  }, 
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Indica si el modal está abierto",
      table: {
        type: { summary: "boolean" },
      },
    },
    title: {
      control: "text",
      description: "Título del modal",
      table: {
        type: { summary: "string" },
      },
    },
    onClose: {
      action: "onClose",
      description: "Función que se ejecuta al cerrar el modal",
      table: {
        type: { summary: "function" },
      },
    },
    onSubmit: {
      action: "onSubmit",
      description: "Función que se ejecuta al enviar el formulario",
      table: {
        type: { summary: "function" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<ModalProps>;

export const DefaultModal: Story = {
  args: {
    isOpen: true,
    title: "Modal Title",
    onClose: () => {
      alert("Close function executed");
    },
    onSubmit: (formData) => {
      alert(`Form submitted with data: Name: ${formData.name}, Email: ${formData.email}`);
    },
  },
};
