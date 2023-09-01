import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <div className="content-wrapper">
        <div className="main-content">
          <MainContent />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
