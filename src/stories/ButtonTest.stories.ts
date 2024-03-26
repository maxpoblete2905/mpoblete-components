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
        hoverScale: {control: 'select'},
        onClick: { action: 'clicked' },
        allCaps: {control: 'boolean'}
    },

} satisfies Meta<typeof ButtonTest>;

export default meta;

type Story = StoryObj<typeof ButtonTest>;

export const ButtonCreate: Story = {
    args: {
        backgroundColor: 'green-solid',
        borderRadius: 'md',
        boxShadow: 'md',
        color: 'white-light',
        fontSize: '20',
        fontWeight: '500',
        hoverBackground: 'green-medium',
        hoverColor: 'green-solid',
        hoverScale: 100,
        icon: 'save',
        label: 'Crear Registro',
        margin: '0',
        onClick: () => {
            console.log("se ejecuta funcion anonima");
        },
        padding: 'sm',
    },
};

export const ButtonCustom: Story = {
    args: {
        backgroundColor: 'blue-solid',
        borderRadius: 'md',
        boxShadow: 'none',
        color: 'white-light',
        fontSize: '18',
        fontWeight: '100',
        hoverBackground: 'blue-medium',
        hoverColor: 'blue-solid',
        hoverScale: 110,
        label: 'Custom Button',
        margin: '0',
        onClick: () => {
            console.log("se ejecuta funcion anonima");
        },
        padding: 'sm',
    },
};

export const ButtonDelete: Story = {
    args: {
        backgroundColor: 'red-solid',
        borderRadius: 'md',
        boxShadow: 'md',
        color: 'white-light',
        fontSize: '20',
        fontWeight: '500',
        hoverBackground: 'red-medium',
        hoverColor: 'red-solid',
        hoverScale: 100,
        icon: 'trash',
        label: 'Eliminar',
        margin: '0',
        onClick: () => {
            console.log("se ejecuta funcion anonima");
        },
        padding: 'sm',
    },
};

export const ButtonIcon: Story = {
    args: {
        backgroundColor: 'blue-solid',
        borderRadius: 'md',
        boxShadow: 'md',
        color: 'white-light',
        fontSize: '20',
        fontWeight: '500',
        hoverScale: 110,
        icon: 'edit',
        label: '',
        margin: '0',
        onClick: () => {
            console.log("se ejecuta funcion anonima");
        },
        padding: 'sm',
    },
};

export const ButtonInfo: Story = {
    args: {
        backgroundColor: 'blue-solid',
        borderRadius: 'md',
        boxShadow: 'md',
        color: 'white-light',
        fontSize: '20',
        fontWeight: '500',
        hoverBackground: 'blue-medium',
        hoverColor: 'blue-solid',
        hoverScale: 100,
        icon: 'checkboxFilled',
        label: 'Información',
        margin: '0',
        onClick: () => {
            console.log("se ejecuta funcion anonima");
        },
        padding: 'sm',
    },
};

export const ButtonScale: Story = {
    args: {
        backgroundColor: 'blue-solid',
        borderRadius: 'md',
        boxShadow: 'md',
        color: 'white-light',
        fontSize: '18',
        fontWeight: '500',
        hoverBackground: 'blue-solid',
        hoverColor: 'white-light',
        hoverScale: 120,
        label: 'Button Scale',
        margin: '0',
        onClick: () => {
            console.log("se ejecuta funcion anonima");
        },
        padding: 'xs',
    },
};

export const ButtonAllCaps: Story = {
    args: {
        backgroundColor: 'blue-solid',
        borderRadius: 'md',
        boxShadow: 'md',
        color: 'white-light',
        fontSize: '18',
        fontWeight: '500',
        hoverBackground: 'blue-solid',
        hoverColor: 'white-light',
        hoverScale: 100,
        label: 'Button Scale',
        margin: '0',
        onClick: () => {
            console.log("se ejecuta funcion anonima");
        },
        padding: 'xs',
        allCaps: true,
    },
};
