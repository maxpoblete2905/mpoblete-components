import { Meta, StoryObj } from "@storybook/react";
import { CustomButton } from "../components";
import { CustomButtonProps } from "../interfaces";
import { userEvent, within } from "@storybook/test";
import { action } from "@storybook/addon-actions";
import { records } from "@mock/data";

const meta: Meta<CustomButtonProps> = {
  title: "Component/Buttons/Button",
  component: CustomButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
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
      description:
        "Radio de borde del botón. Permite seleccionar el estilo de borde para el botón.",
    },
    textUtilities: {
      control: {
        type: "radio",
        options: ["capitalize", "lowercase", "uppercase"],
      },
      description: "Utilidad de formato de texto",
      table: {
        type: { summary: "capitalize | lowercase | uppercase" },
      },
    },
    downloadExcel: {
      control: {
        fileName: {
          type: "string",
          defaultValue: "name file excel dounload",
        },
        active: {
          type: "boolean",
          defaultValue: true,
        },
        data: {
          type: "object",
          defaultValue: [
            {
              id: "0",
              nombre: "Juan",
              apellido: "Perez",
              email: "juan@example.com",
              creationDate: new Date().toISOString(),
            },
            {
              id: "1",
              nombre: "María",
              apellido: "García",
              email: "maria@example.com",
              creationDate: new Date(Date.now() - 86400000).toISOString(),
            },
          ],
        },
        columns: {
          type: "object",
          defaultValue: [
            { label: "ID", id: "id" },
            { label: "Nombre", id: "nombre" },
            { label: "Apellido", id: "apellido" },
            { label: "Email", id: "email" },
            { label: "Fecha de Creación", id: "creationDate" },
          ],
        },
      },
      description: "Configuración para la descarga de datos en formato Excel",
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
  },
};

export const Custom: Story = {
  args: {
    label: "Custom Button",
    textUtilities: "capitalize",
    icon: "FcEditImage",
    theme: "secondary",
    onClick: action("Se ejecuta función anónima"),
  },
  play: async ({ canvasElement }) => {
    const buttonElement = within(canvasElement).getByTestId("custom-button");
    await simulateClick(buttonElement);
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
  },
};

export const Delete: Story = {
  args: {
    label: "delete",
    icon: "FcDeleteDatabase",
    theme: "danger",
    onClick: action("Se ejecuta función anónima"),
    textUtilities: "capitalize",
  },
  play: async ({ canvasElement }) => {
    const buttonElement = within(canvasElement).getByTestId("custom-button");
    await simulateClick(buttonElement);
  },
};

export const Create: Story = {
  args: {
    label: "create",
    icon: "FcPlus",
    theme: "success",
    onClick: action("Se ejecuta función anónima"),
    textUtilities: "capitalize",
  },
  play: async ({ canvasElement }) => {
    const buttonElement = within(canvasElement).getByTestId("custom-button");
    await simulateClick(buttonElement);
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
  },
};

export const DownloadExcel: Story = {
  args: {
    icon: "FcInternal",
    label: "Download",
    theme: "default",
    textUtilities: "uppercase",
    downloadExcel: {
      fileName: "file_name",
      active: true,
      data: records,
      columns: [
        { label: "ID", id: "id" },
        { label: "Nombre", id: "nombre" },
        { label: "Apellido", id: "apellido" },
        { label: "Email", id: "email" },
        { label: "Fecha de Creación", id: "creationDate" },
      ],
    },
  },
};
