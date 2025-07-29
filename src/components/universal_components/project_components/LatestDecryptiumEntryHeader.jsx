import React from 'react';

// Assets
import MoldFlowerTomeHover from '../../../models/decryptium/moldflower_tomes/moldflower_tome_hover.gif'

export default function LatestDecryptiumEntryHeader() {
    return (
        //mf needs props gawd damn it
        <section className='latest_decryptium_entry_header_container'>
            <header>
                <h2>Most Recently..</h2>
                <div className='line_divider'></div>
            </header>

            <figure>
                <img src={MoldFlowerTomeHover} />  
                <figcaption>tome 1 or some shit</figcaption>
            </figure>

            <article className='hp_decryptium_preview_container'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </article>
        </section>
    )
};