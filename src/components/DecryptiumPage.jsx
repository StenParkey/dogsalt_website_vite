import React from 'react';

// Components
import LatestDecryptiumEntryHeader from './universal_components/project_components/LatestDecryptiumEntryHeader.jsx';
// Models

import { sortedDecryptiumArray, lastDecryptiumEntry } from '../models/decryptium/decryptiumArray.js';

export default function DecryptiumPage() {
    const decryptiumSectionElements = sortedDecryptiumArray.map((tomeSetObj, idx) => (
        <section key={`tome set ${idx}`}>
            <header>
                <h2>{tomeSetObj.tomeSetName}</h2>
                <div className='line_divider'></div>
            </header>
            <ul className='flex_row gallery_wrap_container'>
                {tomeSetObj.tomes.map((tome, tomeIdx) => (
                    <li key={`tome ${tomeIdx}`}>
                        <figure>
                            <img className='project_image' src={tome.tomeImg} alt={tome.tomeName} />
                            <figcaption>{tome.tomeName}</figcaption>
                        </figure>
                    </li>
                ))}
            </ul>
        </section>
    ));

    return (
        <>
            <LatestDecryptiumEntryHeader 
                decryptiumEntry={lastDecryptiumEntry}
            />

            {decryptiumSectionElements}
        </>
    )
};