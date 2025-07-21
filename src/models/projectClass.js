class Project {
    constructor({ projectName, projectType, projectIcon, projectDescription }) {
        this.projectName = projectName;
        this.projectType = projectType;
        this.projectIcon = projectIcon; 
        this.projectDescription = projectDescription;
        this.isCompleted = false;
        this.mainContent = null;
        this.article = null;
        this.aside = null;
        this.contentGallery = null;
    }

    completeProject() {
        this.isCompleted = true;
        this.mainContent = mainContent;
        this.article = article;
        this.aside = aside;
        this.contentGallery = contentGallery;
    }
}


class MusicProject extends Project {
    constructor({ albumArt, tracks, ...rest }) {
        super({...rest, type: 'music'});
        this.albumArt = albumArt;
        this.tracks = tracks;
    }
}

class FilmProject extends Project {
    constructor({ medium, length, ...rest }) {
        super({...rest, type: 'film'});
        this.medium = medium;
        this.length = length;
    }
}


class GameProject extends Project {
    constructor({ gameEngine, availableOn, ...rest }) {
        super({...rest, type: 'game'});
        this.gameEngine = gameEngine;
        this.availableOn = availableOn;
    }
}


class AppProject extends Project {
    constructor({ madeWith, availableOn, ...rest }) {
        super({...rest, type: 'app'});
        this.madeWith = madeWith;
        this.availableOn = availableOn;
    }
}