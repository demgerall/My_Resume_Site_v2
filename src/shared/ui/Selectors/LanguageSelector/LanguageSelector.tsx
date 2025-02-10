import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import FlagRussiaIcon from '@/shared/assets/icons/flag_russia.svg';
import FlagEnglishIcon from '@/shared/assets/icons/flag_england.svg';

import styles from './LanguageSelector.module.scss';

interface LanguageSelectorProps {
    className?: string;
}

interface Language {
    code: string;
    name: string;
}

export const LanguageSelector = (props: LanguageSelectorProps) => {
    const { className = '' } = props;

    const { i18n } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState<Language>({
        code: i18n.language,
        name: i18n.language === 'ru' ? 'Русский' : 'English',
    });

    const languages: Array<Language> = [
        { code: 'ru', name: 'Русский' },
        { code: 'en', name: 'English' },
    ];

    const selectorRef = useRef<HTMLDivElement>(null);

    const handleLanguageChange = (language: Language) => {
        setSelectedLanguage(language);
        i18n.changeLanguage(language.code);
        setIsOpen(false);
    };

    const onKeydownHandler = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        },
        [setIsOpen],
    );

    const handleClickOutside = (event: MouseEvent) => {
        if (
            selectorRef.current &&
            !selectorRef.current.contains(event.target as Node)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        const currentLanguage = languages.find(
            lang => lang.code === i18n.language,
        );
        if (currentLanguage) {
            setSelectedLanguage(currentLanguage);
        }
    }, [i18n.language]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeydownHandler);
        }

        return () => {
            window.removeEventListener('keydown', onKeydownHandler);
        };
    }, [isOpen, onKeydownHandler]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div
            className={classNames(styles.language_selector, [className])}
            ref={selectorRef}
        >
            <div
                className={styles.language_selector__selected}
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedLanguage.code == 'ru' ? (
                    <FlagRussiaIcon />
                ) : (
                    <FlagEnglishIcon />
                )}
                <span>{selectedLanguage.name}</span>
            </div>

            {isOpen && (
                <ul className={styles.language_selector__options}>
                    {languages.map(language => (
                        <li
                            key={language.code}
                            className={styles.language_selector__option}
                            onClick={() => handleLanguageChange(language)}
                        >
                            {language.code == 'ru' ? (
                                <FlagRussiaIcon />
                            ) : (
                                <FlagEnglishIcon />
                            )}
                            <span>{language.name}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
