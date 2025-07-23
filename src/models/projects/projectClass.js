// Master Project class
class Project {
    constructor({ projectName, projectType, projectIcon, projectDescription }) {
        this.projectName = projectName;
        this.projectType = projectType;
        this.projectIcon = projectIcon; 
        this.projectDescription = projectDescription;
        this.isCompleted = false;
        this.article = null;
        this.aside = null;
        this.contentGallery = null;
    }

    completeProject({ article, aside, contentGallery }) {
        this.isCompleted = true;
        this.article = article;
        this.aside = aside;
        this.contentGallery = contentGallery;
    }
}

// Music Project Class
class MusicProject extends Project {
    constructor({ teaserAudio, ...rest }) {
        super({...rest, type: 'music'});
        this.teaserAudio = teaserAudio;
        this.albumArt = null;
        this.tracks = null;
    }
    
    completeProject({ albumArt, tracks, ...rest }) {
        super(rest);
        this.albumArt = albumArt;
        this.tracks = tracks;
    }
}

// Film Project Class 
class FilmProject extends Project {
    constructor({ medium, filmPoster, ...rest }) {
        super({...rest, type: 'film'});
        this.medium = medium;
        this.filmPoster = filmPoster;
        this.length = null;
        this.film = null;
    }
    
    completeProject({ length, film, ...rest }) {
        super(rest);
        this.length = length;
        this.film = film;
    }
}

// Game Project Class
class GameProject extends Project {
    constructor({ gameEngine, gameGenre, ...rest }) {
        super({...rest, type: 'game'});
        this.gameEngine = gameEngine;
        this.gameGenre = gameGenre;
        this.availableOn = null;
        this.game = null;
    }

    completeProject({ availableOn, game, ...rest }) {
        super(rest);
        this.availableOn = availableOn;
        this.game = game;
    }
}

// App Project Class 
class AppProject extends Project {
    constructor({ madeWith, ...rest }) {
        super({...rest, type: 'app'});
        this.madeWith = madeWith;
        this.availableOn = null;
        this.app = null;
    }

    completeProject({ availableOn, app, ...rest}) {
        super(rest); 
        this.availableOn = availableOn;
        this.app = app;
    }
}

export default { Project, MusicProject, FilmProject, GameProject, AppProject };