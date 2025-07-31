import React from 'react';

// Components 
import RecentProjectHeader from './universal_components/project_components/RecentProjectHeader';
// Models
import { completed, uncompleted, lastProject } from '../models/projects/projectsArray.js';
// Assets


export default function ProjectsPage({ status = 'uncompleted' }) {
    const projects = status === 'completed' ? completed : uncompleted;

    return (
        <>
            <RecentProjectHeader 
                project={lastProject}
            />

<div>
                <section>
                    <h2>Music</h2>
                    <div className='line_divider'></div>
                    <ul>
                        {projects.music.map(project => (
                            <li key={project.projectName}>
                                <figure>
                                    <img src={project.projectIcon} alt={project.projectName} />
                                    <figcaption>{project.projectName}</figcaption>
                                </figure>
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2>Film</h2>
                    <div className='line_divider'></div>
                    <ul>
                        {projects.film.map(project => (
                            <li key={project.projectName}>
                                <figure>
                                    <img src={project.projectIcon} alt={project.projectName} />
                                    <figcaption>{project.projectName}</figcaption>
                                </figure>
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2>Games</h2>
                    <div className='line_divider'></div>
                    <ul>
                        {projects.game.map(project => (
                            <li key={project.projectName}>
                                <figure>
                                    <img src={project.projectIcon} alt={project.projectName} />
                                    <figcaption>{project.projectName}</figcaption>
                                </figure>
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2>Apps</h2>
                    <div className='line_divider'></div>
                    <ul>
                        {projects.app.map(project => (
                            <li key={project.projectName}>
                                <figure>
                                    <img src={project.projectIcon} alt={project.projectName} />
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