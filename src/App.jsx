import React from 'react';
import './styles/App.css';

// Components
import PageHeader from './components/universal_components/PageHeader';
import PageFooter from './components/universal_components/PageFooter';
// Main Components
import HomePage from './components/mpcomponents/HomePage';
import DecryptiumPage from './components/decryptium/DecryptiumPage';

export default function App() {

  return (
    <>
      <PageHeader 
        webpageTitle='dogsalt_'
        webpageSecondaryTitle='abyssal whimsy....'
      />

      <main>
        <DecryptiumPage />
      </main>
      
      <PageFooter 
        copyrightFooter='Copyright dogsalt_ Jul 2025'
        footerSpecialMessage='much love.'
      />
    </>
  )
};
