import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './StandartButton.module.scss';

interface StandartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: React.ReactNode;
}

export const StandartButton = (props: StandartButtonProps) => {
    const { className = '', children, ...otherProps } = props;

    return (
        <button
            className={classNames(styles.button, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
