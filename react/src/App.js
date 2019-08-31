import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import Header from "./components/layout/Header";
import PageNotFound from './components/PageNotFound';
import Login from './components/Login';
import Home from './components/Home';
import User from './components/User';
import Register from './components/Register';
import EditUser from './components/EditUser';
import AddUser from './components/AddUser';
import AddProduct from './components/product/AddProduct';
import EditProduct from './components/product/EditProduct';
import ViewProduct from './components/product/ViewProduct';
import Test from './components/test/Test';
import StartTest from './components/test/StartTest';

import  requireAuth from './utils/requireAuth';

class App extends Component {
  render() {
    return (
      <Router>
          <div>
              {/* <Header subtitle="React"/> */}
                    <Switch>
                        <Route path='/' component={Login} exact/>
                        <Route path='/register' component={Register} />
                        <Route path='/home' component={requireAuth(Home)} exact/>
                        <Route path='/user' component={requireAuth(User)} />
                        <Route path='/edit-user' component={EditUser} />
                        <Route path='/add-user' component={AddUser} />
                        <Route path='/add-product' component={AddProduct} />
                        <Route path='/edit-product' component={EditProduct} />
                        <Route path='/view-product' component={ViewProduct} />
                        <Route path='/test' component={Test} />
                        <Route path='/start-test' component={StartTest} /> 
                        <Route component={PageNotFound} />
                    </Switch>
          </div>
      </Router>
  );
  }
}

export default App;
