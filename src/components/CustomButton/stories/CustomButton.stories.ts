import { Meta, StoryObj } from "@storybook/react";
import { CustomButton } from "../components";
import { CustomButtonProps } from "../interfaces";
import { userEvent, within } from "@storybook/test";
import { action } from "@storybook/addon-actions";
import { columns, records } from "@mock/data";

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
      description: "Text displayed on the button",
      defaultValue: "Button", // Default value
      table: {
        type: { summary: "string" },
      },
    },
    onClick: {
      action: "clicked",
      description: "Function to execute when the button is clicked",
      table: {
        type: { summary: "() => void" },
      },
    },
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
      description: "Type of the button",
      table: {
        type: { summary: "button | submit | reset" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
      table: {
        type: { summary: "boolean" },
      },
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Size of the button",
      table: {
        type: { summary: "small | medium | large" },
      },
    },
    theme: {
      control: "select",
      description: "Color of the button",
      table: {
        type: { summary: "default | primary | secondary | danger" },
      },
    },
    icon: {
      control: "select",
      description: "Icon element for the button",
    },
    borderRadius: {
      control: "select",
      description:
        "Border radius of the button. Allows selecting the border style for the button.",
    },
    textUtilities: {
      control: {
        type: "radio",
        options: ["capitalize", "lowercase", "uppercase"],
      },
      description: "Text formatting utility",
      table: {
        type: { summary: "capitalize | lowercase | uppercase" },
      },
    },
    downloadExcel: {
      control: {
        fileName: {
          type: "string",
          defaultValue: "Name_file",
        },
        active: {
          type: "boolean",
          defaultValue: true,
        },
        data: {
          type: "object",
          defaultValue: records,
        },
        columns: {
          type: "object",
          defaultValue: columns,
        },
      },
      description: "Configuration for downloading data in Excel format",
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
      columns: columns,
    },
  },
};
