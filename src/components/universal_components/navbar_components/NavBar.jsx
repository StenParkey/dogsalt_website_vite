// This component was built using Gemini 2.5
import React from 'react';
import { Link } from "react-router-dom";

// Accept setOpenComponents as a prop
export default function NavBar({ setOpenComponents }) {

    // Function to close the navbar
    const closeNav = () => {
        setOpenComponents(prevState => ({
            ...prevState,
            isNavOpen: false
        }));
    };

    const navListItemNamesArr = ['Home', 'Upcoming Projects', 'Recent Projects', 'Decryptium', 'Community', 'About ds_', 'Shop']

    const navListElements = navListItemNamesArr.map((listItem, idx) => {
        const toPath = listItem === 'Home' 
            ? '/' 
            : `/${listItem.replace(/\s+/g, '-').toLowerCase()}`;

        return (
            <li className='nav_list_item' key={idx}>
                {/* Attach the closeNav function to the onClick event */}
                <Link to={toPath} onClick={closeNav}>{listItem}</Link>
            </li>
        );
    });

    return (
        <nav className='navbar_container'>
            <ul>{navListElements}</ul>
        </nav>
    );
};