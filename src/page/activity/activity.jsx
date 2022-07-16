import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Act from './components/act';
import Act_edit from './components/act_edit';
import Act_new from './components/act_new';

import { checkLogin } from '../../api/login/isLogin'

class Activity extends Component {
  state = {}
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/activity" component={Act} exact />
          <Route path="/activity/act_edit/:actId" component={Act_edit} />
          <Route path="/activity/act_new" component={Act_new} />
        </Switch>
      </BrowserRouter>
    );
  }
  componentDidMount = () => {
    checkLogin().then(result=>{
      console.log(result)
    })
  }
}

export default Activity;