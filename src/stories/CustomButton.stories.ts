import { CustomButton } from "@components/customButton";
import { CustomButtonProps } from "@components/customButton/interfaces";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<CustomButtonProps> = {
    title: "Component/CustomButton/Button",
    component: CustomButton,
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
    },
  } satisfies Meta<typeof CustomButton>;
  

export default meta;

type Story = StoryObj<typeof CustomButton>;

export const ButtonCreate: Story = {
    args: {
      
        label: 'Create',
        onClick: () => {
            alert("se ejecuta funcion anonima");
        },
        type: "button",
        disabled: false,
        size: "medium", // Puedes cambiar el tamaño predeterminado aquí
        color: "default", // Puedes cambiar el color predeterminado aquí
        icon: "FcEndCall", // Puedes añadir un icono aquí si es necesario
    },
};
