import React from 'react';

import { HelloSection, SkillsSection } from '@/widgets';

import styles from './HomePage.module.scss';

export const HomePage = () => {
    return (
        <main>
            <HelloSection />
            <SkillsSection />
        </main>
    );
};
