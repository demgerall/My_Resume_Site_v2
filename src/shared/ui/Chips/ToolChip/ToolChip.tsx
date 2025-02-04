import React from 'react';
import classNames from 'classnames';

import { toolsEnum } from '@/shared/libs/enums';

import styles from './ToolChip.module.scss';

interface ToolChipProps {
    className?: string;
    tool: toolsEnum;
}

export const ToolChip = (props: ToolChipProps) => {
    const { className = '', tool } = props;

    return (
        <div className={classNames(styles.toolChip, [className])}>
            <img
                className={styles.toolChip_img}
                src={`/icons/${tool}.svg`}
                alt={tool}
                title={tool}
                draggable={false}
            />
        </div>
    );
};
