import React from 'react';

export default function PageFooter({ copyrightFooter, footerSpecialMessage }) {
    return (
        <footer>
            <h4>{copyrightFooter}</h4>
            <h5>{footerSpecialMessage}</h5>
        </footer>
    )
};