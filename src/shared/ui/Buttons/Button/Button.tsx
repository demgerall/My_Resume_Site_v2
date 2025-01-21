import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    visibility?: boolean;
    className?: string;
}

export const Button = (props: ButtonProps) => {
    const {
        children,
        visibility = true,
        className = '',
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(
                styles.button,
                [className],
                visibility ? styles.button__visible : styles.button__unvisible,
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
};
