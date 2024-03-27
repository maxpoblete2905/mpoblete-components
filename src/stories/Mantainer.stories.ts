import { Meta, StoryObj } from "@storybook/react";

import {
  MantainerComponent,
  MantainerProps,
} from "../apps/Mantainer/Mantainer";
import { TableColumn } from "../components/tabla/Table.component";
import { registros } from "../mock/data";

const columns: TableColumn[] = [
  { key: "nombre", label: "Nombre", width: "20px" },
  { key: "apellido", label: "Apellido", width: "20px" },
  { key: "email", label: "Email", width: "50px" },
  { key: "creationDate", label: "Ingreso", width: "120px" },
];

const meta: Meta<MantainerProps> = {
  title: "Apps/Mantenedor",
  component: MantainerComponent,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
  },
  // argTypes: {
  //   color: {
  //     control: "select",
  //   },
  //   text: { control: "select" },
  // },
} satisfies Meta<typeof MantainerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Mantainer: Story = {
  args: {
    data: registros,
    columns: columns,
    emitOnSubmitCreate: (data): boolean => {
      console.log("create", data);
      if (data) {
        return true;
      }
      return false;
    },
    emitOnSubmitDelete: (data) => {
      console.log("delete", data);
    },
    emitOnSubmitEdit: (data) => {
      console.log("delete", data);
    },
  },
};
