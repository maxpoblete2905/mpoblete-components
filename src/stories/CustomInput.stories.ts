import { CustomInput } from '../components/CustomInput';
import { CustomInputProps } from '../components/CustomInput/interfaces';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<CustomInputProps> = {
  title: 'Component/Inputs/CustomInput',
  component: CustomInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder para el input',
      table: {
        type: { summary: 'string' },
      },
    },
    icon: {
      control: 'select',
      description: 'Placeholder para el input',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<CustomInputProps>;

export const DefaultInput: Story = {
  args: {
    placeholder: 'Escribe algo...',
    icon: "FcBarChart"
  },
};

export const SearchInput: Story = {
  args: {
    placeholder: 'Buscar...',
    icon: "FcSearch"
  },
};

export const UsernameInput: Story = {
  args: {
    placeholder: 'Username...',
    icon: "FcBusinessman"
  },
};

export const PasswordInput: Story = {
  args: {
    placeholder: 'Password...',
    icon: "FcUnlock"
  },
};

export const PasswordInput2: Story = {
  args: {
    placeholder: 'Password...',
    icon: "FcKey"
  },
};
