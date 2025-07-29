import React from 'react';

// Components 
import RecentProjectHeader from './universal_components/project_components/RecentProjectHeader';
// Models
import { projectsArray } from '../models/projects/firstSetOfProjects/firstSetOfProjects.js';
import { sortProjectsByType } from '../utils/projectSorter.js';
const { music, film, game, app } = sortProjectsByType(projectsArray);
// Assets
import tomePromptIcon from '../models/projects/firstSetOfProjects/project_assets/tomeprompt_hover.gif';

export default function ProjectsPage() {
    return (
        <>
            <RecentProjectHeader 
                project={
                            {
                            recentProjectTitle: 'TomePrompt', 
                            recentProjectType: 'Terminal App',
                            image: tomePromptIcon,
                            articleParagraph: 'TomePrompt is a node.js project I built to act like a witchy terminal OS/fortune teller.', 
                            articleAside: 'This project may appear later in future projects', 
                            }
                    }
            />

            <div>
                <section>
                    <h2>Music</h2>

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