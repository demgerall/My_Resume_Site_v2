import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import { TextTyper } from '@/shared/ui/TextTyper';
import LOTOS_MAN from '@/shared/assets/images/LotosMan.png';
import LOTOS_MAN_ARMS from '@/shared/assets/images/LotosManArms.png';

import styles from './HelloSection.module.scss';
import { HashLink } from 'react-router-hash-link';

interface HelloSectionProps {
    className?: string;
}

export const HelloSection = (props: HelloSectionProps) => {
    const { className = '', ...otherProps } = props;

    const [showLogos, setShowLogos] = useState(false);
    const [startLogosRotating, setStartLogosRotating] = useState(false);
    const [showLinks, setShowLinks] = useState(false);

    const TYPED_TEXT =
        'I am a Frontend Developer. Thank you for your interest.';
    const TYPING_DELAY = 100;

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
            TYPING_DELAY * TYPED_TEXT.length + 500,
        );
    }, []);

    return (
        <section
            className={classNames(styles.helloSection, [className])}
            id="about"
        >
            <div className={styles.helloSection_textBlock}>
                <h1 className={styles.helloSection_textBlock_title}>
                    <span
                        className={styles.helloSection_textBlock_title__primary}
                    >
                        Hello!
                    </span>
                    <br />
                    My name is{' '}
                    <span
                        className={
                            styles.helloSection_textBlock_title__underlined
                        }
                    >
                        Demid Chebakov
                    </span>
                    .
                    <br />
                    <TextTyper text={TYPED_TEXT} interval={TYPING_DELAY} />
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
                        to={'/#contacts'}
                    >
                        Contact
                    </HashLink>
                </div>
            </div>
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
                    src={'./src/shared/assets/icons/react.svg'}
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
                    src={'./src/shared/assets/icons/vite.svg'}
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
                    src={'./src/shared/assets/icons/redux.svg'}
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
                    src={'./src/shared/assets/icons/typescript.svg'}
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
                    src={'./src/shared/assets/icons/react-router.svg'}
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
                    src={'./src/shared/assets/icons/scss.svg'}
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
        </section>
    );
};
