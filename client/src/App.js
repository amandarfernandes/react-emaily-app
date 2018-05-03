import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from './store/actions/index';
import Hoc from './hoc/hoc';
// import logo from './logo.svg';

import './App.css';

import Header from './components/Header/header';
import Landing from './components/Landing/landing';

const Dashboard =() => <h2>Dashboard</h2>
//const LandingPage =() => <h2>Welcome to the Emaily App</h2>
const SurveyNew =()=> <h2>New Survey</h2>

class App extends Component {

  componentDidMount() {
      this.props.fetchUser();
  }

  render() {
    return (
      <div className="container cyan accent-4">
        <BrowserRouter>
          <Hoc>
            <Header />
            <Route path="/" exact component={Landing} />
            <Route path="/surveys" exact component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </Hoc>
        </BrowserRouter>
      </div>
    );
  }

}

export default connect(null, actions)(App);
