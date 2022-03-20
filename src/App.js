import React from 'react'
import Home from './pages/home/Home';
import Topbar from './components/topbar/TopBar';
import Single from './pages/single/single';
import Write from './pages/write/Write';
import Settings from './pages/settings/settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { Switch } from "react-router-dom";
import { BrowserRouter as Router,Link,Route } from "react-router-dom";
 

function App() {
  const user = true; 
  return (
    <Router>
      
      <Topbar />
      <Switch>
        <Route exact path="/"><Home /> </Route>
      
        <Route exact path="/register">{user ? <Home /> : <Register />}</Route>  

        <Route path="/login">{user ? <Home  /> : <Login />}</Route>

        <Route path="/post/:id"><Single /></Route>

        <Route path="/write">{user ? <Write /> : <Register />}</Route>

        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
         
      </Switch>
    </Router>
  );
}

export default App;