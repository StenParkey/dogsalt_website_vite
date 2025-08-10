import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Components
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
                <Link to="/" className='title_icon background_image'></Link>
                <div className='title_content flex_column just_align_center'>
                    {!isScrolled && (
                        <div className='page_title'>
                            <strong>
                                <h1 className='title_text'>{webpageTitle}</h1>
                            </strong>
                            <h2>{webpageSecondaryTitle}</h2>
                        </div>
                    )}
                    
                    <ShiftingText />
                    {openComponents.isNavOpen && <NavBar setOpenComponents={setOpenComponents} />}
                    <div className='line_divider'></div>
                    {/* Pass the state setter to the SearchBar component */}
                    {openComponents.isSearchOpen && <SearchBar setOpenComponents={setOpenComponents} />}
                    <ShiftingText />
                </div>
                <NavButtons openComponents={openComponents} setOpenComponents={setOpenComponents} />
            </div>
        </header>
    );
}