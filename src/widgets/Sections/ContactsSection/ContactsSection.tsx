import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

import { ContactChip } from '@/shared/ui/Chips';
import { contactsEnum } from '@/shared/libs/enums';

import styles from './ContactsSection.module.scss';

interface ContactsSectionProps {
    className?: string;
}

export const ContactsSection = (props: ContactsSectionProps) => {
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
                        Do you want to ask <br />
                        <span
                            className={
                                styles.contactsSection_contactBlock_textBlock_title__primary
                            }
                        >
                            something ?
                        </span>
                    </h2>
                    <p
                        className={
                            styles.contactsSection_contactBlock_textBlock_text
                        }
                    >
                        Contact me. I am in touch mon-fri 12 noon to 10 p.m.
                        (gmt).
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
                        © Demid Chebakov, 2025
                    </p>
                </div>
            </motion.div>
        </motion.section>
    );
};
