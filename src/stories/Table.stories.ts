import { Meta, StoryObj } from "@storybook/react";
import {
  TableComponent,
  TableProps,
} from "../components/table/Table.component";

function generateDatesBetweenYears(startYear: number, endYear: number): string {
  let dates = "";

  for (let year = startYear; year <= endYear; year++) {
    const randomMonth = Math.floor(Math.random() * 12); // Genera un número aleatorio entre 0 y 11
    const randomDay = Math.floor(Math.random() * 28) + 1; // Genera un número aleatorio entre 1 y 28

    const randomDate = new Date(Date.UTC(year, randomMonth, randomDay));
    dates = randomDate.toISOString();
  }

  return dates;
}

const sampleData = [];

// Nombres y apellidos simulados
const nombres = ["Juan", "María", "Pedro", "Ana", "Carlos", "esteban"];
const apellidos = [
  "poblete",
  "Pérez",
  "Gómez",
  "Martínez",
  "López",
  "Sánchez",
  "Romero",
];

// Crear 100 registros simulados
for (let i = 0; i < 100; i++) {
  const nombreIndex = Math.floor(Math.random() * nombres.length);
  const apellidoIndex = Math.floor(Math.random() * apellidos.length);
  const nombre = nombres[nombreIndex];
  const apellido = apellidos[apellidoIndex];
  const email = `${nombre.toLowerCase()}${apellido.toLowerCase()}${
    i + 1
  }@example.com`;
  const id = i + 1;
  const creationDate = generateDatesBetweenYears(2022, 2024);

  sampleData.push({ id, nombre, apellido, email, creationDate });
}

const meta: Meta<TableProps> = {
  title: "Component/Mantenedor",
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

export const Basice: Story = {
  args: {
    data: sampleData,
  },
};
