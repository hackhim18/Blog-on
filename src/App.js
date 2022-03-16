import React from 'react'
import Home from './pages/home/Home';
import Topbar from './components/topbar/TopBar';
import Single from './pages/single/single';
import Write from './pages/write/Write';
import Settings from './pages/settings/settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';


function App() {
  return (
    <div className='App'>
     <Topbar />
    <Login /> 
    
    </div>
  )
}

export default App;
