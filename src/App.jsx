// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Universal Components
import PageHeader from './components/universal_components/navbar_components/PageHeader';
import PageFooter from './components/universal_components/navbar_components/PageFooter';
// Routes
import { routes } from './config/routesConfig.jsx';

export default function App() {
    return (
        <>
            <PageHeader
                webpageTitle='dogsalt_'
                webpageSecondaryTitle='abyssal whimsy....'
            />
            <main>
                <Routes>
                    {routes.map((route, index) => (
                        <Route 
                            key={index}
                            path={route.path} 
                            element={route.element} 
                        />
                    ))}
                </Routes>
            </main>
            <PageFooter
                copyrightFooter='Copyright dogsalt_ Jul 2025'
                footerSpecialMessage='much love.'
            />
        </>
    );
};
