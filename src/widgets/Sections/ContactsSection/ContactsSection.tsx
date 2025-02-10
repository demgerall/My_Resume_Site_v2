import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import { ContactChip } from '@/shared/ui/Chips';
import { contactsEnum } from '@/shared/libs/enums';

import styles from './ContactsSection.module.scss';

interface ContactsSectionProps {
    className?: string;
}

export const ContactsSection = (props: ContactsSectionProps) => {
    const { className = '' } = props;

    const { t } = useTranslation('contacts');

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
            className={classNames(styles.contactsSection, [className])}
            id="contacts"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
        >
            <motion.div
                className={styles.contactsSection_contactBlock}
                custom={2}
                variants={sectionAnimationVariants}
            >
                <div className={styles.contactsSection_contactBlock_textBlock}>
                    <h2
                        className={
                            styles.contactsSection_contactBlock_textBlock_title
                        }
                    >
                        {t('title.question_start')} <br />
                        <span
                            className={
                                styles.contactsSection_contactBlock_textBlock_title__primary
                            }
                        >
                            {t('title.question_end')}
                        </span>
                    </h2>
                    <p
                        className={
                            styles.contactsSection_contactBlock_textBlock_text
                        }
                    >
                        {t('paragraph')}
                    </p>
                </div>
                <div className={styles.contactsSection_contactBlock_linksBlock}>
                    <div
                        className={
                            styles.contactsSection_contactBlock_linksBlock_contactLinks
                        }
                    >
                        <ContactChip
                            contact={contactsEnum.github}
                            link="https://github.com/demgerall"
                        />
                        <ContactChip
                            contact={contactsEnum.telegram}
                            link="https://t.me/demgerall"
                        />
                        <ContactChip
                            contact={contactsEnum.email}
                            link="mailto:demgerall@mail.ru"
                        />
                    </div>
                    <p
                        className={
                            styles.contactsSection_contactBlock_linksBlock_author
                        }
                    >
                        {t('author')}
                    </p>
                </div>
            </motion.div>
        </motion.section>
    );
};
