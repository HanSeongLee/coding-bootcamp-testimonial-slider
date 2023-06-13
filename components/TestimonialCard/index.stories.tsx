import { Meta, StoryObj } from '@storybook/react';
import TestimonialCard from './index';

const meta: Meta = {
    title: 'Components/TestimonialCard',
    component: TestimonialCard,
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: {
                type: 'text',
            },
        },
        content: {
            control: {
                type: 'text',
            },
        },
        position: {
            control: {
                type: 'text',
            },
        },
        avatar: {
            control: {
                type: 'text',
            },
        },
    }
};

export default meta;

type Story = StoryObj<typeof TestimonialCard>;

export const Default: Story = {
    args: {
        name: 'Tanya Sinclair',
        content: 'I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.',
        position: 'UX Engineer',
        avatar: '/img/image-tanya.jpg',
    },
};
