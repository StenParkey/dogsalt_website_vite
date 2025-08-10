import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Universal Components
import PageHeader from './components/universal_components/navbar_components/PageHeader';
import PageFooter from './components/universal_components/navbar_components/PageFooter';
import ProjectCard from './components/universal_components/content_cards/ProjectCard';
import DecryptiumCard from './components/universal_components/content_cards/DecryptiumCard';
// Routes
import { routes } from './config/routesConfig.jsx';

export default function App() {
    const [selectedItem, setSelectedItem] = useState(null);
    const handleItemClick = (itemData) => {
        setSelectedItem(itemData);
    };
    const handleCloseCard = () => {
        setSelectedItem(null);
    };
    const renderCard = () => {
        if (!selectedItem) {
            return null;
        }
        if (selectedItem.projectName) {
            return <ProjectCard project={selectedItem} onClose={handleCloseCard} />;
        }
        if (selectedItem.tomeName) {
            return <DecryptiumCard tome={selectedItem} onClose={handleCloseCard} />;
        }
        return null;
    };

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
                            element={React.cloneElement(route.element, { onProjectClick: handleItemClick, onTomeClick: handleItemClick })}
                        />
                    ))}
                </Routes>
            </main>
            <PageFooter
                copyrightFooter='Copyright dogsalt_ Jul 2025'
                footerSpecialMessage='much love.'
            />

            {renderCard()}
        </>
    );
};