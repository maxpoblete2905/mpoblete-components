import { Meta, StoryObj } from "@storybook/react";
import { DynamicForm, DynamicFormProps } from "../components/form/Form";

// En "Componente/Input.stories.tsx"
const meta: Meta<DynamicFormProps> = {
  title: "Component/Form",
  component: DynamicForm,
  argTypes: {
    fields: {},
    onSubmit: {},
    color: { control: "select" },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basict: Story = {
  args: {
    color: "primary",
    fields: [
      { id: "username", label: "Username", type: "text" },
      { id: "email", label: "Email", type: "email" },
      { id: "address", label: "Address", type: "text" },
    ],
    onSubmit: (formData: { [key: string]: string }) => {
      console.log("Form submitted with data:", formData);
      // Realizar acciones adicionales según tus necesidades
    },
    title: "FORMURARIO",
    subTitle: "registro y mantencion de usuarios ",
  },
};
