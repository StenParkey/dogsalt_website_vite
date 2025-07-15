import React from 'react';

export default function MPRecentProject({ project }) {
    return (
        <section className='mp_recent_project_container'>
            <header>
                <h1>Most Recently..</h1>
                <h3>{project.recentProjectTitle}</h3>
                <div className='line_divider'></div>
            </header>

            <article>
                <p>{project.articleParagraph}</p>
                <aside>{project.articleAside}</aside>
            </article>

            <figure>
                <img src={project.GalleryImgSrc1} alt={`${project.recentProjectTitle} gallery photo 1`} />
                <img src={project.GalleryImgSrc2} alt={`${project.recentProjectTitle} gallery photo 2`} />
                <img src={project.GalleryImgSrc3} alt={`${project.recentProjectTitle} gallery photo 3`} />
                <figcaption>{project.galleryFigcaption}</figcaption>
            </figure>
        </section>
    )
};