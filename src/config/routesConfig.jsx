import React from 'react';

// Components 
import HomePage from '../components/HomePage';
import ProjectsPage from '../components/ProjectsPage';
import DecryptiumPage from '../components/DecryptiumPage';
import AboutdsPage from '../components/AboutdsPage';
import CommunityPage from '../components/CommunityPage';
import ShopPage from '../components/ShopPage';

export const routes = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/upcoming-projects',
        element: <ProjectsPage status='uncompleted' />,
    },
    {
        path: '/recent-projects',
        element: <ProjectsPage status='completed' />,
    },
    {
        path: '/decryptium',
        element: <DecryptiumPage />,
    },
    {
        path: '/about-ds_',
        element: <AboutdsPage />,
    },
    {
        path: '/community',
        element: <CommunityPage />,
    },
    {
        path: '/shop',
        element: <ShopPage />,
    }
];
