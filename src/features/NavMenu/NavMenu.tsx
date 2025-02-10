import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import styles from './NavMenu.module.scss';

interface NavMenuProps {
    className?: string;
    orientation: 'vertical' | 'horizontal';
    onClose?: () => void;
}

export const NavMenu = (props: NavMenuProps) => {
    const { className = '', orientation, onClose } = props;

    const { t } = useTranslation('navigation');

    return (
        <nav className={classNames(styles.navMenu, [className])}>
            <ol
                className={classNames(styles.navMenu_wrapper, [
                    orientation === 'horizontal'
                        ? styles.navMenu_wrapper__horizontal
                        : styles.navMenu_wrapper__vertical,
                ])}
            >
                {orientation === 'vertical' && (
                    <li className={styles.navMenu_wrapper_item}>
                        <HashLink
                            smooth
                            className={styles.navMenu_wrapper_item_link}
                            to={'/My_Resume_Site_v2/#about'}
                            onClick={onClose}
                        >
                            {t('about')}
                        </HashLink>
                    </li>
                )}
                <li className={styles.navMenu_wrapper_item}>
                    <HashLink
                        smooth
                        className={styles.navMenu_wrapper_item_link}
                        to={'/My_Resume_Site_v2/#skills'}
                        onClick={onClose}
                    >
                        {t('skills')}
                    </HashLink>
                </li>
                <li>
                    <HashLink
                        smooth
                        className={styles.navMenu_wrapper_item_link}
                        to={'/My_Resume_Site_v2/#projects'}
                        onClick={onClose}
                    >
                        {t('projects')}
                    </HashLink>
                </li>
                <li>
                    <HashLink
                        smooth
                        className={styles.navMenu_wrapper_item_link}
                        to={'/My_Resume_Site_v2/#work_experience'}
                        onClick={onClose}
                    >
                        {t('experience')}
                    </HashLink>
                </li>
                <li>
                    <HashLink
                        smooth
                        className={styles.navMenu_wrapper_item_link}
                        to={'/My_Resume_Site_v2/#contacts'}
                        onClick={onClose}
                    >
                        {t('contacts')}
                    </HashLink>
                </li>
            </ol>
        </nav>
    );
};
