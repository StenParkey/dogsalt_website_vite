// src/components/ShiftingText.jsx
import React, { useState, useEffect } from 'react';

const getRandomChar = (characters) => characters[Math.floor(Math.random() * characters.length)];
const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:",./<>?`~';

export const ShiftingText = ({ interval = 50 }) => {
    const [text, setText] = useState('');
    const [currentFontStyle, setCurrentFontStyle] = useState('font-style-a');
    const [characterCount, setCharacterCount] = useState(80);

    const fontStyles = ['font-style-a', 'font-style-b', 'font-style-c'];

    useEffect(() => {
        const updateCount = () => {
            // Full count for large screens
            if (window.innerWidth >= 1200) {
                setCharacterCount(80);
            // Medium count for widths between 400px and 1200px
            } else if (window.innerWidth >= 400 && window.innerWidth < 1200) {
                setCharacterCount(50); // Adjust this number as needed
            // Small count for widths below 400px
            } else {
                setCharacterCount(25); // Adjust this number as needed
            }
        };

        // Set initial count on mount
        updateCount();

        // Add event listener for window resize
        window.addEventListener('resize', updateCount);

        // Cleanup
        return () => window.removeEventListener('resize', updateCount);
    }, []);

    useEffect(() => {
        const generateText = () => {
            let newText = '';
            for (let i = 0; i < characterCount; i++) {
                newText += getRandomChar(CHARACTERS);
            }
            return newText;
        };

        const textIntervalId = setInterval(() => {
            setText(generateText());
        }, interval);

        const fontIntervalId = setInterval(() => {
            const nextFontIndex = (fontStyles.indexOf(currentFontStyle) + 1) % fontStyles.length;
            setCurrentFontStyle(fontStyles[nextFontIndex]);
        }, 1000);

        return () => {
            clearInterval(textIntervalId);
            clearInterval(fontIntervalId);
        };
    }, [characterCount, interval, currentFontStyle, fontStyles]);

    return (
        <span className={`text_divider ${currentFontStyle}`}>
            {text}
        </span>
    );
};