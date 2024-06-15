import { Meta, StoryObj } from "@storybook/react";
import { CustomButton } from "@CustomButton/components";
import { CustomButtonProps } from "@CustomButton/interfaces";
import { userEvent, within } from "@storybook/test";
import { action } from "@storybook/addon-actions"; // Importa la función action

const meta: Meta<CustomButtonProps> = {
  title: "Component/Buttons/Button",
  component: CustomButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // Define tus argumentos aquí
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
};

export default meta;

type Story = StoryObj<typeof CustomButton>;

const simulateClick = async (element: HTMLElement) => {
  await userEvent.click(element);
};

export const Default: Story = {
  args: {
    label: "Button",
    onClick: action("Se ejecuta función anónima"),
  },
  play: async ({ canvasElement }) => {
    const buttonElement = within(canvasElement).getByTestId("custom-button");
    await simulateClick(buttonElement);
    await userEvent.hover(buttonElement);
  },
};

export const Custom: Story = {
  args: {
    label: "Custom Button",
    capitalized: true,
    icon: "FcEditImage",
    theme: "secondary",
    onClick: action("Se ejecuta función anónima"),
  },
  play: async ({ canvasElement }) => {
    const buttonElement = within(canvasElement).getByTestId("custom-button");
    await simulateClick(buttonElement);
    await userEvent.hover(buttonElement);
  },
};

export const Icon: Story = {
  args: {
    icon: "FcDownload",
    theme: "info",
    onClick: action("Se ejecuta función anónima"),
    size: "small",
  },
  play: async ({ canvasElement }) => {
    const buttonElement = within(canvasElement).getByTestId("custom-button");
    await simulateClick(buttonElement);
    await userEvent.hover(buttonElement);
  },
};

export const Delete: Story = {
  args: {
    label: "delete",
    icon: "FcDeleteDatabase",
    theme: "danger",
    onClick: action("Se ejecuta función anónima"),
    capitalized: true,
  },
  play: async ({ canvasElement }) => {
    const buttonElement = within(canvasElement).getByTestId("custom-button");
    await simulateClick(buttonElement);
    await userEvent.hover(buttonElement);
  },
};

export const Create: Story = {
  args: {
    label: "create",
    icon: "FcPlus",
    theme: "success",
    onClick: action("Se ejecuta función anónima"),
    capitalized: true,
  },
  play: async ({ canvasElement }) => {
    const buttonElement = within(canvasElement).getByTestId("custom-button");
    await simulateClick(buttonElement);
    await userEvent.hover(buttonElement);
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "small",
    theme: "warning",
    onClick: action("Se ejecuta función anónima"),
  },
  play: async ({ canvasElement }) => {
    const buttonElement = within(canvasElement).getByTestId("custom-button");
    await simulateClick(buttonElement);
    await userEvent.hover(buttonElement);
  },
};
