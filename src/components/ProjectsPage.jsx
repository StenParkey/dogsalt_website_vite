import React from 'react';

// Components 
import RecentProjectHeader from './universal_components/project_components/RecentProjectHeader';


// This all might be fucked, i might want to refactor each gallery as a seperate component that can be rendered, and if on either upcoming projects
// or recent projects, it will display the corresponding content dynamically in reusable components

//update: im currently doin that shit rnnnn


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

                    </ul>
                </section>

                <section>
                    <h2>Film</h2>

                    <ul>

                    </ul>
                </section>

                <section>
                    <h2>Games</h2>

                    <ul>

                    </ul>
                </section>

                <section>
                    <h2>Apps</h2>

                    <ul>

                    </ul>
                </section>
            </div>
        </>
    )
};