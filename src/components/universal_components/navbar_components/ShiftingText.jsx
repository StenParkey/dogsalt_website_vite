// This component was built largely with the help of Gemini 2.5 Flash
import React, { useState, useEffect } from 'react';

// Helper function to generate a random character from a given set
const getRandomChar = (characters) => {
    return characters[Math.floor(Math.random() * characters.length)];
};

// Character set to choose from. You can customize this.
const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:",./<>?`~';

// A reusable component that generates a shifting line of characters
export const ShiftingText = ({ characterCount = 80, interval = 50 }) => {
    // State to hold the current string of random characters
    const [text, setText] = useState('');
    // State to hold the current font style class
    const [currentFontStyle, setCurrentFontStyle] = useState('font-style-a');

    // Array of custom font styles to cycle through
    const fontStyles = ['font-style-a', 'font-style-b', 'font-style-c'];

    useEffect(() => {
        // Function to generate a new random string
        const generateText = () => {
            let newText = '';
            for (let i = 0; i < characterCount; i++) {
                newText += getRandomChar(CHARACTERS);
            }
            return newText;
        };

        // Set up an interval to update the text
        const textIntervalId = setInterval(() => {
            setText(generateText());
        }, interval);

        // Set up an interval to switch the font style
        const fontIntervalId = setInterval(() => {
            const nextFontIndex = (fontStyles.indexOf(currentFontStyle) + 1) % fontStyles.length;
            setCurrentFontStyle(fontStyles[nextFontIndex]);
        }, 1000); // Change font every 1 second

        // The cleanup function for useEffect.
        // It's crucial to clear the intervals to prevent memory leaks when the component unmounts.
        return () => {
            clearInterval(textIntervalId);
            clearInterval(fontIntervalId);
        };
    }, [characterCount, interval, currentFontStyle, fontStyles]);

    // Render the span with the generated text and dynamic font class
    return (
        <span className={`text_divider ${currentFontStyle}`}>
            {text}
        </span>
    );
};