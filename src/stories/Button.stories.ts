// ButtonComponent.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import { ButtonProps } from "../components/button/ButtonPros";
import { ButtonTest } from '../components/button/Button'

const meta: Meta<ButtonProps> = {
    title: "Component/Button",
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
        allCaps: {control: 'boolean'},
        disabled: {control: 'boolean'}
    },

} satisfies Meta<typeof ButtonTest>;

export default meta;

type Story = StoryObj<typeof ButtonTest>;

export const ButtonCustom: Story = {
    args: {
        backgroundColor: 'blue-solid',
        borderRadius: 'md',
        boxShadow: 'xl',
        color: 'white-light',
        fontSize: '20',
        fontWeight: '900',
        hoverBackground: 'blue-medium',
        hoverColor: 'blue-solid',
        hoverScale: 110,
        label: 'Custom Button',
        margin: 'sm',
        onClick: () => {
            console.log("se ejecuta funcion anonima");
        },
        padding: 'sm',
    },
};

export const ButtonCreate: Story = {
    args: {
        backgroundColor: 'green-solid',
        color: 'white-light',
        icon: 'save',
        label: 'Create',
        onClick: () => {
            console.log("se ejecuta funcion anonima");
        },
    },
};

export const ButtonDelete: Story = {
    args: {
        backgroundColor: 'red-solid',
        color: 'white-light',
        icon: 'trash',
        label: 'Delete',
        onClick: () => {
            console.log("se ejecuta funcion anonima");
        },
    },
};

export const ButtonIcon: Story = {
    args: {
        backgroundColor: 'blue-solid',
        color: 'white-light',
        fontSize: '20',
        fontWeight: '500',
        icon: 'home',
        label: '',
        onClick: () => {
            console.log("se ejecuta funcion anonima");
        },
    },
};

export const ButtonInfo: Story = {
    args: {
        boxShadow: 'md',
        color: 'white-light',
        fontWeight: '500',
        hoverBackground: 'blue-medium',
        hoverColor: 'blue-solid',
        icon: 'infoCircle',
        label: 'Information',
        onClick: () => {
            console.log("se ejecuta funcion anonima");
        },
    },
};

export const ButtonScale: Story = {
    args: {
        hoverScale: 120,
        label: 'Scale',
        onClick: () => {
            console.log("se ejecuta funcion anonima");
        },
    },
};

export const ButtonAllCaps: Story = {
    args: {
        label: 'All Caps',
        onClick: () => {
            console.log("se ejecuta funcion anonima");
        },
        allCaps: true,
    },
};


export const ButtonDisable: Story = {
    args: {
        label: 'Disable',
        onClick: () => {
            console.log("se ejecuta funcion anonima");
        },
        disabled: true,
        color: 'white-solid'
    },
};

