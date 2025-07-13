import React from 'react';

// Components
import MPRecentProject from './MPRecentProject';
import MPUpcomingProjects from './MPUpcomingProjects';
import MPLatestDecryptiumEntry from './MPLatestDecryptiumEntry';

export default function HomePage() {
    
    return (
        <main>
            <MPRecentProject 
                // Props probably need refactoring. Will do later.
                project={
                    {
                    recentProjectTitle: 'WitchSalt', 
                    recentProjectType: 'Browser Game',
                    articleParagraph: 'WitchSalt is a demo for a text based browser RPG. I built this project after completing a DOM manipulation in vanilla JS course', 
                    articleAside: 'This project is still actually in development. But i needed a project to put here lmao', 
                    GalleryImgSrc1: 'img1.png', 
                    GalleryImgSrc2: 'img2.png', 
                    GalleryImgSrc3: 'img3.png', 
                    galleryFigcaption: 'Roll dice, cast spells, and traverse blindly in Witchsalt....'
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