import React, { Component } from 'react'
import LayOut from '../../components/Crystal/LayOut'
import StoreCard from './store_card'
import CardList from './store_card_list'
import { useState } from 'react'

export default function store_list() {
    // const [isAct, setAct] = useState([
    //     {
    //         id: 1,
    //         Name: "店家名稱A",
    //         img: "https://placem.at/places"
    //     },
    //     {
    //         id: 2,
    //         Name: "店家名稱B",
    //         img: "https://placem.at/places"
    //     }, {
    //         id: 3,
    //         Name: "店家名稱C",
    //         img: "https://placem.at/places"
    //     }, {
    //         id: 4,
    //         Name: "店家名稱D",
    //         img: "https://placem.at/places"
    //     },
    // ]);
    const data = [
        {
            id: 1,
            name: '店家名稱A',
            img: 'https://placem.at/places',
            hidden: 1,
        },
        {
            id: 2,
            name: '店家名稱B',
            img: 'https://placem.at/people',
            hidden: 0,
        },
        {
            id: 3,
            name: '店家名稱C',
            img: 'https://placem.at/things',
            hidden: 1,
        },
        {
            id: 4,
            name: '店家名稱D',
            img: 'https://placem.at/places',
            hidden: 1,
        },
        {
            id: 5,
            name: '店家名稱E',
            img: 'https://placem.at/things',
            hidden: 1,
        },
        {
            id: 6,
            name: '店家名稱F',
            img: 'https://placem.at/things',
            hidden: 1,
        },
        {
            id: 7,
            name: '店家名稱G',
            img: 'https://placem.at/people',
            hidden: 1,
        },
        {
            id: 7,
            name: '店家名稱H',
            img: 'https://placem.at/things',
            hidden: 1,
        },
    ]

    return (
        <div>
            <LayOut />
            <div className="bs_article">
                <h1>店家管理</h1>
                <CardList listData={data} />
            </div>
        </div>
    )
}
