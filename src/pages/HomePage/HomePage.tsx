import React from 'react';

import { HelloSection, PortfolioSection, SkillsSection } from '@/widgets';

import styles from './HomePage.module.scss';

export const HomePage = () => {
    return (
        <main>
            <HelloSection />
            <SkillsSection />
            <PortfolioSection />
        </main>
    );
};
