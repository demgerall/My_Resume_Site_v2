import { toolsEnum } from '@/shared/libs/enums';

export type projectType = {
    name: string;
    githubRepositoryURL: string;
    githubPagesURL: string;
    images: Array<string>;
    usedDevTools: Array<toolsEnum>;
    description: string;
    date: string;
};
