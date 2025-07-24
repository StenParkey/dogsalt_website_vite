import React from 'react';

export default function HPUpcomingProjects({ projects }) {
    return (
        <section className='hp_upcoming_projects_container'>
            <header>
                <h1>Coming soon...</h1>
                <div className='line_divider'></div>
            </header>

            <ul>
                {
                    projects.map((project, idx) => (
                        <li key={idx}>
                            <article key={idx}>
                                <figure><img src={project.image}  alt={`${project.title} Teaser Image`}/></figure>

                                <span>
                                    <header>
                                        <h3>{project.title}</h3>
                                    </header>
                                
                                    <p>{project.description}</p>
                                    <aside>{project.aside}</aside>
                                </span>
                            </article>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
};