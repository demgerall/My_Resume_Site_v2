import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

import { WorksCardsList } from '@/features';

import styles from './WorkExperienceSection.module.scss';

interface WorkExperienceSectionProps {
    className?: string;
}

export const WorkExperienceSection = (props: WorkExperienceSectionProps) => {
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
            className={classNames(styles.workExperienceSection, [className])}
            id="work_experience"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
        >
            <motion.h2
                className={styles.workExperienceSection_title}
                custom={1}
                variants={sectionAnimationVariants}
            >
                Work{' '}
                <span className={styles.workExperienceSection_title__primary}>
                    Experience
                </span>
            </motion.h2>
            <motion.div
                className={styles.workExperienceSection_worksBlock}
                custom={2}
                variants={sectionAnimationVariants}
            >
                <WorksCardsList />
            </motion.div>
        </motion.section>
    );
};
