import React, { Component } from 'react'
import './store_each.css'
import LayOut from '../../components/Crystal/LayOut';

class Store_each extends Component {
    state = {}
    render() {
        return (
            <div className="all-cantainer">
                <LayOut />
                <div className="SC-container">
                    <h1>1店家列表</h1>
                    <h1>2店家列表</h1>
                    <h1>3店家列表</h1>
                    <h1>4店家列表</h1>
                    <h1>5店家列表</h1>
                </div>
            </div>
        )
    }
}

export default Store_each
