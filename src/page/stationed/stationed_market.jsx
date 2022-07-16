// import React, { Component } from 'react';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import LayOutStation from '../../components/layout/LayOut_stationed';
import Stationed_market_list from './stationed_market_list';
import { getMarketApply, getMarketList } from '../../api/stationed/marketApi'
import { checkLogin } from '../../api/login/isLogin'

export default function Stationed_market() {
    const [data, setData] = useState([]);
    const [market, setMarket] = useState([]);

    useEffect(()=>{
        checkLogin().then((result)=>{
            console.log(result)
        })
        getMarketApply().then((result)=>{
            setData(result)
        })
        getMarketList().then((result)=>{
            setMarket(result)
        })
    },[])

    return (
        <div>
            <LayOutStation />
            <div className='bs_article'>
                <h1 style={{fontSize: '28px'}}>風格市集進駐申請</h1>
                <Stationed_market_list listData={data} marketData={market}/>
            </div>
        </div>
    )

}
