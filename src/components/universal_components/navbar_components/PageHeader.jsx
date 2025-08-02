import React, { useState } from 'react';
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

    return (
        <header className='title_section flex_column just_align_center'>
            <div className='title_top flex_row'>
                <button className='title_icon background_image'></button>

                <div className='title_content flex_column just_align_center'>
                    <h1>{webpageTitle}</h1>
                    <h2>{webpageSecondaryTitle}</h2>

                    <ShiftingText />
                    {openComponents.isNavOpen && <NavBar />}
                    <div className='line_divider'></div>
                    {openComponents.isSearchOpen && <SearchBar />}
                    <ShiftingText />
                </div>

                <NavButtons openComponents={openComponents} setOpenComponents={setOpenComponents} />
            </div>
        </header>
    )
};