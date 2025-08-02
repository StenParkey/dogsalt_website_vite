import React from 'react';
import './App.css';

// Universal Components
import PageHeader from './components/universal_components/navbar_components/PageHeader';
import PageFooter from './components/universal_components/navbar_components/PageFooter';
// Main Components
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import DecryptiumPage from './components/DecryptiumPage';
import AboutdsPage from './components/AboutdsPage';
import CommunityPage from './components/CommunityPage';
import ShopPage from './components/ShopPage';


export default function App() {

  return (
    <>
      <PageHeader 
        webpageTitle='dogsalt_'
        webpageSecondaryTitle='abyssal whimsy....'
      />

      <main>
        <HomePage />
      </main>
      
      <PageFooter 
        copyrightFooter='Copyright dogsalt_ Jul 2025'
        footerSpecialMessage='much love.'
      />
    </>
  )
};
