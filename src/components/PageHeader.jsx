import React from 'react';

// Components
import NavButtons from './NavButtons';
import NavBar from './NavBar';

export default function PageHeader({ webpageTitle, webpageSecondaryTitle }) {
    // NavBar Component is currently hardcoded for styling work but will later be added as a dropdown when the 3bone button is clicked in the NavButtons Component

    return (
        <header className='title_section'>
            <div className='title_top'>
                <button className='title_icon'></button>

                <div className='title_content'>
                    <h1>{webpageTitle}</h1>
                    <h2>{webpageSecondaryTitle}</h2>
                </div>

                <NavButtons />
            </div>

            <div className='title_bottom'>
                <span className='text_divider'>this will be a shifting line of characters that spans across the viewport</span>

                <NavBar />

                <div className='line_divider'>this is just a solid line divider</div>

                <nav id='thisIsATempPlaceHolder'></nav>

                <span className='text_divider'>same thing as the other span</span>
            </div>
        </header>
    )
};