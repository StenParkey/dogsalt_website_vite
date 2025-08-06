// projects array
import { firstSetOfProjectsArray } from "./firstSetOfProjects/firstSetOfProjects.js";
import { projectSorter } from '../../utils/projectSorter.js';

const allProjectArrays = [
    firstSetOfProjectsArray
];
const projectsArray = allProjectArrays.flat();

const { completed, uncompleted } = projectSorter(projectsArray);

// Get the very last project from the original array.
const lastProject = projectsArray[projectsArray.length - 1];

// This now provides the most recent project, completed or not.
const lastCompletedProject = lastProject.isCompleted ? lastProject : null;
const lastUncompletedProject = !lastProject.isCompleted ? lastProject : null;

export { completed, uncompleted, lastCompletedProject, lastUncompletedProject };