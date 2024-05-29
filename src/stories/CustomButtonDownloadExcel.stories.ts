import { Meta, StoryObj } from "@storybook/react";
import  CustomButtonDownloadExcel from "../components/CustomButton/CustomButtonDownloadExcel/CustomButtomDownloadExcel"; // Asegúrate de importar el componente correcto
import { CustomButtonProps } from "../components/CustomButton/CustomButtonDownloadExcel/CustomButtonDownloadExcelProps";
import { records } from '../mock/data';

const meta: Meta<CustomButtonProps> = {
  title: "Component/Buttons/ButonDownloadExcel",
  component: CustomButtonDownloadExcel,
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
  },
};
