import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import SlideButton from 'components/SlideButton';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    activeIndex: number;
    onPrev: () => void;
    onNext: () => void;
    children: React.ReactNode[];
    animationDuration?: number;
}

const Slider: React.FC<IProps> = ({
                                      activeIndex, onPrev, onNext, className,
                                      animationDuration=500, children, ...props
                                  }) => {

    return (
        <div className={cn(styles.slider, className)}
             style={{
                 '--active-index': activeIndex,
                 '--animation-duration': `${animationDuration}ms`,
             } as React.CSSProperties}
             {...props}
        >
            <div className={styles.slideContainer}>
                {children}
            </div>
            <SlideButton className={styles.slideButton}
                         onPrev={onPrev}
                         onNext={onNext}
            />
        </div>
    );
};

export default Slider;
