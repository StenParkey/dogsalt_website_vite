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
                <img src={MoldFlowerTomeHover} />
                <figcaption>{listItem.tomeName}</figcaption>
            </figure>
        </li>
    ));

    return (
        <>
            <section>
                <header>
                    <h1>Welcome to the Decryptium...</h1>
                    <div className='line_divider'></div>
                </header>   
            </section>

            <LatestDecryptiumEntryHeader />

            <section>
                <header>
                    <h2>The Mold Flower Tomes</h2>
                </header>

                <ul>
                    {moldFlowerTomeElements}
                </ul>
            </section>
        </>
    )
};