import React from 'react';

// Components
import UpcomingProjectsHeader from './universal_components/project_components/UpcomingProjectsHeader';
import RecentProjectHeader from './universal_components/project_components/RecentProjectHeader';
import LatestDecryptiumEntryHeader from './universal_components/project_components/LatestDecryptiumEntryHeader';

export default function HomePage() {
    return (
        <>
            <UpcomingProjectsHeader />

            <RecentProjectHeader />

            <LatestDecryptiumEntryHeader />
        </>
    )
};