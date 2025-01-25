import React from 'react';
import { delay, motion } from 'framer-motion';
import classNames from 'classnames';

import styles from './PortfolioSection.module.scss';
import { ProjectCardsList } from '@/entities';

interface PortfolioSectionProps {
    className?: string;
}

export const PortfolioSection = (props: PortfolioSectionProps) => {
    const { className = '' } = props;

    const sectionAnimationVariants = {
        hidden: {
            y: 64,
            opacity: 0,
        },
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.3 },
        }),
    };

    return (
        <motion.section
            className={classNames(styles.portfolioSection, [className])}
            id="projects"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
        >
            <motion.h2
                className={styles.portfolioSection_title}
                custom={1}
                variants={sectionAnimationVariants}
            >
                My{' '}
                <span className={styles.portfolioSection_title__primary}>
                    Projects
                </span>
            </motion.h2>
            <motion.div
                className={styles.portfolioSection_projectsBlock}
                custom={2}
                variants={sectionAnimationVariants}
            >
                <ProjectCardsList></ProjectCardsList>
            </motion.div>
        </motion.section>
    );
};
