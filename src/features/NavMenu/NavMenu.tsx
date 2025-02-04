import React from 'react';
import { HashLink } from 'react-router-hash-link';
import classNames from 'classnames';

import styles from './NavMenu.module.scss';

interface NavMenuProps {
    className?: string;
}

export const NavMenu = (props: NavMenuProps) => {
    const { className = '' } = props;

    return (
        <nav className={classNames(styles.navMenu, [className])}>
            <ol className={styles.navMenu_wrapper}>
                <li className={styles.navMenu_wrapper_item}>
                    <HashLink
                        smooth
                        className={styles.navMenu_wrapper_item_link}
                        to={'/My_Resume_Site_v2/#skills'}
                    >
                        Skills
                    </HashLink>
                </li>
                <li>
                    <HashLink
                        smooth
                        className={styles.navMenu_wrapper_item_link}
                        to={'/My_Resume_Site_v2/#projects'}
                    >
                        My Projects
                    </HashLink>
                </li>
                <li>
                    <HashLink
                        smooth
                        className={styles.navMenu_wrapper_item_link}
                        to={'/My_Resume_Site_v2/#work_experience'}
                    >
                        Work Experience
                    </HashLink>
                </li>
                <li>
                    <HashLink
                        smooth
                        className={styles.navMenu_wrapper_item_link}
                        to={'/My_Resume_Site_v2/#contacts'}
                    >
                        Contacts
                    </HashLink>
                </li>
            </ol>
        </nav>
    );
};
