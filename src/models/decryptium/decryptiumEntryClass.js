import MoldFlowerTomeHover from './moldflower_tomes/moldflower_tome_hover.gif';
import MossCrustTomeHover from './mosscrust_tomes/mosscrust_tome_hover.gif';
import LumenBloomTomeHover from './lumenbloom_tomes/lumenbloom_tome_hover.gif';

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
        super({...rest, tomeImg: MoldFlowerTomeHover, tomeSet: 'Mold Flower Tome'})
    }
};

class MossCrustTome extends DecryptiumEntry {
    constructor({...rest}) {
        super({...rest, tomeImg: MossCrustTomeHover, tomeSet: 'Moss Crust Tome'})
    }
}

class LumenBloomTome extends DecryptiumEntry {
    constructor({...rest}) {
        super({...rest, tomeImg: LumenBloomTomeHover, tomeSet: 'Lumen Bloom Tome'})
    }
}

export { DecryptiumEntry, MoldFlowerTome, MossCrustTome, LumenBloomTome };