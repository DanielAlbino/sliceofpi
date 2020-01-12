import React from 'react';

/* Components */
import Navbar from './components/navbar'

/* Pages */
import Home from './pages/Home'
import WhatWeDo from './pages/WhatWeDo'

/* Style */
import './css/header.sass'
import './css/general.sass'
import './css/whatwedo.sass'
import './css/work.sass'
import './css/about.sass'
import './css/contact.sass'
import './css/footer.sass'

/* Main Function - APP */
function App() {
  return (
    <div className="App container-fluid">
      <Navbar />
      <Home />
      <WhatWeDo />
    </div>
  );
}

export default App;
