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
            if (window.innerWidth >= 1200) {
                setCharacterCount(80);
            } else if (window.innerWidth >= 400 && window.innerWidth < 1200) {
                setCharacterCount(50);
            } else {
                setCharacterCount(25);
            }
        };

        updateCount();
        window.addEventListener('resize', updateCount);
        return () => window.removeEventListener('resize', updateCount);
    }, []); // This effect only runs on mount and unmount

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
    }, [characterCount, interval, currentFontStyle, fontStyles]); // Add characterCount to the dependency array
    
    return (
        <span className={`text_divider ${currentFontStyle}`}>
            {text}
        </span>
    );
};