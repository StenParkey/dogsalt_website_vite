import { MusicProject, FilmProject, GameProject, AppProject } from '../projectClass.js';

// Asset Imports
import tarnishedEpIcon from './project_assets/tarnished_ep_icon.gif';
import wrappedOneFilmIcon from './project_assets/thewrappedone_icon_hover.gif';
import boneSaltGameIcon from './project_assets/bonesalt_hover_icon.gif';
import tomePromptAppIcon from './project_assets/tomeprompt_hover.gif';


// Music 
const tarnishedEp = new MusicProject({
    projectName: 'Tarnished (EP)',
    projectIcon: tarnishedEpIcon,
    projectDescription: 'A shoegaze EP made by challenging times.',
    projectAside: 'Written during the winter of 2024.',
    teaserAudio: 'tarnishedTeaser.mp3'
});

// Film
const wrappedOneFilm = new FilmProject({
    projectName: 'The Wrapped One',
    projectIcon: wrappedOneFilmIcon,
    projectDescription: 'A surreal analog horror short film about a mysterious dialogue.',
    projectAside: 'This project features a character from BoneSalt.',
    medium: 'Digital Video',
    filmPoster: 'wrappedOnePoster.png'
});


// Games
const boneSaltGame = new GameProject({
    projectName: 'BoneSalt',
    projectIcon: boneSaltGameIcon,
    projectDescription: 'Warp, slash, and blast your way through arcane abominations in BoneSalt.',
    projectAside: 'This is the first game ive ever developed',
    gameEngine: 'Pico8',
    gameGenre: 'Dungeon Crawler/Roguelike'  
}); 

const blindSaltGame = new GameProject({
    projectName: 'BlindSalt (Pico8)',
    projectIcon: 'BlindSalt_icon.png',
    projectDescription: 'Crawl and scratch your way blindly through the abyss in BlindSalt',
    projectAside: 'This project takes place a long time after Bonesalt.',
    gameEngine: 'Pico8',
    gameGenre: 'Retro Horror' 
});

// Apps 
 const tomePromptApp = new AppProject({
    projectName: 'TomePrompt',
    projectIcon: tomePromptAppIcon,
    projectDescription: 'A cursed command prompt app that acts like a fortune teller/inventory keeper',
    projectAside: 'This project may appear in future projects',
    madeWith: ['JavaScript', 'Node.js', 'Mocha Testing']
});

// Array storage
const firstSetOfProjectsArray = [
    tarnishedEp, wrappedOneFilm,
    boneSaltGame, blindSaltGame,
    tomePromptApp
];

export { firstSetOfProjectsArray };