import React from 'react';

// Components
import MPRecentProject from './MPRecentProject';
import MPUpcomingProjects from './MPUpcomingProjects';
import MPLatestDecryptiumEntry from './MPLatestDecryptiumEntry';

// File Imports
import tomePromptIcon from '../../assets/tome_prompt_icon.png';
import BoneSaltIcon from '../../assets/Bonesalt_icon.png';
import theWrappedOneIcon from '../../assets/the_wrapped_one_icon.png'
import tarnishedEpIcon from '../../assets/tarnished_ep_icon.png';

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
                        {
                            image: BoneSaltIcon, 
                            title: 'BoneSalt (pico8 game)', 
                            description: 'BoneSalt is a retro dungeon crawler survival game built in the fantasy console game engine, Pico 8', 
                            aside: 'this is one of the earliest tales in the dogsalt universe'
                        },
                        {
                            image: theWrappedOneIcon,
                            title: 'The_Wrapped_One.mov (Short Film)', 
                            description: 'The_Wrapped_One.mov is a surreal and bizzare analog horror short film of a dialogue between young Jacky and Reykbein.', 
                            aside: 'this film comes long long after the ending events of BoneSalt'
                        },
                        {
                            image: tarnishedEpIcon, 
                            title: 'Tarnished (EP)', 
                            description: 'Tarnished is a shoegaze inspired by some of my favorite media as well as a very challenging time in my life.', 
                            aside: 'I began working on this album around the same time as building the first model for dogsalt'
                        }
                    ]
                } 
            />

            <MPLatestDecryptiumEntry />
        </main>
    )
};