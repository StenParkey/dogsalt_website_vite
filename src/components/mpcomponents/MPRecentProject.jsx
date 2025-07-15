import React from 'react';

export default function MPRecentProject({ project }) {
    return (
        <section className='mp_recent_project_container'>
            <header>
                <h1>Most Recently..</h1>
                <div className='line_divider'></div>
            </header>
            
            <article>
                <figure>
                    <img src={project.image} alt={project.recentProjectTitle} type='png' />
                    <figcaption>
                        <aside>{project.articleAside}</aside>
                    </figcaption>
                </figure>
                
                <h3>{project.recentProjectTitle}</h3>
                <p>{project.articleParagraph}</p>
            </article>
        </section>
    )
};