import React, { Component } from 'react';
import LayOutHome from '../../../components/layout/LayOut_home';

import ActCard from "./home_act_card"
import CardList from './home_card_list';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

import { getActivities } from '../../../api/home/getActivities'
import { getCarousel } from '../../../api/home/getCarousel'


export default function Home_act() {

    const [data, setData] = useState(
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
        async function getData() {
            await getCarousel().then((result) => {
                const listData = result.reverse()
                getActivities().then((result2) => {
                    const listData2 = result2
                    const margeData = listData;
                    listData.forEach(margeList);
                    console.log('margeData', margeData);
                    setData(margeData);
                    function margeList(item, index) {
                        console.log('margeData', margeData)
                        // console.log(item.act_id);
                        let filter = listData2.filter(e => e.act_id == item.act_id)
                        // console.log(filter[0])
                        margeData[index].act_title = filter[0].act_title
                        margeData[index].act_Sdate = filter[0].act_Sdate
                        margeData[index].act_Edate = filter[0].act_Edate
                        margeData[index].act_Stime = filter[0].act_Stime
                        margeData[index].act_Etime = filter[0].act_Etime
                        margeData[index].act_img = filter[0].act_img
                        margeData[index].act_sta = filter[0].act_sta
                    }
                });
            });
        }
        getData()
    }, [])


    return (
        <div>
            <LayOutHome />
            <div className='bs_article'>
                <h1>活動輪播</h1>
                <CardList listData={data} />
            </div>
        </div>
    );

}

