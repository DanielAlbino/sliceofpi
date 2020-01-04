import React from 'react';

/* Pages */
import Navbar from './components/navbar'
import Home from './pages/Home'

/* Style */
import './css/general.sass'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
