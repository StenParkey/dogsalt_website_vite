import React from 'react';

export default function RecentProjectHeader({ project }) {
    return (
        <section className='recent_project_header_container'>
            <header>
                <h1>Most Recently..</h1>
                <div className='line_divider'></div>
            </header>
            
            <article>
                <span>
                    <header>
                        <h3>{project.recentProjectTitle}</h3>
                    </header>
                    <p>{project.articleParagraph}</p>
                    <aside>{project.articleAside}</aside>
                </span>

                <figure>
                    <img src={project.image} alt={project.recentProjectTitle} type='png' />
                </figure>
            </article>
        </section>
    )
};