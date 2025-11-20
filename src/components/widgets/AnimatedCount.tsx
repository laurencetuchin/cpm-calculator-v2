import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface Props {
    value: number | string;
    duration?: number;
}

const AnimatedCount: React.FC<Props> = ({ value, duration = 2 }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 100,
        duration: duration * 1000,
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            // Parse the numeric part of the value string if it contains non-numeric chars like '10K'
            const numericValue = typeof value === 'string'
                ? parseFloat(value.replace(/[^0-9.]/g, ''))
                : value;

            if (!isNaN(numericValue)) {
                motionValue.set(numericValue);
            }
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                // Format the number. If original value had 'K' or 'M', append it back?
                // For simplicity, we'll just format the number nicely.
                // If the input was a string like "10K", we might want to preserve the suffix.
                // But for this implementation, let's assume we just want to animate the number.
                // To handle suffixes properly, we'd need more complex logic or separate props.

                // Simple approach: if input is string, try to detect suffix
                let suffix = '';
                if (typeof value === 'string') {
                    if (value.includes('K')) suffix = 'K';
                    else if (value.includes('M')) suffix = 'M';
                    else if (value.includes('k')) suffix = 'k';
                }

                ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
            }
        });
    }, [springValue, value]);

    return <span ref={ref}>{typeof value === 'number' ? 0 : '0' + (typeof value === 'string' && (value.includes('K') || value.includes('k')) ? 'k' : '')}</span>;
};

export default AnimatedCount;
