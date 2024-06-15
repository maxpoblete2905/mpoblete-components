import { Meta, StoryObj } from "@storybook/react";
import { CustomButton } from "@CustomButton/components";
import { CustomButtonProps } from "@CustomButton/interfaces";

const meta: Meta<CustomButtonProps> = {
  title: "Component/Buttons/Button",
  component: CustomButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: "text",
      description: "Texto que se muestra en el botón",
      defaultValue: "Button", // Valor por defecto
      table: {
        type: { summary: "string" },
      },
    },
    onClick: {
      action: "clicked",
      description: "Función a ejecutar cuando se hace clic en el botón",
      table: {
        type: { summary: "() => void" },
      },
    },
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
      description: "Tipo del botón",
      table: {
        type: { summary: "button | submit | reset" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Si el botón está deshabilitado",
      table: {
        type: { summary: "boolean" },
      },
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Tamaño del botón",
      table: {
        type: { summary: "small | medium | large" },
      },
    },
    theme: {
      control: "select",
      description: "Color del botón",
      table: {
        type: { summary: "default | primary | secondary | danger" },
      },
    },
    icon: {
      control: "select",
      description: "Elemento de icono para el botón",
    },
    borderRedius: {
      control: "select",
      description: "Elemento de icono para el botón.",
    },
    iconSize: {
      control: "select",
      description: "tamaño del icono",
    },
    data: {
      control: "array",
      description: "data que descargara en formato excel.",
      table: {
        disable: true, // Esto oculta el campo en la tabla de propiedades
      },
    },
    header: {
      control: "array",
      description: "header datos.",
      table: {
        disable: true, // Esto oculta el campo en la tabla de propiedades
      },
    },
    capitalized: {
      control: "boolean",
      description: "cambia label a mayusculas.",
    },
  },
} satisfies Meta<typeof CustomButton>;

export default meta;

type Story = StoryObj<typeof CustomButton>;

export const DefaultButton: Story = {
  args: {
    onClick: () => {
      alert("se ejecuta funcion anonima");
    },
  },
};

export const CustomButom: Story = {
  args: {
    label: "Custom Butom",
    capitalized: true,
    icon: "FcEditImage",
    theme: "secondary",
    onClick: () => {
      alert("se ejecuta funcion anonima");
    },
  },
};
