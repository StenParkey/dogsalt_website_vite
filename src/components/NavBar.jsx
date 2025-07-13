import React from 'react';
import { Link } from "react-router-dom";

export default function NavBar() {
    const navListItemNamesArr = ['Home', 'Upcoming Projects', 'Recent Projects', 'Decryptium', 'Community', 'About ds_', 'Shop']

    const navListElements = navListItemNamesArr.map((listItem, idx) => (
        <li className='nav_list_item' key={idx}>
            <Link to={`/${listItem.replace(/\s+/g, '-').toLowerCase()}`}>{listItem}</Link>
        </li>
    ));

    return (
        <>
            <nav className='navbar_container'>
                <ul>{navListElements}</ul>
            </nav>
            
            <div className='line_divider'></div>
        </>
    )
};