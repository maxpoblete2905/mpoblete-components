import { Meta, StoryObj } from "@storybook/react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  MantainerComponent,
  MantainerProps,
} from "../components/table/Mantainer";
import { TableColumn } from "../components/table/Table.component";

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

const columns: TableColumn[] = [
  { key: "nombre", label: "Nombre", width: "20px" },
  { key: "apellido", label: "Apellido", width: "20px" },
  { key: "email", label: "Email", width: "50px" },
  { key: "creationDate", label: "Ingreso", width: "120px" },
];

// Nombres y apellidos simulados
const nombres = [
  "Juan",
  "María",
  "Pedro",
  "Ana",
  "Carlos",
  "Esteban",
  "Laura",
  "Diego",
  "Sofía",
  "Luis",
  "Carmen",
  "Javier",
  "Rosa",
  "Miguel",
  "Elena",
  "Manuel",
  "Isabel",
  "Fernando",
  "Lucía",
  "Antonio",
];

const apellidos = [
  "Poblete",
  "Pérez",
  "Gómez",
  "Martínez",
  "López",
  "Sánchez",
  "Romero",
  "García",
  "Fernández",
  "González",
  "Rodríguez",
  "Navarro",
  "Jiménez",
  "Díaz",
  "Torres",
  "Álvarez",
  "Ruiz",
  "Martín",
  "Serrano",
  "Molina",
];

// Crear 100 registros simulados
for (let i = 0; i < 150; i++) {
  const nombreIndex = Math.floor(Math.random() * nombres.length);
  const apellidoIndex = Math.floor(Math.random() * apellidos.length);
  const nombre = nombres[nombreIndex];
  const apellido = apellidos[apellidoIndex];
  const email = `${nombre.toLowerCase()}${apellido.toLowerCase()}${
    i + 1
  }@example.com`;
  const id = String(i + 1);
  const creationDate = generateDatesBetweenYears(2022, 2023);

  sampleData.push({ id, nombre, apellido, email, creationDate });
}

const meta: Meta<MantainerProps> = {
  title: "Apps/Mantenedor",
  component: MantainerComponent,
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
} satisfies Meta<typeof MantainerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basice: Story = {
  args: {
    data: sampleData,
    columns: columns,
  },
};
