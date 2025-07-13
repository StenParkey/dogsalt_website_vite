import React from 'react';

export default function MPUpcomingProjects({ projects }) {
    return (
        <section className='mp_upcoming_projects_container'>
            <header>
                <h1>Coming soon...</h1>
                <div className='line_divider'></div>
            </header>

            {
                projects.map((project, idx) => (
                    <article key={idx}>
                        <figure><img src={project.image} alt={`${project.title} Teaser Image`}/></figure>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <aside>{project.aside}</aside>
                    </article>
                ))
            }
        </section>
    )
};