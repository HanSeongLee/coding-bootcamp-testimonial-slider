import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const Slide: React.FC<IProps> = ({ className, children, ...props }) => {
    return (
        <div className={cn(styles.slide, className)}>
            {children}
        </div>
    );
};

export default Slide;
