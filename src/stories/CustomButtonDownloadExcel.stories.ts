import { Meta, StoryObj } from "@storybook/react";
import {CustomButtonDownloadExcel}  from "@components/index"; // Asegúrate de importar el componente correcto
import { records } from '../mock/data';
import { CustomButtonProps } from "@components/CustomButton/interfaces";

const meta: Meta<CustomButtonProps> = {
  title: "Component/Buttons/ButonDownloadExcel",
  component: CustomButtonDownloadExcel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto que se muestra en el botón',
      table: {
        type: { summary: 'string' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Función a ejecutar cuando se hace clic en el botón',
      table: {
        type: { summary: '() => void' },
      },
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Tipo del botón',
      table: {
        type: { summary: 'button | submit | reset' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Si el botón está deshabilitado',
      table: {
        type: { summary: 'boolean' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del botón',
      table: {
        type: { summary: 'small | medium | large' },
      },
    },
    color: {
      control: 'select',
      description: 'Color del botón',
      table: {
        type: { summary: 'default | primary | secondary | danger' },
      },
    },
    icon: {
      control: 'select',
      description: 'Elemento de icono para el botón'
    },
    borderRedius: {
      control: 'select',
      description: 'Elemento de icono para el botón'
    },
    data: {
      control: {
        disable: true, // Deshabilita el control en el Storybook
      },
      description: "Datos a exportar en el archivo Excel",
      table: {
        type: { summary: "DataItem[]" },
      },
    },
    header: {
      control: {
        disable: true, // Deshabilita el control en el Storybook
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
    label: 'Export to Excel',
    data: records,
    onClick: () => {
        alert("se ejecuta funcion anonima");
    },
    type: "button",
    disabled: false,
    size: "medium", // Puedes cambiar el tamaño predeterminado aquí
    color: "default", // Puedes cambiar el color predeterminado aquí
    icon: "arrowLeft", // Puedes añadir un icono aquí si es necesario
  },
};
