// Howdy yall so im making a lil section on how to make different objects with these classes

// Music Project
//
// const tarnishedEp = new MusicProject({
//     projectName: 'Tarnished (EP)',
//     projectIcon: 'tarnishedEpIcon.png',
//     projectDescription: 'A shoegaze EP inspired by challenging times.',
//     projectAside: 'Written during the winter of 2024.',
//     teaserAudio: 'tarnishedTeaser.mp3'
// });
//
// Completed Music Project
//
// tarnishedEp.completeProject({
//     albumArt: 'tarnishedEpArt.png',
//     tracks: [
//         { title: 'Faded', length: '2:58' },
//         { title: 'Ashen', length: '3:12' },
//         { title: 'Tarnished', length: '4:05' }
//     ],
//     article: 'This EP explores themes of loss and renewal through layered guitars and dreamy vocals.',
//     contentGallery: ['tarnishedEpArt.png', 'studioPhoto.jpg']
// });
//
// Film Project
//
// const wrappedOneFilm = new FilmProject({
//     projectName: 'The Wrapped One',
//     projectIcon: 'theWrappedOneIcon.png',
//     projectDescription: 'A surreal analog horror short film about a mysterious dialogue.',
//     projectAside: 'Premiered at the Abyssal Film Fest.',
//     medium: 'Digital Video',
//     filmPoster: 'wrappedOnePoster.png'
// });
//
// Completed Film Project
// 
// wrappedOneFilm.completeProject({
//     length: '12 min',
//     film: 'theWrappedOneFilm.mp4',
//     article: 'This film explores the boundaries of reality and memory through experimental visuals.',
//     contentGallery: ['wrappedOnePoster.png', 'filmStill1.jpg']
// });
// 
// Game Project
//
// const cryptRunnerGame = new GameProject({
//     projectName: 'Crypt Runner',
//     projectIcon: 'cryptRunnerIcon.png',
//     projectDescription: 'A fast-paced endless runner with cryptic puzzles.',
//     projectAside: 'Now available on PC and consoles.',
//     gameEngine: 'Unity',
//     gameGenre: 'Endless Runner'
// });
// Completed Game Project
//
// cryptRunnerGame.completeProject({
//     availableOn: ['PC', 'PS5', 'Xbox Series X'],
//     game: 'cryptRunnerGame.zip',
//     article: 'Crypt Runner challenges players with procedurally generated levels and hidden secrets.',
//     contentGallery: ['cryptRunnerScreenshot1.png', 'cryptRunnerScreenshot2.png']
// });
//
// App Project
//
// const saltNotesApp = new AppProject({
//     projectName: 'SaltNotes',
//     projectIcon: 'saltNotesIcon.png',
//     projectDescription: 'A minimalist note-taking app for creative minds.',
//     projectAside: 'Now available for all platforms.',
//     madeWith: ['Electron', 'React', 'CSS']
// });
//
// Completed App Project 
//
// saltNotesApp.completeProject({
//     availableOn: ['Windows', 'Mac', 'Linux'],
//     app: 'saltNotesInstaller.exe',
//     article: 'SaltNotes is designed for writers and artists who want a distraction-free workspace.',
//     contentGallery: ['saltNotesScreenshot1.png', 'saltNotesScreenshot2.png']
// });

// The actual code starts here.
// Master Project class
class Project {
    constructor({ projectName, projectType, projectIcon, projectDescription, projectAside }) {
        this.projectName = projectName;
        this.projectType = projectType;
        this.projectIcon = projectIcon; 
        this.projectDescription = projectDescription;
        this.projectAside = projectAside;
        this.isCompleted = false;
        this.article = null;
        this.contentGallery = null;
    }

    completeProject({ article, contentGallery }) {
        this.isCompleted = true;
        this.article = article;
        this.contentGallery = contentGallery;
    }
}

// Music Project Class
class MusicProject extends Project {
    constructor({ teaserAudio, ...rest }) {
        super({ ...rest, projectType: 'music' });
        this.teaserAudio = teaserAudio;
        this.albumArt = null;
        this.tracks = null;
    }
    
    completeProject({ albumArt, tracks, article, contentGallery }) {
        this.isCompleted = true;
        this.albumArt = albumArt;
        this.tracks = tracks;
        this.article = article;
        this.contentGallery = contentGallery;
    }
}

// Film Project Class 
class FilmProject extends Project {
    constructor({ medium, filmPoster, ...rest }) {
        super({ ...rest, projectType: 'film' });
        this.medium = medium;
        this.filmPoster = filmPoster;
        this.length = null;
        this.film = null;
    }
    
    completeProject({ length, film, article, contentGallery }) {
        this.isCompleted = true;
        this.length = length;
        this.film = film;
        this.article = article;
        this.contentGallery = contentGallery;
    }
}

// Game Project Class
class GameProject extends Project {
    constructor({ gameEngine, gameGenre, ...rest }) {
        super({ ...rest, projectType: 'game' });
        this.gameEngine = gameEngine;
        this.gameGenre = gameGenre;
        this.availableOn = null;
        this.game = null;
    }

    completeProject({ availableOn, game, article, contentGallery }) {
        this.isCompleted = true;
        this.availableOn = availableOn;
        this.game = game;
        this.article = article;
        this.contentGallery = contentGallery;
    }
}

// App Project Class 
class AppProject extends Project {
    constructor({ madeWith, ...rest }) {
        super({ ...rest, projectType: 'app' });
        this.madeWith = madeWith;
        this.availableOn = null;
        this.app = null;
    }

    completeProject({ availableOn, app, article, contentGallery }) {
        this.isCompleted = true;
        this.availableOn = availableOn;
        this.app = app;
        this.article = article;
        this.contentGallery = contentGallery;
    }
}

export { Project, MusicProject, FilmProject, GameProject, AppProject };