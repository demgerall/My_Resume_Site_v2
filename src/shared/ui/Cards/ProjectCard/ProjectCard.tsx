import React from 'react';
import classNames from 'classnames';

import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
    className?: string;
}

export const ProjectCard = (props: ProjectCardProps) => {
    const { className = '' } = props;

    return (
        <div className={classNames(styles.projectCard, [className])}>
            ProjectCard
        </div>
    );
};
