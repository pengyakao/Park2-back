import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home_act from './components/home_act';
import Home_faq from './components/home_faq';
import Home_mar from './components/home_mar';
 
class Home extends Component {
    state = {  } 
    render() {
      return (
        <BrowserRouter>
          <Switch>
            <Route path="/home/home_act" component={Home_act} exact />
            <Route path="/home/home_faq" component={Home_faq} exact />
            <Route path="/home/home_mar" component={Home_mar} exact />
          </Switch>
        </BrowserRouter>
      );
    }
  }
   
  export default Home;