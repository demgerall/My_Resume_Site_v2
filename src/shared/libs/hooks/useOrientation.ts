import { useState, useEffect, useCallback, RefObject } from 'react';

function useOrientation() {
    const [orientation, setOrientation] = useState(
        window.innerWidth > window.innerHeight,
    );

    const handleOrientationChange = () => {
        setOrientation(window.innerWidth > window.innerHeight);
    };

    useEffect(() => {
        handleOrientationChange();
        window.addEventListener('resize', handleOrientationChange);

        return () => {
            window.removeEventListener('resize', handleOrientationChange);
        };
    }, []);

    return orientation;
}

export { useOrientation };
