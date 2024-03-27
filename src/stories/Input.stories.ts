import { Meta, StoryObj } from "@storybook/react";
import { InputProps } from "../components/input/InputProps";
import { InputComponent } from '../components/input/Input';

const meta: Meta<InputProps> = {
    title: "Component/Input",
    component: InputComponent,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        type: { control: 'select', options: ['text', 'password', 'number', 'email'] },
        color: { control: 'select' },
        fontSize: { control: 'select' },
        fontWeight: { control: 'select' },
        padding: { control: 'select' },
        margin: { control: 'select' },
        backgroundColor: { control: 'select' },
        borderRadius: { control: 'select' },
        boxShadow: { control: 'select' },
        hoverBackground: { control: 'select' },
        hoverColor: { control: 'select' },
        hoverScale: { control: 'select' },
        disabled: { control: 'boolean' },
        onChange: { action: 'changed' },
        onFocus: { action: 'focused' },
        onBlur: { action: 'blurred' },
        labelColor: {action: 'select'}
    }
};

export default meta;

type Story = StoryObj<typeof InputComponent>;

export const InputCustom: Story = {
    args: {
        label: 'Custom label',
        placeholder: 'Enter value',
        fontWeight: '600',
        icon: 'user'
    },
};

export const InputPasswords: Story = {
    args: {
        label: 'Password',
        placeholder: 'Enter password',
        type: 'password',
        icon: 'lock'
    },
};

export const InputError: Story = {
    args: {
        label: 'Input Error',
        placeholder: '',
        type: 'email',
        icon: 'flushed',
        color: 'red-solid',
        backgroundColor: 'red-light',
        labelColor: 'blue-light'
    },
};

