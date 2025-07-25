import { GameProject } from './projectClass.js';

// Music 


// Film


// Games
const BoneSaltGameProject = new GameProject({
    projectName: 'BoneSalt (Pico8)',
    projectIcon: 'BoneSalt_icon.png'
    //needs way more shit. just a test
}); 

const BlindSaltGame = new GameProject({
    projectName: 'BlindSalt (Pico8)',
});

// Apps 



const projectsArray = [
    BoneSaltProject
];
console.log(projectsArray);

export { projectsArray };