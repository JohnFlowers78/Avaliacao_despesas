import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div>
      <Nav />

      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
