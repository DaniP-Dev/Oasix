import React, { useEffect, useState, KeyboardEvent } from 'react';

interface DarkButtonProps {
    /** If provided, the component becomes controlled and shows this value. */
    isOn?: boolean;
    /** Optional label to display next to the toggle */
    label?: string;
    /** Optional callback fired when the toggle changes (passes new state) */
    onChange?: (next: boolean) => void;
}

const DarkButton: React.FC<DarkButtonProps> = ({ isOn, label = '', onChange }) => {
    const isControlled = typeof isOn === 'boolean';
    const [internalOn, setInternalOn] = useState<boolean>(!!isOn);

    // keep internal state in sync when used as controlled
    useEffect(() => {
        if (isControlled) setInternalOn(isOn as boolean);
    }, [isOn, isControlled]);

    const current = isControlled ? (isOn as boolean) : internalOn;

    const toggle = () => {
        const next = !current;
        if (!isControlled) setInternalOn(next);
        if (onChange) onChange(next);
    };

    const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle();
        }
    };

    return (
        <div className="inline-flex items-center space-x-3">
            {label ? (
                <span className="text-sm font-medium text-gray-200 select-none">{label}</span>
            ) : null}

            <button
                type="button"
                role="switch"
                aria-checked={current}
                onClick={toggle}
                onKeyDown={onKeyDown}
                className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    current ? 'bg-pink-600 focus:ring-pink-400' : 'bg-gray-700 focus:ring-gray-500'
                }`}
            >
                <span
                    className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                        current ? 'translate-x-6' : 'translate-x-0'
                    }`}
                />
            </button>
        </div>
    );
};

export default DarkButton;