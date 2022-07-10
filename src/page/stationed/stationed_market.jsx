import React, { Component } from 'react';
import LayOutMarketSta from '../../components/layout/LayOut_MarketSta';

class Stationed_market extends Component {
    state = {  } 
    render() { 
        return (
            <div>
            <LayOutMarketSta />
            <div className='bs_article'>
                <h1>『攤位』進駐申請清單列表</h1>
            </div>
        </div>
        );
    }
}
 
export default Stationed_market;