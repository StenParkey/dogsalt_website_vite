// UpcomingProjectsHeader.js
import React from 'react';
import { uncompleted } from '../../../models/projects/projectsArray';

export default function UpcomingProjectsHeader() {
    // Combine all uncompleted projects into a single array
    const allUncompletedProjects = [
        ...uncompleted.music,
        ...uncompleted.film,
        ...uncompleted.game,
        ...uncompleted.app
    ];
    
    // Take the first three projects from the combined array
    const upcomingProjects = allUncompletedProjects.slice(0, 3);

    const projectListItems = upcomingProjects.map((project, idx) => (
        <li key={idx}>
            <article className='flex_row_reverse just_align_center' key={idx}>
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