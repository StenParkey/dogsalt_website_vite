import React from 'react';

// Components
import UpcomingProjectsHeader from './universal_components/project_components/UpcomingProjectsHeader';
import ProjectHeader from './universal_components/project_components/ProjectHeader';
import LatestDecryptiumEntryHeader from './universal_components/project_components/LatestDecryptiumEntryHeader';
// Models
import { lastCompletedProject } from '../models/projects/projectsArray.js';
import { lastDecryptiumEntry } from '../models/decryptium/decryptiumArray.js';

export default function HomePage({ onProjectClick, onTomeClick  }) {
    const displayRecentProject = lastCompletedProject !== null;

    return (
        <>
            {displayRecentProject && (
                <ProjectHeader 
                    headerTitle='Most Recently...'
                    project={lastCompletedProject}
                    onClick={onProjectClick} 
                />
            )}

            <UpcomingProjectsHeader onProjectClick={onProjectClick} /> 

            <LatestDecryptiumEntryHeader 
                decryptiumEntry={lastDecryptiumEntry}
                onTomeClick={onTomeClick}
            />
        </>
    )
};