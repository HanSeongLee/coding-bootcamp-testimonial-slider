import type { NextPage } from 'next'
import styles from './style.module.scss';
import Container from 'components/commons/Container';
import SliderContainer from 'containers/SliderContainer';
import TestimonialCard from 'components/TestimonialCard';
import React from 'react';

const Home: NextPage = () => {
    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.title}>
                    {process.env.NEXT_PUBLIC_TITLE}
                </h1>
            </header>
            <main className={styles.main}>
                <Container className={styles.container}>
                    <SliderContainer>
                        <Container className={styles.slideContainer}>
                            <TestimonialCard avatar={'/img/image-tanya.jpg'}
                                             content={'I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.'}
                                             name={'Tanya Sinclair'}
                                             position={'UX Engineer'}
                            />
                        </Container>
                        <Container className={styles.slideContainer}>
                            <TestimonialCard avatar={'/img/image-john.jpg'}
                                             content={'If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.'}
                                             name={'John Tarkpor'}
                                             position={'Junior Front-end Developer'}
                            />
                        </Container>
                    </SliderContainer>
                </Container>
            </main>
        </>
    );
};

export default Home
