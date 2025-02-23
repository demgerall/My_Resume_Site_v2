import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { delay, motion } from 'framer-motion';
import classNames from 'classnames';

import { ProjectCardsList } from '@/features';
import { useOrientation } from '@/shared/libs/hooks';

import styles from './PortfolioSection.module.scss';

interface PortfolioSectionProps {
    className?: string;
}

export const PortfolioSection = (props: PortfolioSectionProps) => {
    const { className = '' } = props;

    const isLandscape = useOrientation();

    const { t } = useTranslation('portfolio');

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
            viewport={{ amount: isLandscape ? 0.2 : 0.1, once: true }}
        >
            <motion.h2
                className={styles.portfolioSection_title}
                custom={1}
                variants={sectionAnimationVariants}
            >
                {t('title.my')}
                <span className={styles.portfolioSection_title__primary}>
                    {t('title.projects')}
                </span>
            </motion.h2>
            <motion.div
                className={styles.portfolioSection_projectsBlock}
                custom={2}
                variants={sectionAnimationVariants}
            >
                <ProjectCardsList />
                <Link
                    to={'/projects'}
                    className={
                        styles.portfolioSection_projectsBlock_showMoreLink
                    }
                >
                    {t('buttons.projects')}
                </Link>
            </motion.div>
        </motion.section>
    );
};
