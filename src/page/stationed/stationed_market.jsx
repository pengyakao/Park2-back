// import React, { Component } from 'react';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import LayOut from '../../components/layout/LayOut';
import Stationed_market_list from './stationed_market_list';
import { getMarketApply, getMarketList } from '../../api/stationed/marketApi'

export default function Stationed_market() {
    const [data, setData] = useState([]);
    const [market, setMarket] = useState([]);

    useEffect(()=>{
        getMarketApply().then((result)=>{
            setData(result)
        })
        getMarketList().then((result)=>{
            setMarket(result)
        })
    },[])

    return (
        <div>
            <LayOut />
            <div className='bs_article'>
                <h1 style={{fontSize: '28px'}}>風格市集進駐申請</h1>
                <Stationed_market_list listData={data} marketData={market}/>
            </div>
        </div>
    )

}
