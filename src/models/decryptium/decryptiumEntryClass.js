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
        super({...rest, tomeImg: './moldflower_tomes/moldflower_tome_hover.gif', tomeSet: 'MoldFlowerTome'})
    }
};

//class MossCrustTome extends DecryptiumEntry {}

export { DecryptiumEntry, MoldFlowerTome };