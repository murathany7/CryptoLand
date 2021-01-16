import React, { Component } from 'react'
import Navbar from './Navbar'
import './App.css'
import { withAuthenticator } from '@aws-amplify/ui-react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import  Home  from './Home'
import CardDetail from './CardDetail'
import Create from './Create';
import AfterOrder from './AfterOrder';

function App() {

    return (
      <Router>
        <Navbar className="navbar navbar-expand-lg navbar-light bg-light"></Navbar>
        <div style={{marginTop:30}}>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/lists/:id" component={CardDetail}  />
        <Route path="/createlisting" component={Create} />
        <Route path="/thanksForYourOrder" component={AfterOrder} />
        </Switch> 
        </div>
      </Router>
    );
  }

export default withAuthenticator(App);
