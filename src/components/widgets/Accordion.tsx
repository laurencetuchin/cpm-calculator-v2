import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Item {
    title: string;
    description: string;
}

interface Props {
    items: Item[];
    columns?: number;
}

const Accordion: React.FC<Props> = ({ items, columns = 2 }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={`grid gap-4 ${columns === 2 ? 'md:grid-cols-2 items-start' : ''}`}>
            {items.map((item, index) => (
                <div key={index} className="bg-white dark:bg-slate-900 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
                    <button
                        onClick={() => toggleItem(index)}
                        className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                        aria-expanded={activeIndex === index}
                    >
                        <span className="text-lg font-medium text-gray-900 dark:text-white">{item.title}</span>
                        <motion.span
                            animate={{ rotate: activeIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-primary flex-shrink-0 ml-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </motion.span>
                    </button>
                    <AnimatePresence>
                        {activeIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                                <div className="p-4 pt-0 text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800">
                                    <div dangerouslySetInnerHTML={{ __html: item.description }} />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
