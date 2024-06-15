import { Card, CustomCard } from '@components/CustomCard/CustomCard';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<Card>  = {
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

export const CityView: Story = {
  args: {
    title: 'City',
    image: 'https://via.placeholder.com/300x200',
    description: 'A bustling cityscape.',
  },
};

export const OceanView: Story = {
  args: {
    title: 'Ocean',
    image: 'https://via.placeholder.com/300x200',
    description: 'A serene ocean view.',
  },
};
