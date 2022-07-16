import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home_act from './components/home_act';
import Home_act_edit from './components/home_act_edit';
import Home_act_new from './components/home_act_new';
import Home_faq from './components/home_faq';
import Home_faq_edit from './components/home_faq_edit';
import Home_faq_new from './components/home_faq_new';
import Home_news from './components/home_news';
import Home_news_edit from './components/home_news_edit';
import Home_news_new from './components/home_news_new';
import Home_mar from './components/home_mar';

import { checkLogin } from '../../api/login/isLogin'

class Home extends Component {
  state = {}
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/home/act" component={Home_act} exact />
          <Route path="/home/act_edit/:actId" component={Home_act_edit} />
          <Route path="/home/act_new" component={Home_act_new} />
          <Route path="/home/news" component={Home_news} exact />
          <Route path="/home/news_edit/:newsId" component={Home_news_edit} />
          <Route path="/home/news_new" component={Home_news_new} />
          <Route path="/home/faq" component={Home_faq} exact />
          <Route path="/home/faq_edit/:faqId" component={Home_faq_edit} />
          <Route path="/home/faq_new" component={Home_faq_new} />
          <Route path="/home/mar" component={Home_mar} exact />
        </Switch>
      </BrowserRouter>
    );
  }
  componentDidMount = () => {
    checkLogin().then((result)=>{
      console.log(result)
    })
  }
}

export default Home;