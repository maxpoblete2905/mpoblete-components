import { Meta, StoryObj } from "@storybook/react";
import {
  LoginForm,
  DynamicFormProps,
  LoginFormInput,
} from "../components/form/Form.component";
import "bootstrap/dist/css/bootstrap.min.css";

// En "Componente/Input.stories.tsx"
const meta: Meta<DynamicFormProps> = {
  title: "Component/Form",
  component: LoginForm,
  argTypes: {
    onSubmit: {},
    theme: { control: "select" },
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
    theme: "primary",
    onSubmit: (formData: LoginFormInput) => {
      console.log("Form submitted with data:", formData);
    },
    title: "FORMURARIO",
    subTitle: "Registro y mantencion de usuarios ",
  },
};
