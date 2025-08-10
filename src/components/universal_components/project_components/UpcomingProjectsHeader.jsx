import React from 'react';

// Models
import { uncompleted } from '../../../models/projects/projectsArray';

export default function UpcomingProjectsHeader({ onProjectClick }) {
    const allUncompletedProjects = [
        ...uncompleted.music,
        ...uncompleted.film,
        ...uncompleted.game,
        ...uncompleted.app
    ];
    const upcomingProjects = allUncompletedProjects.slice(0, 3);
    const projectListItems = upcomingProjects.map((project, idx) => (
        <li key={idx} onClick={() => onProjectClick(project)}>
            <article className='flex_row_reverse just_align_center cursor_pointer' key={idx}>
                <figure>
                    <img className='project_display_image' src={project.projectIcon}  alt={project.projectName} type='gif'/>
                </figure>

                <span>
                    <header>
                        <h3>{project.projectName}</h3>
                    </header>

                    <p>{project.projectDescription}</p>
                    <aside>{project.projectAside}</aside>
                </span>
            </article>

            <div className='line_divider'></div>
        </li>
    ))

    return (
        <section className='flex_column'>
            <header>
                <h2 className='flex_row_reverse'>Coming soon...</h2>
                <div className='line_divider'></div>
            </header>
            
            <ul className='flex_column just_align_center gallery_wrap_container'>
                {projectListItems}
            </ul>
        </section>
    )
};