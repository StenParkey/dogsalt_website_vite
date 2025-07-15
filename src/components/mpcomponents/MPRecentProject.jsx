import React from 'react';

export default function MPRecentProject({ project }) {
    return (
        <section className='mp_recent_project_container'>
            <header>
                <h1>Most Recently..</h1>
                <div className='line_divider'></div>
            </header>

            <figure>
                <img src={project.GalleryImgSrc1} alt={project.recentProjectTitle} />
                <figcaption>
                    <h3>{project.recentProjectTitle}</h3>
                    <p>{project.articleParagraph}</p>
                </figcaption>
                <aside>{project.articleAside}</aside>
            </figure>
        </section>
    )
};