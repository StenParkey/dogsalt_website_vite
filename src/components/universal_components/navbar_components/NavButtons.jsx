import React from 'react';

export default function NavButtons({ openComponents, setOpenComponents }) {
    const toggleComponent = (componentName) => {
        setOpenComponents(prevState => ({
            ...prevState,
            [componentName]: !prevState[componentName]
        }));
    };

    return (
        <nav className='title_buttons flex_row'>
            <button
                className='searchbar_button nav_buttons background_image'
                id='searchbar_button'
                onClick={() => toggleComponent('isSearchOpen')}
            ></button>
            
            <button
                className='navbar_button nav_buttons background_image'
                id='navbar_button'
                onClick={() => toggleComponent('isNavOpen')}
            ></button>
        </nav>
    );
};