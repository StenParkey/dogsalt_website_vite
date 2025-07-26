export function sortProjectsByType(projectsArray) {
    const sorted = {
        music: [],
        film: [],
        game: [],
        app: []
    };
    projectsArray.forEach(project => {
        if (sorted[project.projectType]) {
            sorted[project.projectType].push(project);
        }
    });
    return sorted;
}