import React from 'react';
import tomePromptIcon from '../../assets/tome_prompt_icon.png';

// Components
import MPRecentProject from './MPRecentProject';
import MPUpcomingProjects from './MPUpcomingProjects';
import MPLatestDecryptiumEntry from './MPLatestDecryptiumEntry';

export default function HomePage() {
    
    return (
        <main>
            <MPRecentProject 
                // Props probably need refactoring. Will do later.
                //img no longer prop, till i fix it
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

            <MPUpcomingProjects 
                // These hardcoded projects will later be removed in favor of passing in Project Class Objects for reusability on other components
                projects={
                    [
                    {image: 'img1.png', title: 'project1', description: 'desc1', aside: 'aside1'},
                    {image: 'img2.png', title: 'project2', description: 'desc2', aside: 'aside2'},
                    {image: 'img3.png', title: 'project3', description: 'desc3', aside: 'aside3'}
                    ]
                } 
            />

            <MPLatestDecryptiumEntry />
        </main>
    )
};