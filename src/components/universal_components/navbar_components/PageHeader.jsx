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
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

    return (
        <header className={`title_section flex_column just_align_center ${isScrolled ? 'scrolled' : ''}`}>
            <div className='title_top flex_row'>
                <button className='title_icon background_image'></button>

                <div className='title_content flex_column just_align_center'>
                    {/* Conditionally hide the title block */}
                    {!isScrolled && (
                        <div className='page_title'>
                            <strong>
                                <h1>{webpageTitle}</h1>
                            </strong>
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