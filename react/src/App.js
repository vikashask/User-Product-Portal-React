import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import Header from "./components/layout/Header";
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import Login from './components/Login';
import Register from './components/Register';
import EditUser from './components/EditUser';
import AddUser from './components/AddUser';
import User from './components/User';
import AddProduct from './components/product/AddProduct';
import EditProduct from './components/product/EditProduct';
import ViewProduct from './components/product/ViewProduct';
import Test from './components/test/Test';
import StartTest from './components/test/StartTest';


class App extends Component {
  render() {
    return (
      <Router>
          <div>
              <Header subtitle="React Router"/>
              {/* <Sidebar/> */}
              <div>
                    <div>
                    <Switch>
                        <Route path='/' component={Login} exact/>
                        <Route path='/home' component={Home} exact/>
                        <Route path='/register' component={Register} />
                        
                        <Route path='/user' component={User} />
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
                </div>
              
          </div>
      </Router>
  );
  }
}

export default App;
