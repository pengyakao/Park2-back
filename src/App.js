import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './page/home/home';
import Activity from './page/activity/activity';
import Activity_each from './page/activity/activity_each';
import Store from './page/store/store';
import Store_each from './page/store/store_each';
import Stationed from './page/stationed/stationed';
import Stationed_each from './page/stationed/stationed_each';
import User from './page/user/user';
import User_each from './page/user/user_each';
import Login from './page/login/logon';

import Ally from './page/ally_compontents';


import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/home" component={Home} />
            <Route path="/activity" component={Activity} exact/>
            <Route path="/activity/:activityId" component={Activity_each} />
            <Route path="/store" component={Store} exact/>
            <Route path="/store/:storeId" component={Store_each} />
            <Route path="/stationed" component={Stationed} exact/>
            <Route path="/stationed/:stationedId" component={Stationed_each} />
            <Route path="/user" component={User} exact/>
            <Route path="/user/:userId" component={User_each} />
            <Route path="/ally" component={Ally} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
