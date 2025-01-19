import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage, AllProjectsPage, ProjectPage } from '@/pages';
import { ROUTES } from '@/shared/routes/routes';

export const AppRoutes = () => {
    return (
        <Suspense>
            <Routes>
                <Route path={ROUTES.HOME} index element={<HomePage />} />
                <Route
                    path={ROUTES.ALL_PROJECTS}
                    element={<AllProjectsPage />}
                />
                <Route path={ROUTES.PROJECT} element={<ProjectPage />} />
            </Routes>
        </Suspense>
    );
};
