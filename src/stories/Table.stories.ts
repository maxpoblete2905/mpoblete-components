import { Meta, StoryObj } from "@storybook/react";
import {
  TableColumn,
  TableComponent,
  TableProps,
} from "../components/tabla/Table.component";
import { TableData } from "../apps/Mantainer/Mantainer";
import { registros } from "../mock/data";

const columns: TableColumn[] = [
  { key: "nombre", label: "Nombre" },
  { key: "apellido", label: "Apellido" },
  { key: "email", label: "Email" },
  { key: "creationDate", label: "Ingreso" },
];


const meta: Meta<TableProps<TableData>> = {
  title: "component/Table",
  component: TableComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  // argTypes: {
  //   color: {
  //     control: "select",
  //   },
  //   text: { control: "select" },
  // },
} satisfies Meta<typeof TableComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basices: Story = {
  args: {
    data: registros,
    selectedItemIds: [],
    columns: columns,
    handleCheckboxChange: function (id: string): void {
      console.log("data checked", id);
    },
    handleEditClick: function (row: TableData): void {
      console.log("edit ", row);
    },
    handleDeleteClick: function (id: string): void {
      console.log("delete", id);
    },
  },
};
