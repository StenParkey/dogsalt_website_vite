import React from 'react';

import { moldFlowerTomesArray } from '../../models/decryptium/moldflower_tomes/moldFlowerTomes.js'
import './decryptium_styles.css';
import MoldFlowerTomeHover from '../../models/decryptium/moldflower_tomes/moldflower_tome_hover.gif';

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

                <figure>
                    <article>
                        <figcaption>Most Recently...</figcaption>
                        <p>This is the first ever decoded decryptium tome</p>
                    </article>

                    <img src={MoldFlowerTomeHover} />
                </figure>
            </section>

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