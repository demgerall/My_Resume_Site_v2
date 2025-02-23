import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import { TextTypier } from '@/shared/ui/TextTypier';
import LOTOS_MAN from '@/shared/assets/images/LotosMan.png';
import LOTOS_MAN_ARMS from '@/shared/assets/images/LotosManArms.png';

import styles from './HelloSection.module.scss';

interface HelloSectionProps {
    className?: string;
}

export const HelloSection = (props: HelloSectionProps) => {
    const { className = '' } = props;

    const [showLogos, setShowLogos] = useState(false);
    const [startLogosRotating, setStartLogosRotating] = useState(false);
    const [showLinks, setShowLinks] = useState(false);

    const { t } = useTranslation('hello');

    const TYPING_DELAY = 75;

    useEffect(() => {
        setTimeout(() => {
            setShowLogos(true);
        }, 3000);
        setTimeout(() => {
            setStartLogosRotating(true);
        }, 5000);
        setTimeout(
            () => {
                setShowLinks(true);
            },
            TYPING_DELAY *
                t('typed_text', { profession: 'Frontend Developer' }).length +
                500,
        );
    }, []);

    const textAnimationVariants = {
        hidden: {
            x: -64,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
        },
    };

    return (
        <motion.section
            className={classNames(styles.helloSection, [className])}
            id="about"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
        >
            <motion.div
                className={styles.helloSection_textBlock}
                variants={textAnimationVariants}
            >
                <h1 className={styles.helloSection_textBlock_title}>
                    <span
                        className={styles.helloSection_textBlock_title__primary}
                    >
                        {t('static_text.hello')}
                    </span>
                    <br />
                    {t('static_text.introduction')}
                    <span
                        className={
                            styles.helloSection_textBlock_title__underlined
                        }
                    >
                        {t('static_text.name')}
                    </span>
                    .
                    <br />
                    <TextTypier
                        text={t('typed_text', {
                            profession: 'Frontend Developer',
                        })}
                        interval={TYPING_DELAY}
                    />
                    <span
                        className={styles.helloSection_textBlock_title_cursor}
                    >
                        |
                    </span>
                </h1>
                <div
                    className={classNames(
                        styles.helloSection_textBlock_linksBlock,
                        showLinks
                            ? styles.helloSection_textBlock_linksBlock__show
                            : '',
                    )}
                >
                    <HashLink
                        className={
                            styles.helloSection_textBlock_linksBlock_contactLink
                        }
                        to={'/My_Resume_Site_v2/#contacts'}
                    >
                        {t('buttons.contact')}
                    </HashLink>
                    <Link
                        to={'/My_Resume_Site_v2/projects'}
                        className={
                            styles.helloSection_textBlock_linksBlock_showMoreLink
                        }
                    >
                        {t('buttons.projects')}
                    </Link>
                </div>
            </motion.div>
            <div className={styles.helloSection_imageBlock}>
                <img
                    className={styles.helloSection_imageBlock_armsImage}
                    src={LOTOS_MAN_ARMS}
                    draggable={false}
                    alt=""
                />

                <img
                    className={styles.helloSection_imageBlock_mainImage}
                    src={LOTOS_MAN}
                    draggable={false}
                    alt=""
                />

                <img
                    src={'/My_Resume_Site_v2/icons/react.svg'}
                    className={classNames(
                        styles.helloSection_imageBlock_logo,
                        styles.helloSection_imageBlock_logo_reactLogo,
                        showLogos
                            ? styles.helloSection_imageBlock_logo__show
                            : '',
                        startLogosRotating
                            ? styles.helloSection_imageBlock_logo__rotating__right
                            : '',
                    )}
                    draggable={false}
                    alt=""
                />
                <img
                    src={'/My_Resume_Site_v2/icons/vite.svg'}
                    className={classNames(
                        styles.helloSection_imageBlock_logo,
                        styles.helloSection_imageBlock_logo_viteLogo,
                        showLogos
                            ? styles.helloSection_imageBlock_logo__show
                            : '',
                        startLogosRotating
                            ? styles.helloSection_imageBlock_logo__rotating__left
                            : '',
                    )}
                    draggable={false}
                    alt=""
                />
                <img
                    src={'/My_Resume_Site_v2/icons/redux.svg'}
                    className={classNames(
                        styles.helloSection_imageBlock_logo,
                        styles.helloSection_imageBlock_logo_reduxLogo,
                        showLogos
                            ? styles.helloSection_imageBlock_logo__show
                            : '',
                        startLogosRotating
                            ? styles.helloSection_imageBlock_logo__rotating__right
                            : '',
                    )}
                    draggable={false}
                    alt=""
                />
                <img
                    src={'/My_Resume_Site_v2/icons/typescript.svg'}
                    className={classNames(
                        styles.helloSection_imageBlock_logo,
                        styles.helloSection_imageBlock_logo_typescriptLogo,
                        showLogos
                            ? styles.helloSection_imageBlock_logo__show
                            : '',
                        startLogosRotating
                            ? styles.helloSection_imageBlock_logo__rotating__left
                            : '',
                    )}
                    draggable={false}
                    alt=""
                />
                <img
                    src={'/My_Resume_Site_v2/icons/react-router.svg'}
                    className={classNames(
                        styles.helloSection_imageBlock_logo,
                        styles.helloSection_imageBlock_logo_reactRouterLogo,
                        showLogos
                            ? styles.helloSection_imageBlock_logo__show
                            : '',
                        startLogosRotating
                            ? styles.helloSection_imageBlock_logo__rotating__right
                            : '',
                    )}
                    draggable={false}
                    alt=""
                />
                <img
                    src={'/My_Resume_Site_v2/icons/scss.svg'}
                    className={classNames(
                        styles.helloSection_imageBlock_logo,
                        styles.helloSection_imageBlock_logo_scssLogo,
                        showLogos
                            ? styles.helloSection_imageBlock_logo__show
                            : '',
                        startLogosRotating
                            ? styles.helloSection_imageBlock_logo__rotating__left
                            : '',
                    )}
                    draggable={false}
                    alt=""
                />
            </div>
        </motion.section>
    );
};
