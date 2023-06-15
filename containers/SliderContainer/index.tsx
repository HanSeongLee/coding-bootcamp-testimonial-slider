import React, { HTMLAttributes, ReactNode, useEffect, useState } from 'react';
import Slider from 'components/Slider';
import Slide from 'components/Slide';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode[];
}

const SliderContainer: React.FC<IProps> = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const onPrev = () => {
        if (activeIndex === 0) {
            setActiveIndex(children.length - 1);
            return;
        }
        setActiveIndex(activeIndex - 1);
    };

    const onNext = () => {
        setActiveIndex((activeIndex + 1) % children.length);
    };

    const onKeyUp = (e: KeyboardEvent) => {
        switch (e.key) {
            case 'ArrowLeft':
                onPrev();
                break;
            case 'ArrowRight':
                onNext();
                break;
        }
    };

    const onWheel = (e: WheelEvent) => {
        if (Math.abs(e.deltaX) < 50) {
            return;
        }
        if (e.deltaX < 0) {
            onPrev();
        } else {
            onNext();
        }
    };

    useEffect(() => {
        window.addEventListener('wheel', onWheel);
        window.addEventListener('keyup', onKeyUp);

        return () => {
            window.removeEventListener('wheel', onWheel);
            window.removeEventListener('keyup', onKeyUp);
        };
    }, [activeIndex]);

    return (
        <Slider activeIndex={activeIndex}
                onPrev={onPrev}
                onNext={onNext}
        >
            {children.map((item, index) => (
                <Slide key={index}>
                    {item}
                </Slide>
            ))}
        </Slider>
    );
};

export default SliderContainer;
