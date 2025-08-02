import React, { useState, useEffect } from 'react';
import NavButtons from './NavButtons';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import { ShiftingText } from './ShiftingText';

export default function PageHeader({ webpageTitle, webpageSecondaryTitle }) {
    const [openComponents, setOpenComponents] = useState({
        isNavOpen: false,
        isSearchOpen: false,
    });
    // State to track if the page has been scrolled
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the vertical scroll position is greater than 10 pixels
            setIsScrolled(window.scrollY > 10);
        };

        // Add the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return (
        <header className={`title_section flex_column just_align_center ${isScrolled ? 'scrolled' : ''}`}>
            <div className='title_top flex_row'>
                <button className='title_icon background_image'></button>

                <div className='title_content flex_column just_align_center'>
                    {/* Conditionally hide the title block */}
                    {!isScrolled && (
                        <div className='page_title'>
                            <h1>{webpageTitle}</h1>
                            <h2>{webpageSecondaryTitle}</h2>
                        </div>
                    )}
                    <ShiftingText />
                    {openComponents.isNavOpen && <NavBar />}
                    <div className='line_divider'></div>
                    {openComponents.isSearchOpen && <SearchBar />}
                    <ShiftingText />
                </div>

                <NavButtons openComponents={openComponents} setOpenComponents={setOpenComponents} />
            </div>
        </header>
    );
}