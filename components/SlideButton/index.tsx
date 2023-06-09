import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    onPrev: () => void;
    onNext: () => void;
}

const SlideButton: React.FC<IProps> = ({ onPrev, onNext, className, ...props }) => {
    return (
        <div className={cn(styles.slideButton, className)}
             {...props}
        >
            <button className={styles.previousButton}
                    aria-label={'Previous'}
                    onClick={onPrev}
            />
            <button className={styles.nextButton}
                    aria-label={'Next'}
                    onClick={onNext}
            />
        </div>
    );
};

export default SlideButton;
