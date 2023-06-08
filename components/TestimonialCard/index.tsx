import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement>, ITestimonialProps {

}

const TestimonialCard: React.FC<IProps> = ({
                                               name, content, position, avatar,
                                               className, ...props
                                           }) => {
    return (
        <article className={cn(styles.testimonialCard, className)}
                 {...props}
        >
            <img className={styles.avatar}
                 src={avatar}
                 alt={name}
            />
            <div className={styles.content}>
                <blockquote className={styles.quote}>
                    {content}
                </blockquote>
                <p className={styles.nameAndPosition}>
                    <span className={styles.name}>
                        {name}
                    </span>
                    <span className={styles.position}>
                        {position}
                    </span>
                </p>
            </div>
        </article>
    );
};

export default TestimonialCard;
