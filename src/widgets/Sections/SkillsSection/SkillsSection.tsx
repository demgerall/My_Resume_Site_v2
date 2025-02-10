import React from 'react';
import { useTranslation } from 'react-i18next';
import { delay, motion } from 'framer-motion';
import classNames from 'classnames';

import { SkillCard } from '@/shared/ui/Cards';
import { useOrientation } from '@/shared/libs/hooks';

import styles from './SkillsSection.module.scss';

interface SkillsSectionProps {
    className?: string;
}

export const SkillsSection = (props: SkillsSectionProps) => {
    const { className = '' } = props;

    const isLandscape = useOrientation();

    const { t } = useTranslation('skills');

    const hardSkillsList = [
        'HTML (HTML5), JSX',
        t('hardSkillsList.styles'),
        t('hardSkillsList.prog_lang'),
        'React',
        'Redux (Redux Toolkit)',
        'React Hook Form, Axios, React Router, React Query',
        'Vite',
        t('hardSkillsList.methodology'),
        'Git (GitHub, BitBucket, GitLab)',
        'Figma, Adobe Photoshop, Adobe Illustrator',
        t('hardSkillsList.speech'),
        t('hardSkillsList.english'),
    ];
    const softSkillsList = [
        t('softSkillsList.teamwork'),
        t('softSkillsList.deadlines'),
        t('softSkillsList.details'),
        t('softSkillsList.code_quality'),
        t('softSkillsList.criticism'),
        t('softSkillsList.conflicts'),
        t('softSkillsList.mentoring'),
        t('softSkillsList.learning'),
    ];

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
    const cardAnimationVariants = {
        hidden: {
            x: 64,
            opacity: 0,
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.3 },
        }),
    };

    return (
        <motion.section
            className={classNames(styles.skillsSection, [className])}
            id="skills"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
        >
            <motion.div
                className={styles.skillsSection_hardSkills}
                variants={sectionAnimationVariants}
                custom={1}
            >
                <h2 className={styles.skillsSection_hardSkills_title}>
                    <span
                        className={
                            styles.skillsSection_hardSkills_title__primary
                        }
                    >
                        {t('title.hard')}
                    </span>{' '}
                    {t('title.skills')}
                </h2>
                <ul className={styles.skillsSection_hardSkills_skillCardsBox}>
                    {hardSkillsList.map((skill, index) => {
                        return (
                            <motion.li
                                key={index}
                                custom={index + 1}
                                variants={cardAnimationVariants}
                            >
                                <SkillCard>{skill}</SkillCard>
                            </motion.li>
                        );
                    })}
                </ul>
            </motion.div>
            <motion.div
                className={styles.skillsSection_softSkills}
                variants={sectionAnimationVariants}
                custom={isLandscape ? 1 : hardSkillsList.length + 1}
            >
                <h2 className={styles.skillsSection_softSkills_title}>
                    <span
                        className={
                            styles.skillsSection_softSkills_title__primary
                        }
                    >
                        {t('title.soft')}
                    </span>{' '}
                    {t('title.skills')}
                </h2>
                <ul className={styles.skillsSection_softSkills_skillCardsBox}>
                    {softSkillsList.map((skill, index) => {
                        return (
                            <motion.li
                                key={index}
                                custom={
                                    isLandscape
                                        ? index + 1
                                        : hardSkillsList.length + 2 + index
                                }
                                variants={cardAnimationVariants}
                            >
                                <SkillCard>{skill}</SkillCard>
                            </motion.li>
                        );
                    })}
                </ul>
            </motion.div>
        </motion.section>
    );
};
