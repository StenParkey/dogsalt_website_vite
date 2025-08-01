import React from 'react';

export default function RecentProjectHeader({ project }) {
    if (!project) return null;
    
    return (
        <section className='recent_project_header_container flex_column'>
            <header>
                <h2>Coming Soon...</h2>
                <div className='line_divider'></div>
            </header>
            
            <article>
                <span>
                    <header>
                        <h3>{project.projectName}</h3>
                    </header>
                    <p>{project.projectDescription}</p>
                    <aside>{project.projectAside}</aside>
                </span>

                <figure>
                    <img src={project.projectIcon} alt={project.projectName} type='gif' />
                </figure>
            </article>
        </section>
    )
};