import React from 'react';

// Components 
import RecentProjectHeader from './universal_components/project_components/RecentProjectHeader';
// Models
import { music, film, game, app, lastProject } from '../models/projects/projectsArray.js';
// Assets


export default function ProjectsPage() {
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
                        {music.map(project => (
                            <li key={project.projectName}>
                                <figure>
                                    <img src={project.projectIcon} alt={project.projectName} />
                                    <figcaption></figcaption>
                                </figure>
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2>Film</h2>
                    <div className='line_divider'></div>

                    <ul>
                        {film.map(project => (
                            <li key={project.projectName}>
                                <figure>
                                    <img src={project.projectIcon} alt={project.projectName} />
                                    <figcaption></figcaption>
                                </figure>
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2>Games</h2>
                    <div className='line_divider'></div>

                    <ul>
                        {game.map(project => (
                            <li key={project.projectName}>
                                <figure>
                                    <img src={project.projectIcon} alt={project.projectName} />
                                    <figcaption></figcaption>
                                </figure>
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2>Apps</h2>
                    <div className='line_divider'></div>

                    <ul>
                        {app.map(project => (
                            <li key={project.projectName}>
                                <figure>
                                    <img src={project.projectIcon} alt={project.projectName} />
                                    <figcaption></figcaption>
                                </figure>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </>
    )
};