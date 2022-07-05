import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Act from './components/act';
import act_edit from './components/act_edit';
import act_new from './components/act_new';



class Activity extends Component {
  state = {}
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/activity" component={Act} exact />
          <Route path="/activity/act_edit/:actId" component={act_edit} />
          <Route path="/activity/act_new" component={act_new} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Activity;

// import React, { Component } from 'react';


// class Activity extends Component {
//     state = {  } 
//     render() { 
//         return (
//             <h3>活動管理</h3>
//         );
//     }
// }
 
// export default Activity;