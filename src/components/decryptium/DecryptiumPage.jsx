import React from 'react';

import DecryptiumTomeHover from '../../assets/decryptium_assets/decryptium_tome_hover.gif';

export default function DecryptiumPage() {
    return (
        <>
            <section>
                <header>Welcome to the Decryptium...</header>
                <div className='line_divider'></div>

                <figure>
                    <article>
                        <figcaption>Most Recently...</figcaption>
                        <p>This is the first ever decoded decryptium tome</p>
                    </article>
                    
                    <img src={DecryptiumTomeHover} />
                </figure>
            </section>

            <section>
                <header>The Mold Flower Tomes</header>
                <ul>
                    <li>
                        <figure>
                            <img src={DecryptiumTomeHover} />
                            <figcaption>Tome 1</figcaption>
                        </figure>
                    </li>
                </ul>
            </section>
        </>
    )
};