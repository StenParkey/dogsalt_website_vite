import { GameProject } from './projectClass.js';

const BoneSaltProject = new GameProject({
    projectName: 'BoneSalt (Pico8 Game)',
    projectIcon: 'BoneSalt_icon.png'
    //needs way more shit. just a test
}); 

const projectsArray = [
    BoneSaltProject
];
console.log(projectsArray);

export { projectsArray };