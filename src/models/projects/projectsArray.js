import { firstSetOfProjectsArray } from "./firstSetOfProjects/firstSetOfProjects.js";
import { projectSorter } from '../../utils/projectSorter.js';

const allProjectArrays = [
    firstSetOfProjectsArray
];
const projectsArray = allProjectArrays.flat();

const { completed, uncompleted } = projectSorter(projectsArray);
const lastProject = projectsArray[projectsArray.length - 1];

export { completed, uncompleted, lastProject };