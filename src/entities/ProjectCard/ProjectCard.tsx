import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { ToolChip } from '@/shared/ui/Chips';
import { projectType } from '@/shared/libs/types';

import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
    className?: string;
    project: projectType;
}

export const ProjectCard = (props: ProjectCardProps) => {
    const { className = '', project } = props;

    const {
        name,
        githubRepositoryURL,
        githubPagesURL,
        images,
        usedDevTools,
        description,
        date,
    } = project;

    return (
        <div className={classNames(styles.projectCard, [className])}>
            <div
                className={styles.projectCard_imageBlock}
                style={{ backgroundImage: `url(${images[0]})` }}
            ></div>
            <div className={styles.projectCard_textBlock}>
                <p className={styles.projectCard_textBlock_date}>{date}</p>
                <Link
                    to={`/projects/${name}`}
                    className={styles.projectCard_textBlock_name}
                    title={name}
                >
                    {name}
                </Link>
                <div className={styles.projectCard_textBlock_githubLinks}>
                    <Link
                        to={githubRepositoryURL}
                        className={
                            styles.projectCard_textBlock_githubLinks_githubRepositoryLink
                        }
                        target="_blank"
                    >
                        <img
                            className={
                                styles.projectCard_textBlock_githubLinks_githubRepositoryLink_img
                            }
                            src="src/shared/assets/icons/github.svg"
                            alt=""
                        />
                    </Link>
                    {githubPagesURL ? (
                        <Link
                            to={githubPagesURL}
                            className={
                                styles.projectCard_textBlock_githubLinks_githubPagesLink
                            }
                            target="_blank"
                        >
                            GitHub Pages
                        </Link>
                    ) : (
                        ''
                    )}
                </div>

                <p className={styles.projectCard_textBlock_description}>
                    {description}
                </p>
                <ul className={styles.projectCard_textBlock_usedDevToolsBlock}>
                    {usedDevTools.map((devTool, index) => {
                        return (
                            <li key={index}>
                                <ToolChip tool={devTool} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
