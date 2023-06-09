import { Meta, StoryObj } from '@storybook/react';

import SliderButton from './index';

const meta: Meta = {
    title: 'Components/SliderButton',
    component: SliderButton,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SliderButton>;

export const Default: Story = {};
