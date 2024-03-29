// import React, { Component } from 'react';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import LayOutStation from '../../components/layout/LayOut_stationed';
import Stationed_store_list from './stationed_store_list';
import { getStoreApply } from '../../api/stationed/storeApi'
import { checkLogin } from '../../api/login/isLogin'

export default function Stationed_store() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        checkLogin().then((result)=>{
            console.log(result)
        })
        getStoreApply().then((result)=>{
            setData(result)
        })
    },[])



    // var data = [
    //     {
    //         user_id: 1,
    //         sto_id: null,
    //         user_account: "park2@google.com",
    //         user_password: 12345678,
    //         user_name: "Park2",
    //         user_level: 999,
    //         sto_sta: 1
    //     },
    //     {
    //         user_id: 2,
    //         sto_id: 1,
    //         user_account: "min@google.com",
    //         user_password: 12345678,
    //         user_name: "酉5PM TWCAUDEX",
    //         user_level: 1,
    //         sto_sta: 1
    //     },
    //     {
    //         user_id: 3,
    //         sto_id: 2,
    //         user_account: "alice@google.com",
    //         user_password: 12345678,
    //         user_name: "米弎豆お茶処MISATO",
    //         user_level: 2,
    //         sto_sta: 1
    //     },
    //     {
    //         user_id: 4,
    //         sto_id: 3,
    //         user_account: "bear@google.com",
    //         user_password: 12345678,
    //         user_name: "新村站著吃烤肉",
    //         user_level: 3,
    //         sto_sta: 0
    //     },

    // ]



    return (
        <div>
            <LayOutStation />
            <div className='bs_article'>
                <h1 style={{fontSize: '28px'}}>常駐店家進駐申請</h1>
                <Stationed_store_list listData={data} />
            </div>
        </div>
    )

}
