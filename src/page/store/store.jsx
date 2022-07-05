import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home_act from '../home/components/home_act'
import Home_act_edit from '../home/components/home_act_edit'
import Home_act_new from '../home/components/home_act_new'
import Home_faq from '../home/components/home_faq'
import Home_faq_edit from '../home/components/home_faq_edit'
import Home_faq_new from '../home/components/home_faq_new'
import Home_news from '../home/components/home_news'
import Home_news_edit from '../home/components/home_news_edit'
import Home_news_new from '../home/components/home_news_new'
import Home_mar from '../home/components/home_mar'
import store_list from './store_list'

class Store extends Component {
    state = {}
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/store" component={store_list} exact />
                    <Route path="/store/store_edit/:storeId" component={Home_act_edit} />
                    <Route path="/store/store_new" component={Home_act_new} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Store
