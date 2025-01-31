import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { ToolChip } from '@/shared/ui/Chips';
import { workType } from '@/shared/libs/types';

import styles from './WorkCard.module.scss';

interface WorkCardProps {
    className?: string;
    work: workType;
}

export const WorkCard = (props: WorkCardProps) => {
    const { className = '', work } = props;

    const {
        name,
        position,
        workURL,
        usedDevTools,
        description,
        dateStart,
        dateEnd,
    } = work;

    return (
        <div className={classNames(styles.workCard, [className])}>
            <p
                className={styles.workCard_date}
            >{`${dateStart} - ${dateEnd}`}</p>
            <div className={styles.workCard_company}>
                <Link
                    to={workURL}
                    className={styles.workCard_company_name}
                    title={name}
                    target="_blank"
                >
                    {name}
                </Link>
                <p className={styles.workCard_company_position}>{position}</p>
            </div>
            <p className={styles.workCard_description}>{description}</p>
            <ul className={styles.workCard_usedDevToolsBlock}>
                {usedDevTools.map((devTool, index) => {
                    return (
                        <li key={index}>
                            <ToolChip tool={devTool} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
