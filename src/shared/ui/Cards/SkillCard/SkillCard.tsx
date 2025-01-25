import React from 'react';
import classNames from 'classnames';

import styles from './SkillCard.module.scss';

interface SkillCardProps {
    children: React.ReactNode;
    className?: string;
}

export const SkillCard = (props: SkillCardProps) => {
    const { children, className = '' } = props;

    return (
        <div className={classNames(styles.skillCard, [className])}>
            <div className={styles.skillCard_mark}></div>
            {children}
        </div>
    );
};
