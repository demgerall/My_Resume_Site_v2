import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import { TextTyper } from '@/shared/ui/TextTyper';

import LOTOS_MAN from '@/shared/assets/images/LotosMan.png';

import styles from './HelloSection.module.scss';

interface HelloSectionProps {
    className?: string;
}

export const HelloSection = (props: HelloSectionProps) => {
    const { className = '', ...otherProps } = props;

    const TYPED_TEXT =
        'I am a Frontend Developer. \nThank you for your interest.';
    const TYPING_DELAY = 100;

    return (
        <section className={classNames(styles.helloSection, [className])}>
            <div className={styles.helloSection_textBlock}>
                <h1 className={styles.helloSection_textBlock_title}>
                    <span
                        className={styles.helloSection_textBlock_title__primary}
                    >
                        Hello!
                    </span>
                    <br />
                    My name is Demid Chebakov.
                    <br />
                    <TextTyper text={TYPED_TEXT} interval={TYPING_DELAY} />
                    <span
                        className={styles.helloSection_textBlock_title_cursor}
                    >
                        |
                    </span>
                </h1>
            </div>
            <div className={styles.helloSection_imageBlock}>
                <img
                    className={styles.helloSection_imageBlock_mainImage}
                    src={LOTOS_MAN}
                    draggable={false}
                    alt=""
                />
            </div>
        </section>
    );
};
