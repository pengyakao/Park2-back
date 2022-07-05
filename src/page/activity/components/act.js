import React, { Component } from 'react';
import LayOut from '../../../components/Crystal/LayOut';
import ActCard from "./act_card"
import CardList from './act_card_list';
import { useState } from 'react';
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'



export default function Act() {
    const data = [
        {
            id: 1,
            name: "活動名稱A",
            img: "https://placem.at/places",
            hidden:1
        },
        {
            id: 2,
            name: "活動名稱B",
            img: "https://placem.at/people",
            hidden:0
        }, {
            id: 3,
            name: "活動名稱C",
            img: "https://placem.at/things",
            hidden:1
        }, {
            id: 4,
            name: "活動名稱D",
            img: "https://placem.at/places",
            hidden:1
        }, {
            id: 5,
            name: "活動名稱E",
            img: "https://placem.at/things",
            hidden:1
        }, {
            id: 6,
            name: "活動名稱F",
            img: "https://placem.at/things",
            hidden:1
        }, {
            id: 7,
            name: "活動名稱G",
            img: "https://placem.at/people",
            hidden:1
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

