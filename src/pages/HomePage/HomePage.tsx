import React from 'react';

import {
    ContactsSection,
    HelloSection,
    PortfolioSection,
    SkillsSection,
    WorkExperienceSection,
} from '@/widgets';

import styles from './HomePage.module.scss';

export const HomePage = () => {
    return (
        <main>
            <HelloSection />
            <SkillsSection />
            <PortfolioSection />
            <WorkExperienceSection />
            <ContactsSection />
        </main>
    );
};
