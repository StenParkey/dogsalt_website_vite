import React from 'react';

export default function UpcomingProjectsHeader() {
    const projectListItems = projects.map((project, idx) => (
        <li key={idx}>
            <article key={idx}>
                <figure>
                    <img src={project.image}  alt={`${project.title} Teaser Image`}/>
                </figure>

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

    return (
        <section className='hp_upcoming_projects_container flex_column just_align_center'>
            <header>
                <h2>Coming soon...</h2>
                <div className='line_divider'></div>
            </header>
            
            <ul>
                {projectListItems}
            </ul>
        </section>
    )
};