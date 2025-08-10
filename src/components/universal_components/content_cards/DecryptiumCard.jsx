import React from 'react';

// Components
import { ShiftingText } from '../navbar_components/ShiftingText';

export default function DecryptiumCard({ tome, onClose }) {
    if (!tome) {
        return null;
    }

    const { tomeSet, tomeName, tomeImg, tomeData } = tome;
    
    const handleCardClick = (e) => {
        e.stopPropagation();
    };

    return (
        <section className='content_card_overlay' onClick={onClose}>
            <div className='content_card_container' onClick={handleCardClick}>
                <header className='flex_row card_header'>
                    <div className='flex_column just_align_center'>
                        <h1>{tomeSet}</h1>
                        <div className='line_divider'></div>
                        <ShiftingText />
                    </div>
                    <nav>   
                        <button onClick={onClose}  className='close_card_x_button background_image'></button>
                    </nav>
                </header>

                <header className='flex_column just_align_center card_title'>
                        <h2>{tomeName}</h2>
                        <div className='line_divider'></div>
                    </header>

                <div className='flex_row just_align_center'>
                    <section>
                        <figure>
                            <img className='project_image' src={tomeImg} alt={tomeName} />
                        </figure>
                    </section>
                    
                    <section>
                        <article>
                            <p>{tomeData}</p>
                        </article>
                    </section>
                </div>

                <footer>
                    <h5>(c) 2025</h5>
                </footer>
            </div>
        </section>
    );
}
