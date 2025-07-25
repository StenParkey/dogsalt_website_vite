import React from 'react';

// Components 
import RecentProjectHeader from './universal_components/project_components/RecentProjectHeader';

// aight goobers so heres the plan. So this page is gonna be a reusable container that will dynamically load in the corresoponding projects
// upcoming or recent to the page depending on which nav link or which psuedopage is navigated to. A couple of page elements will change via 
// props as well.


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