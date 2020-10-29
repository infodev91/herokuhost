import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './component/pages/Home';
import About from './component/pages/About';
import Contact from './component/pages/Contact';
import Navbar from './component/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Notfound from './component/pages/Notfound';
import addUser from './component/users/addUser';
import editUser from './component/users/editUser';
import User from './component/users/User';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/user/add" component={addUser} />
          <Route exact path="/user/edit/:id" component={editUser} />
          <Route exact path="/user/:id" component={User} />
          
          <Route component={Notfound}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
