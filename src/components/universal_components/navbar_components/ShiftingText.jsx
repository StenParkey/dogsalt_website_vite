// This component was built using Gemini 2.5
import React, { useState, useEffect } from 'react';

const getRandomChar = (characters) => characters[Math.floor(Math.random() * characters.length)];
const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:",./<>?`~';

// A simple debounce function to improve performance on resize events
const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
};

export const ShiftingText = ({ interval = 50 }) => {
    // Dynamic character count calculation based on window width
    const calculateCharacterCount = (width) => {
        const minWidth = 400; // Minimum screen width to consider for scaling
        const maxWidth = 1200; // Maximum screen width to consider for scaling
        const minChars = 5; // Minimum character count
        const maxChars = 25; // Maximum character count

        // If the width is outside the scaling range, return the min or max
        if (width <= minWidth) return minChars;
        if (width >= maxWidth) return maxChars;
        
        // Calculate the percentage of the current width within the scaling range
        const widthPercent = (width - minWidth) / (maxWidth - minWidth);
        
        // Use the percentage to scale the character count
        return Math.floor(minChars + (maxChars - minChars) * widthPercent);
    };
    
    // Set the initial character count based on the window size
    const [characterCount, setCharacterCount] = useState(calculateCharacterCount(window.innerWidth));
    const [text, setText] = useState('');
    const [currentFontStyle, setCurrentFontStyle] = useState('font-style-a');

    const fontStyles = ['font-style-a', 'font-style-b', 'font-style-c'];

    useEffect(() => {
        const updateCount = () => {
            setCharacterCount(calculateCharacterCount(window.innerWidth));
        };

        // Create a debounced version of the update function
        const debouncedUpdate = debounce(updateCount, 250);
        
        window.addEventListener('resize', debouncedUpdate);

        return () => window.removeEventListener('resize', debouncedUpdate);
    }, []);

    useEffect(() => {
        const generateText = () => {
            let newText = '';
            for (let i = 0; i < characterCount; i++) {
                newText += getRandomChar(CHARACTERS);
            }
            return newText;
        };

        // This interval is responsible for updating the shifting text
        const textIntervalId = setInterval(() => {
            setText(generateText());
        }, interval);

        // This interval handles the font style changes
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
