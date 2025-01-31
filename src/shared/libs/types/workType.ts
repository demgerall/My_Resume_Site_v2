import { toolsEnum } from '@/shared/libs/enums';

export type workType = {
    name: string;
    position: string;
    workURL: string;
    usedDevTools: Array<toolsEnum>;
    description: string;
    dateStart: string;
    dateEnd: string;
};
