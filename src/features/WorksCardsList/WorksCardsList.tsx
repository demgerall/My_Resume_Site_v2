import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import { getWorks } from '@/features';
import { WorkCard } from '@/entities';
import { useAppDispatch, useAppSelector } from '@/shared/libs/hooks';

import styles from './WorksCardsList.module.scss';

interface WorksCardsListProps {
    className?: string;
}

export const WorksCardsList = (props: WorksCardsListProps) => {
    const { className = '' } = props;

    const dispatch = useAppDispatch();

    const { works, isLoading } = useAppSelector(({ works }) => works);

    const { i18n } = useTranslation();

    useEffect(() => {
        dispatch(getWorks(i18n.language));
    }, [dispatch, i18n.language]);

    const workAnimationVariants = {
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
            className={classNames(styles.worksCardsList, [className])}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
        >
            {works.map((work, index) => {
                return (
                    <motion.li
                        className={styles.worksCardsList_workBlock}
                        custom={index + 1}
                        variants={workAnimationVariants}
                        key={index}
                    >
                        <div
                            className={
                                styles.worksCardsList_workBlock_circleMark
                            }
                        >
                            <div
                                className={
                                    styles.worksCardsList_workBlock_circleMark_innerCircle
                                }
                            ></div>
                        </div>
                        <WorkCard work={work} />
                    </motion.li>
                );
            })}
        </motion.ul>
    );
};
