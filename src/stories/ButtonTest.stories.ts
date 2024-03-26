// ButtonComponent.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import '../css/index.css';
import { ButtonProps } from "src/components/ButonTest/ButtonPros";
import { ButtonTest } from '../components/ButonTest/ButtonTest'

const meta: Meta<ButtonProps> = {
    title: "Component/ButtonTest",
    component: ButtonTest,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        color: { control: 'select' },
        fontSize: { control: 'select' },
        fontWeight: { control: 'select' },
        padding: { control: 'select' },
        margin: { control: 'select' },
        backgroundColor: { control: 'select' },
        borderRadius: { control: 'select' },
        boxShadow: { control: 'select' },
        icon: {control: 'select'}
    },

} satisfies Meta<typeof ButtonTest>;

export default meta;

type Story = StoryObj<typeof ButtonTest>;

export const ButtonCustom: Story = {
    args: {
        label: 'Button send',
        color: 'black-solid',
        backgroundColor: 'blue-solid',
        fontSize: '18',
        fontWeight: '100',
        padding: 'sm',
        margin: '0',
        borderRadius: 'md',
        boxShadow: 'none'
    },
};

export const ButtonCreate: Story = {
    args: {
        label: 'Crear registro',
        color: 'white-light',
        backgroundColor: 'green-solid',
        fontSize: '20',
        fontWeight: '500',
        padding: 'sm',
        margin: '0',
        borderRadius: 'md',
        boxShadow: 'md'
    },
};

export const ButtonDelete: Story = {
    args: {
        label: 'Eliminar registro',
        color: 'white-light',
        backgroundColor: 'red-solid',
        fontSize: '20',
        fontWeight: '500',
        padding: 'sm',
        margin: '0',
        borderRadius: 'md',
        boxShadow: 'md',
        icon: 'trash'
    },
};