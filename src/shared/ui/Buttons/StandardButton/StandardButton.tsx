import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './StandardButton.module.scss';

interface StandardButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

export const StandardButton = (props: StandardButtonProps) => {
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
