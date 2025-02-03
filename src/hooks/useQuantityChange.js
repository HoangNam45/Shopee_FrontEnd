import { useCallback, useRef } from 'react';

function useQuantityChange(callback, delay) {
    const timeoutRef = useRef(null);

    const debouncedCallback = useCallback(
        (...args) => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => {
                callback(...args);
            }, delay);
        },
        [callback, delay],
    );

    return debouncedCallback;
}

export default useQuantityChange;
