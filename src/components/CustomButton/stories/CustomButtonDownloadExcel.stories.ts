import { Meta, StoryObj } from "@storybook/react";
import { records } from "@mock/index";
import { CustomButtonDownloadExcel } from "@CustomButton/components";
import { CustomButtonProps } from "@CustomButton/interfaces";

const meta: Meta<CustomButtonProps> = {
  title: "Component/Buttons/ButonDownloadExcel",
  component: CustomButtonDownloadExcel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: "text",
      description: "Texto que se muestra en el botón",
      table: {
        type: { summary: "string" },
      },
    },
    onClick: {
      action: "clicked",
      description: "Función a ejecutar cuando se hace clic en el botón",
      table: {
        disable: true, // Esto oculta el campo en la tabla de propiedades
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
      description: "Elemento de icono para el botón",
    },
    data: {
      control: "array",
      description: "data que descargara en formato excel.",
    },
    header: {
      control: {
        disable: true,
      },
      description: "Encabezado para el archivo Excel",
      table: {
        type: { summary: "string[]" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<CustomButtonProps>;

export const ButtonCreate: Story = {
  args: {
    label: "Export to Excel",
    type: "button",
    disabled: false,
    size: "medium",
    theme: "default",
    icon: "FcDataBackup",
    data: records,
    capitalized: false,
    iconSize: 22,
  },
};
