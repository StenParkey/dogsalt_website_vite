import MoldFlowerTomeHover from './moldflower_tomes/moldflower_tome_hover.gif';

class DecryptiumEntry {
    constructor({ tomeSet, tomeImg, tomeName, tomeData }) {
        this.tomeSet = tomeSet;
        this.tomeImg = tomeImg; 
        this.tomeName = tomeName;
        this.tomeData = tomeData;
    }
};

class MoldFlowerTome extends DecryptiumEntry {
    constructor({...rest}) {
        super({...rest, tomeImg: MoldFlowerTomeHover, tomeSet: 'MoldFlowerTome'})
    }
};

//class MossCrustTome extends DecryptiumEntry {}

export { DecryptiumEntry, MoldFlowerTome };