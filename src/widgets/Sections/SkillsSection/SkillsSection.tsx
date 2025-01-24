import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import { SkillCard } from '@/shared/ui/Cards';

import styles from './SkillsSection.module.scss';

interface SkillsSectionProps {
    className?: string;
}

export const SkillsSection = (props: SkillsSectionProps) => {
    const { className = '' } = props;

    const [isShowSection, setIsShowSection] = useState(false);

    const hardSkillsList = [
        'HTML (HTML5), JSX',
        'CSS (CSS3), SASS (SCSS), Animations',
        'JavaScript (ES6+, OOP), TypeScript',
        'React',
        'Redux (Redux Toolkit)',
        'React Hook Form, Axios, React Router, React Query',
        'Vite',
        'BEM, Feature-Sliced Design, Accessibility, UX',
        'Git (GitHub, BitBucket, GitLab)',
        'Figma, Adobe Photoshop, Adobe Illustrator',
        'Competent written and oral speech',
        'English level - B1',
    ];
    const softSkillsList = [
        'I know how to work in a team, and I have experience communicating with designers, managers, and developers from other fields.',
        'I follow deadlines and requirements responsibly.',
        'I am attentive to the details of the terms of reference.',
        'I am demanding about the quality of my code, I follow the style and purity of the code.',
        'I welcome constructive criticism and am always happy to find new points for professional and personal growth.',
        'I know how to resolve conflict situations and not create them.',
        'I have experience in mentoring and training junior specialists.',
        'I strive to improve my skills by constantly learning new technologies in my field of activity',
    ];

    useEffect(() => {
        setTimeout(() => setIsShowSection(true));
    }, []);

    return (
        <section
            className={classNames(
                styles.skillsSection,
                [className],
                isShowSection ? styles.skillsSection__show : '',
            )}
            id="skills"
        >
            <div className={styles.skillsSection_hardSkills}>
                <h2 className={styles.skillsSection_hardSkills_title}>
                    <span
                        className={
                            styles.skillsSection_hardSkills_title__primary
                        }
                    >
                        Hard
                    </span>{' '}
                    Skills
                </h2>
                <ul className={styles.skillsSection_hardSkills_skillCardsBox}>
                    {hardSkillsList.map((skill, index) => {
                        return (
                            <li key={index}>
                                <SkillCard timeout={(index + 1) * 250 + 1000}>
                                    {skill}
                                </SkillCard>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className={styles.skillsSection_softSkills}>
                <h2 className={styles.skillsSection_softSkills_title}>
                    <span
                        className={
                            styles.skillsSection_softSkills_title__primary
                        }
                    >
                        Soft
                    </span>{' '}
                    Skills
                </h2>
                <ul className={styles.skillsSection_softSkills_skillCardsBox}>
                    {softSkillsList.map((skill, index) => {
                        return (
                            <li key={index}>
                                <SkillCard timeout={(index + 1) * 250 + 1000}>
                                    {skill}
                                </SkillCard>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};
