import React from 'react';

/* Pages */
import Navbar from './components/navbar'
import Home from './pages/Home'

/* Style */
import './css/header.sass'
import './css/general.sass'
import './css/whatwedo.sass'
import './css/work.sass'
import './css/about.sass'
import './css/contact.sass'
import './css/footer.sass'

function App() {
  return (
    <div className="App container-fluid">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
