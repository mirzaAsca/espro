import React from 'react';
import './App.scss'; // If you've moved to SCSS
import Header from './components/Header/Header';
import AnnounceBar from './components/AnnounceBar/AnnounceBar';



function App() {
  return (
    <div className="App">
      <AnnounceBar />
      <Header />

    </div>
  );
}

export default App;
