import React from 'react';

// Components
import UpcomingProjectsHeader from './universal_components/project_components/UpcomingProjectsHeader';
import ProjectHeader from './universal_components/project_components/ProjectHeader';
import LatestDecryptiumEntryHeader from './universal_components/project_components/LatestDecryptiumEntryHeader';
// Models
import { lastCompletedProject } from '../models/projects/projectsArray.js';

export default function HomePage() {
    const displayRecentProject = lastCompletedProject !== null;

    return (
        <>
            {displayRecentProject && (
                <ProjectHeader 
                    headerTitle='Most Recently...'
                    project={lastCompletedProject}
                />
            )}

            <UpcomingProjectsHeader /> 

            <LatestDecryptiumEntryHeader />
        </>
    )
};