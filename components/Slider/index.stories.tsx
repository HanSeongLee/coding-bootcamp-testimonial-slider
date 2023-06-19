import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import Slider from './index';
import Slide from 'components/Slide';
import TestimonialCard from 'components/TestimonialCard';
import Container from 'components/commons/Container';

const meta: Meta = {
    title: 'Components/Slider',
    component: Slider,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
    args: {
        activeIndex: 0,
        children: [
            <Slide>
                <Container>
                    <TestimonialCard avatar={'/img/image-tanya.jpg'}
                                     content={'I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.'}
                                     name={'Tanya Sinclair'}
                                     position={'UX Engineer'}
                    />
                </Container>
            </Slide>
        ],
    }
};
