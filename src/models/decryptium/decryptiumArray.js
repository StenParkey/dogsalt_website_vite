import { moldFlowerTomesArray } from './moldflower_tomes/moldFlowerTomes.js';

const allTomesArray = [
    moldFlowerTomesArray
];
const decryptiumArray = allTomesArray.flat();
const lastDecryptiumEntry = decryptiumArray[decryptiumArray.length - 1] || null;


// debug logs
console.log( decryptiumArray);
console.log(lastDecryptiumEntry);

export { decryptiumArray, lastDecryptiumEntry };