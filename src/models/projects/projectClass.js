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