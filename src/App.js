import React from 'react'
import Home from './pages/home/Home';
import Topbar from './components/topbar/TopBar';
import Single from './pages/single/single';
import Write from './pages/write/Write';


function App() {
  return (
    <div className='App'>
     <Topbar />
      <Write />
    </div>
  )
}

export default App;
