import React from 'react';

// Components 
import { ShiftingText } from './ShiftingText';

export default function PageFooter({ copyrightFooter, footerSpecialMessage }) {
    return (
        <footer className='page_footer flex_column just_align_center'>
            <div className='line_divider'></div>
            <ShiftingText />

            <h4>{copyrightFooter}</h4>
            <h5>{footerSpecialMessage}</h5>
        </footer>
    )
};