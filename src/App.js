import React from 'react'
import Home from './pages/home/Home';
import Topbar from './components/topbar/TopBar';
import Single from './pages/single/single';
import Write from './pages/write/Write';
import Settings from './pages/settings/settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { Routes } from "react-router-dom";
import { BrowserRouter as Router,Link,Route } from "react-router-dom";

function App() {
  
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/">
         <Home />
        </Route>
     
        <Route path="/register">
         <Register />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/write">
          <Write />
        </Route>
        
        <Route path="/settings">
           <Settings /> 
        </Route>
        <Route path="/post/:postId">
           <Single /> 
        </Route>


      </Routes>
    </Router>
  );
}

export default App; 