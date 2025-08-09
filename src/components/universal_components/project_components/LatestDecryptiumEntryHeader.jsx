import React from 'react';

// Assets
import MoldFlowerTomeHover from '../../../models/decryptium/moldflower_tomes/moldflower_tome_hover.gif'

export default function LatestDecryptiumEntryHeader() {
    return (
        //mf needs props gawd damn it
        <section>
            <header>
                <h2>Most Recently in the Decryptium..</h2>
                <div className='line_divider'></div>
            </header>

            <article className='flex_row just_align_center'>
                <figure className='flex_column'>
                    <figcaption>tome 1 or some shit</figcaption>
                    <img className='project_display_image'src={MoldFlowerTomeHover} />  
                </figure>

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