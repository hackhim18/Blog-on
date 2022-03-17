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
  const currentUser = true;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/posts">
          <Home />
        </Route>
        <Route path="/register">
          {currentUser ? <Home /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Home  /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;