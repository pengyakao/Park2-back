import React, { Component } from 'react';
import LayOut from '../../../components/Crystal/LayOut';
import CardList from './act_card_list';

import { useState } from 'react';
import ActCard from "./act_card"
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

export default function Act() {
    const data = [
        {
            act_id: 1,
            act_title: "DJ Night in PARK2 ✦ Question Mark",
            act_img: "https://placem.at/places",
            act_sta:1
        },
        {
            act_id: 2,
            act_title: "我出去一下．風格品牌出店計畫 ：生活裝飾篇",
            act_img: "https://placem.at/people",
            act_sta:1
        }, {
            act_id: 3,
            act_title: "PPK設計師交流之夜IN草悟道生活圈C",
            act_img: "https://placem.at/things",
            act_sta:1
        }, {
            act_id: 4,
            act_title: "我出去一下．城市裡的戶外生活篇",
            act_img: "https://placem.at/places",
            act_sta:1
        }, {
            act_id: 5,
            act_title: "𝐃𝐉 𝐍𝐈𝐆𝐇𝐓 |  游璨賓 ",
            act_img: "https://placem.at/things",
            act_sta:1
        }, {
            act_id: 6,
            act_title: "劍聚 𝐢𝐧 𝐭𝐡𝐞 𝐏𝐀𝐑𝐊𝟐",
            act_img: "https://placem.at/things",
            act_sta:1
        }, {
            act_id: 7,
            act_title: "星際大戰塔圖因模型展示",
            act_img: "https://placem.at/people",
            act_sta:1
        }, {
            act_id: 8,
            act_title: "我出去一下《生活裝飾篇》",
            act_img: "https://placem.at/people",
            act_sta:1
        }
    ]

    return (
        <div>
            <LayOut />
            <div className='bs_article'>
                <h1>活動管理</h1>
                <CardList listData={data} />
            </div>
        </div>
    );

}