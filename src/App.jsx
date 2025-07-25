import React from 'react';
import './App.css';

// Universal Components
import PageHeader from './components/universal_components/navbar_components/PageHeader';
import PageFooter from './components/universal_components/navbar_components/PageFooter';
// Main Components
import HomePage from './components/HomePage';
import DecryptiumPage from './components/DecryptiumPage';

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
