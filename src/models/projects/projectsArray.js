// projects array
import { firstSetOfProjectsArray } from "./firstSetOfProjects/firstSetOfProjects.js";
import { projectSorter } from '../../utils/projectSorter.js';

const allProjectArrays = [
    firstSetOfProjectsArray
];
const projectsArray = allProjectArrays.flat();

const { completed, uncompleted } = projectSorter(projectsArray);

// Combine all completed projects into a single flat array and get the last one.
const allCompletedProjects = [
    ...completed.music,
    ...completed.film,
    ...completed.game,
    ...completed.app
];
const lastCompletedProject = allCompletedProjects[allCompletedProjects.length - 1] || null;

// Combine all uncompleted projects into a single flat array and get the last one.
const allUncompletedProjects = [
    ...uncompleted.music,
    ...uncompleted.film,
    ...uncompleted.game,
    ...uncompleted.app
];
const lastUncompletedProject = allUncompletedProjects[allUncompletedProjects.length - 1] || null;

export { completed, uncompleted, lastCompletedProject, lastUncompletedProject };
