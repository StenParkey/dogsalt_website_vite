export function projectSorter(projectsArray) {
    const sorted = {
        completed: { music: [], film: [], game: [], app: [] },
        uncompleted: { music: [], film: [], game: [], app: [] }
    };
    projectsArray.forEach(project => {
        const status = project.isCompleted ? 'completed' : 'uncompleted';
        if (sorted[status][project.projectType]) {
            sorted[status][project.projectType].push(project);
        }
    });
    return sorted;
}