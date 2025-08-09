import { moldFlowerTomesArray } from './moldflower_tomes/moldFlowerTomes.js';
// import { mosscrustTomesArray } from './mosscrust_tomes/mosscrustTomes.js';

const sortedDecryptiumArray = [
    {
        tomeSetName: 'The Mold Flower Tomes',
        tomes: moldFlowerTomesArray
    },
    // Add new tome sets as objects like this:
    // {
    //     tomeSetName: 'The Moss Crust Tomes',
    //     tomes: mosscrustTomesArray
    // }
];

const lastTomeSet = sortedDecryptiumArray[sortedDecryptiumArray.length - 1];
const lastDecryptiumEntry = lastTomeSet ? lastTomeSet.tomes[lastTomeSet.tomes.length - 1] : null;

export { sortedDecryptiumArray, lastDecryptiumEntry };