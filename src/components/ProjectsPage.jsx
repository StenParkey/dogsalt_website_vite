import React from 'react';

// Components 
import RecentProjectHeader from './universal_components/project_components/RecentProjectHeader';
// Models
import { completed, uncompleted, lastProject } from '../models/projects/projectsArray.js';



export default function ProjectsPage({ status = 'uncompleted' }) {
    const projects = status === 'completed' ? completed : uncompleted;

    return (
        <>
            <RecentProjectHeader 
                project={lastProject}
            />

            <div>
                <section>
                    <header>
                        <h2 className='flex_row_reverse'>Music</h2>
                        <div className='line_divider'></div>
                    </header>
                    <ul className='flex_row gallery_wrap_container'>
                        {projects.music.map(project => (
                            <li key={project.projectName}>
                                <figure>
                                    <img className='project_image' src={project.projectIcon} alt={project.projectName} />
                                    <figcaption>{project.projectName}</figcaption>
                                </figure>
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <header>
                        <h2>Film</h2>
                        <div className='line_divider'></div>
                    </header>

                    <ul className='flex_row gallery_wrap_container'>
                        {projects.film.map(project => (
                            <li key={project.projectName}>
                                <figure>
                                    <img className='project_image' src={project.projectIcon} alt={project.projectName} />
                                    <figcaption>{project.projectName}</figcaption>
                                </figure>
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <header>
                        <h2 className='flex_row_reverse'>Games</h2>
                        <div className='line_divider'></div>
                    </header>
                    
                    <ul className='flex_row gallery_wrap_container'>
                        {projects.game.map(project => (
                            <li key={project.projectName}>
                                <figure>
                                    <img className='project_image' src={project.projectIcon} alt={project.projectName} />
                                    <figcaption>{project.projectName}</figcaption>
                                </figure>
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2>Apps</h2>
                    <div className='line_divider'></div>

                    <ul className='flex_row gallery_wrap_container'>
                        {projects.app.map(project => (
                            <li key={project.projectName}>
                                <figure>
                                    <img className='project_image' src={project.projectIcon} alt={project.projectName} />
                                    <figcaption>{project.projectName}</figcaption>
                                </figure>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </>
    )
};