import React from 'react';
import './App.scss'; // If you've moved to SCSS
import Header from './components/Header/Header';
import AnnounceBar from './components/AnnounceBar/AnnounceBar';
import Section1 from './components/sections/Section1';



function App() {
  return (
    <div className="App">
      <AnnounceBar />
      <Header />
      <Section1 />

    </div>
  );
}

export default App;
