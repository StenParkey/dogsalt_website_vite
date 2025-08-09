import React from 'react';

export default function LatestDecryptiumEntryHeader({ decryptiumEntry }) {
    return (
        <section>
            <header>
                <h2>Most Recently in the Decryptium..</h2>
                <div className='line_divider'></div>
            </header>

            <article className='flex_row just_align_center'>
                <figure className='flex_column'>
                    <figcaption className='flex_column just_align_center'>
                        <h3>{decryptiumEntry.tomeSet}</h3>
                        <h4>{decryptiumEntry.tomeName}</h4>
                        <div className='line_divider'></div>
                    </figcaption>
                    
                    <img className='project_display_image' src={decryptiumEntry.tomeImg} alt={decryptiumEntry.tomeName} />
                </figure>

                <p className='flex_column just_align_center'>
                    {decryptiumEntry.tomeData}
                </p>
            </article>
        </section>
    )
};