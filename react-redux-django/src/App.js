import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import AddItem from './pages/AddItem';
import Items from './pages/Items'
import HeaderComponent from './components/header/HeaderComponent'
import Dashboard from './pages/Dashboard'
// import NavbarComponent from "./components/NavbarComponent";
// import AddUser from "./components/AddUser";
// import EditUser from "./components/EditUser";
// import PropTypes from 'prop-types'

const App = () => {
  return (
    <div>  
      <Home />
      <div className="container">
      <Switch>
      
      {/* <Route exact path="/" component={HeaderComponent} /> */}
      <Route exact path="/" component={Home} />
      <Route path="/add-item" component={AddItem} />
      <Route path="/items" component={Items} />
      {/* <Route path="/edit/:id" component={EditUser} /> */}
    </Switch>

      </div>
    </div>
  );
};

export default App;
