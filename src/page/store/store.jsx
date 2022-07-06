import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store_each from './store_each'
import store_list from './store_list'

class Store extends Component {
    state = {}
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/store" component={store_list} exact />
                    <Route path="/store/store_edit/:storeId" component={store_each} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Store
