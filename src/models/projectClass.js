

class Img {
    constructor(src, alt, type) {
        this.src = src
        this.alt = alt
        this.type = type
    }
}

class Vid {
    constructor(src, type) {
        this.src = src
        this.type = type
    }
}

class Audio {
    constructor(src, type) {
        this.src = src
        this.type = type
    }
}

class ProjectTeaserContent {
    constructor() {
        
    }
}

class ProjectReleaseContent {

}

class Project {
    constructor(projectName, projectType, projectTeaserContent, projectReleaseContent) {
        this.projectName = projectName;
        this.projectType = projectType;
        this.projectTeaserContent = projectTeaserContent;
        this.projectReleaseContent = projectReleaseContent;
    }
}




const testMusicProject = {
    projectName: 'testMusicProject',
    type: 'EP',
    teaserContent: {
        img: {
            src: 'img.png',
            alt: 'alt',
            type: 'png'
        },

        vid: {
            src: 'vid.mp4',
            type: 'video/mp4'
        },

        audio: {
            src: 'audio.mp3',
            type: 'audio/mp3'
        },

        description: 'this is a test music project'
    },

    contentGallery: {
        imgs: [
            {src:'img.png', alt:'alt', type:'png'},
            {src:'img.png', alt:'alt', type:'png'}
        ],

        vids: [
            {src:'vid.mp4', alt:'alt', type:'video/mp4'}
        ],

        audio: [
            {src:'img.png', alt:'alt', type:'png'},
            {src:'img.png', alt:'alt', type:'png'},
            {src:'img.png', alt:'alt', type:'png'},
            {src:'img.png', alt:'alt', type:'png'},
            {src:'img.png', alt:'alt', type:'png'},
            {src:'img.png', alt:'alt', type:'png'},
        ],

        article: 'This is a short article about this project, how it was made, what its inspiration was, who and what its for, ect.',
        aside: 'for my project backend storage'
    }
}
