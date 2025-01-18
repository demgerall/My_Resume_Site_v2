import React from 'react';

import { AppRoutes } from './routes/Routes';
import { Header } from '@/widgets';

export const App = () => {
    return (
        <>
            <Header />
            <AppRoutes />
        </>
    );
};
