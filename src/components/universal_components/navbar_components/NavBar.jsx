import React from 'react';
import { Link } from "react-router-dom";

export default function NavBar() {
    const navListItemNamesArr = ['Home', 'Upcoming Projects', 'Recent Projects', 'Decryptium', 'Community', 'About ds_', 'Shop']

    const navListElements = navListItemNamesArr.map((listItem, idx) => {
        const toPath = listItem === 'Home' 
            ? '/' 
            : `/${listItem.replace(/\s+/g, '-').toLowerCase()}`;

        return (
            <li className='nav_list_item' key={idx}>
                <Link to={toPath}>{listItem}</Link>
            </li>
        );
    });

    return (
        <nav className='navbar_container'>
            <ul>{navListElements}</ul>
        </nav>
    );
};
