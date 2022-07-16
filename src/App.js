import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './page/home/home';
import Activity from './page/activity/activity.jsx';
import Store from './page/store/store';
import Store_each from './page/store/store_each';
import Stationed_store from './page/stationed/stationed_store';
import Stationed_store_each from './page/stationed/stationed_store_each';
import Stationed_market from './page/stationed/stationed_market';
import Stationed_market_each from './page/stationed/stationed_market_each';
import User from './page/user/user';
import User_edit from './page/user/user_edit';
import Login from './page/login/login';

// import Ally from './page/ally_compontents';

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/home" component={Home} />
            <Route path="/activity" component={Activity}/>
            <Route path="/store" component={Store} exact/>
            <Route path="/store/:storeId" component={Store_each} />
            <Route path="/stationed_store" component={Stationed_store} exact/>
            <Route path="/stationed_store/:applyId" component={Stationed_store_each} />
            <Route path="/stationed_market" component={Stationed_market} exact/>
            <Route path="/stationed_market/:applyId" component={Stationed_market_each} />
            <Route path="/user" component={User} exact/>
            <Route path="/user/:userId" component={User_edit} />
            {/* login */}
            {/* <Route path="/ally" component={Ally} /> */}
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
