import React, { useEffect } from 'react';
import classNames from 'classnames';

import { useAppDispatch, useAppSelector } from '@/shared/libs/hooks';

import styles from './ProjectCardsList.module.scss';
import { getProjects } from './api/projectsReducer';

interface ProjectCardsListProps {
    className?: string;
}

export const ProjectCardsList = (props: ProjectCardsListProps) => {
    const { className = '' } = props;

    const dispatch = useAppDispatch();

    const { projects, isLoading } = useAppSelector(({ projects }) => projects);

    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch]);

    return (
        <ul className={classNames(styles.projectCardsList, [className])}>
            {projects.slice(0, 3).map(project => {
                return <li>{project.name}</li>;
            })}
        </ul>
    );
};
