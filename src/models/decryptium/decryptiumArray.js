import { moldFlowerTomesArray } from './moldflower_tomes/moldFlowerTomes.js';
import { mossCrustTomesArray } from './mosscrust_tomes/mossCrustTomes.js';
import { lumenBloomTomesArray } from './lumenbloom_tomes/lumenBloomTomes.js';

const sortedDecryptiumArray = [
    {
        tomeSetName: 'The Mold Flower Tomes',
        tomes: moldFlowerTomesArray
    },

    {
        tomeSetName: 'The Moss Crust Tomes',
        tomes: mossCrustTomesArray
    },
    {
        tomeSetName: 'The Lumen Bloom Tomes (incomplete)',
        tomes: lumenBloomTomesArray
    }
];

const lastTomeSet = sortedDecryptiumArray[sortedDecryptiumArray.length - 1];
const lastDecryptiumEntry = lastTomeSet ? lastTomeSet.tomes[lastTomeSet.tomes.length - 1] : null;

export { sortedDecryptiumArray, lastDecryptiumEntry };