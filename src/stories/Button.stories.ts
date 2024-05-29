import { Meta, StoryObj } from "@storybook/react";
import { ButtonProps } from "../components/button/ButtonPros";
import CustomButton from '../components/button/CustomButton'

const meta: Meta<ButtonProps> = {
    title: "Component/Button",
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
    },
  } satisfies Meta<typeof CustomButton>;
  

export default meta;

type Story = StoryObj<typeof CustomButton>;

export const ButtonCreate: Story = {
    args: {
      
        label: 'Create',
        onClick: () => {
            console.log("se ejecuta funcion anonima");
        },
        type: "button",
        disabled: false
    },
};
