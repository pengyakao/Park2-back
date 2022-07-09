import React, { Component } from 'react';
import LayOut from '../../../components/Crystal/LayOut';
import ActCard from "./home_act_card"
import CardList from './home_card_list';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

import { getActivities } from '../../../api/home/getActivities'

export default function Home_act() {
    
    const [data, setData] = useState(
        []
    );
    
    const [data2, setData2] = useState(
        []
    );

    // const data = [
    //     {
    //         id: 1,
    //         name: "活動名稱A",
    //         img: "https://placem.at/places",
    //         hidden: 1
    //     },
    //     {
    //         id: 2,
    //         name: "活動名稱B",
    //         img: "https://placem.at/people",
    //         hidden: 0
    //     }, {
    //         id: 3,
    //         name: "活動名稱C",
    //         img: "https://placem.at/things",
    //         hidden: 1
    //     }, {
    //         id: 4,
    //         name: "活動名稱D",
    //         img: "https://placem.at/places",
    //         hidden: 1
    //     }, {
    //         id: 5,
    //         name: "活動名稱E",
    //         img: "https://placem.at/things",
    //         hidden: 1
    //     }, {
    //         id: 6,
    //         name: "活動名稱F",
    //         img: "https://placem.at/things",
    //         hidden: 1
    //     }, {
    //         id: 7,
    //         name: "活動名稱G",
    //         img: "https://placem.at/people",
    //         hidden: 1
    //     }
    // ]



    // 接api (要先input {getActivities})
    useEffect(() => {
        // 要拿 某筆活動 的資料
        async function getData() {
            let faqList = await getActivities().then((result) => {
                setData(result)
            })
        }
        getData();
    }, [])


    return (
        <div>
            <LayOut />
            <div className='bs_article'>
                <h1>輪播活動管理</h1>
                <CardList listData={data} />
            </div>
        </div>
    );

}

