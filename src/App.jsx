import React from 'react';
import './App.css';

// Components
import PageHeader from './components/universal_components/PageHeader';
import PageFooter from './components/universal_components/PageFooter';
import HomePage from './components/mpcomponents/HomePage';

export default function App() {

  return (
    <>
      <PageHeader 
        webpageTitle='dogsalt_'
        webpageSecondaryTitle='abyssal whimsy....'
      />

      <HomePage />

      <PageFooter 
        copyrightFooter='Copyright dogsalt_ Jul 2025'
        footerSpecialMessage='much love.'
      />
    </>
  )
};
