import React from 'react';

// Components
import LatestDecryptiumEntryHeader from './universal_components/project_components/LatestDecryptiumEntryHeader.jsx';
// Models
import { moldFlowerTomesArray } from '../models/decryptium/moldflower_tomes/moldFlowerTomes.js'
import MoldFlowerTomeHover from '../models/decryptium/moldflower_tomes/moldflower_tome_hover.gif';

export default function DecryptiumPage() {
    const moldFlowerTomeElements = moldFlowerTomesArray.map((listItem, idx) => (
        <li key={`tome ${idx}`}>
            <figure>
                <img className='project_image' src={MoldFlowerTomeHover} />
                <figcaption>{listItem.tomeName}</figcaption>
            </figure>
        </li>
    ));

    return (
        <>
            <LatestDecryptiumEntryHeader />

            <section>
                <header>
                    <h2>The Mold Flower Tomes</h2>
                    <div className='line_divider'></div>
                </header>

                <ul className='flex_row gallery_wrap_container'>
                    {moldFlowerTomeElements}
                </ul>
            </section>
        </>
    )
};