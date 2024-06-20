import { CustomCardProps, CustomCard } from '../components/CustomCard/CustomCard';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<CustomCardProps>  = {
  title: 'Component/Cards/CustomCard',
  component: CustomCard,
  argTypes: {
    title: { control: 'text' },
    image: { control: 'text' },
    description: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof CustomCard>;

export const Default: Story = {
  args: {
    title: 'Nature',
    image: 'https://via.placeholder.com/300x200',
    description: 'A beautiful view of nature.',
  },
};
