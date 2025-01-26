import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import { getProjects } from '@/features';
import { ProjectCard } from '@/entities';
import { useAppDispatch, useAppSelector } from '@/shared/libs/hooks';

import styles from './ProjectCardsList.module.scss';

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

    const projectAnimationVariants = {
        hidden: {
            y: 64,
            opacity: 0,
        },
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.5 },
        }),
    };

    return (
        <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className={classNames(styles.projectCardsList, [className])}
        >
            {projects.slice(0, 3).map((project, index) => {
                return (
                    <motion.li
                        custom={index + 1}
                        variants={projectAnimationVariants}
                        key={index}
                    >
                        <ProjectCard project={project} />
                    </motion.li>
                );
            })}
        </motion.ul>
    );
};
