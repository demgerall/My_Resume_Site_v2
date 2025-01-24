import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import styles from './SkillCard.module.scss';

interface SkillCardProps {
    children: React.ReactNode;
    timeout?: number;
    className?: string;
}

export const SkillCard = (props: SkillCardProps) => {
    const { children, timeout = 0, className = '' } = props;

    const [isShow, setIsShow] = useState(timeout === 0);

    useEffect(() => {
        setTimeout(() => {
            setIsShow(true);
        }, timeout);
    }, []);

    return (
        <div
            className={classNames(
                styles.skillCard,
                [className],
                isShow ? styles.skillCard__show : '',
            )}
        >
            <div className={styles.skillCard_mark}></div>
            {children}
        </div>
    );
};
