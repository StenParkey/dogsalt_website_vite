import React from 'react';

// Components
import RecentProjectHeader from './universal_components/project_components/RecentProjectHeader';
import UpcomingProjectsHeader from './universal_components/project_components/UpcomingProjectsHeader';
import LatestDecryptiumEntryHeader from './universal_components/project_components/LatestDecryptiumEntryHeader';

export default function HomePage() {
    return (
        <>
            <RecentProjectHeader />

            <UpcomingProjectsHeader />

            <LatestDecryptiumEntryHeader />
        </>
    )
};