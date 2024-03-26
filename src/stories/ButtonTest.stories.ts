// ButtonComponent.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import '../css/index.css';
import { ButtonProps } from "../components/ButonTest/ButtonPros";
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
        icon: {control: 'select'},
        hoverBackground: {control: 'select'},
        hoverColor: {control: 'select'},
        hoverScale: {control: 'select'}

    },

} satisfies Meta<typeof ButtonTest>;

export default meta;

type Story = StoryObj<typeof ButtonTest>;

export const ButtonCustom: Story = {
    args: {
        label: 'Custom Button',
        color: 'white-light',
        backgroundColor: 'blue-solid',
        fontSize: '18',
        fontWeight: '100',
        padding: 'sm',
        margin: '0',
        borderRadius: 'md',
        boxShadow: 'none',
        hoverBackground: 'blue-medium',
        hoverColor: 'blue-solid',
        hoverScale: 110
    },
};

export const ButtonCreate: Story = {
    args: {
        label: 'Crear Registro',
        color: 'white-light',
        backgroundColor: 'green-solid',
        fontSize: '20',
        fontWeight: '500',
        padding: 'sm',
        margin: '0',
        borderRadius: 'md',
        boxShadow: 'md',
        icon: 'save',
        hoverBackground: 'green-medium',
        hoverColor: 'green-solid',
        hoverScale: 100
    },
};

export const ButtonDelete: Story = {
    args: {
        label: 'Eliminar',
        color: 'white-light',
        backgroundColor: 'red-solid',
        fontSize: '20',
        fontWeight: '500',
        padding: 'sm',
        margin: '0',
        borderRadius: 'md',
        boxShadow: 'md',
        icon: 'trash',
        hoverBackground: 'red-medium',
        hoverColor: 'red-solid',
        hoverScale: 100
    },
};

export const ButtonInfo: Story = {
    args: {
        label: 'Información',
        color: 'white-light',
        backgroundColor: 'blue-solid',
        fontSize: '20',
        fontWeight: '500',
        padding: 'sm',
        margin: '0',
        borderRadius: 'md',
        boxShadow: 'md',
        icon: 'checkboxFilled',
        hoverBackground: 'blue-medium',
        hoverColor: 'blue-solid',
        hoverScale: 100
    },
};

export const ButtonScale: Story = {
    args: {
        label: 'Button Scale',
        color: 'white-light',
        backgroundColor: 'blue-solid',
        fontSize: '18',
        fontWeight: '500',
        padding: 'xs',
        margin: '0',
        borderRadius: 'md',
        boxShadow: 'md',
        hoverBackground: 'blue-solid',
        hoverColor: 'white-light',
        hoverScale: 120
    },
};

export const ButtonIcon: Story = {
    args: {
        label: '',
        color: 'white-light',
        backgroundColor: 'blue-solid',
        fontSize: '20',
        fontWeight: '500',
        padding: 'sm',
        margin: '0',
        borderRadius: 'md',
        boxShadow: 'md',
        icon: 'edit',
        hoverScale: 110
    },
};