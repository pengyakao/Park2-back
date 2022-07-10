import React, { Component } from 'react'
import LayOutStore from '../../components/layout/LayOut_store'
import StoreCard from './store_card'
import CardList from './cardList'
import { useState , useEffect } from 'react'
import { getStore } from '../../api/store/getStore'


export default function Store() {
  

    const [data, setData] = useState(
        []
    );

    useEffect(() => {
        async function getData() {
            let faqList = await getStore().then((result) => {
                setData(result)
            })
        }
        getData();
    }, [])


    // const data = [
    //     {
    //         id: 1,
    //         name: '店家名稱A',
    //         img: 'https://placem.at/places',
    //         hidden: 1,
    //     },
    //     {
    //         id: 2,
    //         name: '店家名稱B',
    //         img: 'https://placem.at/people',
    //         hidden: 0,
    //     },
    //     {
    //         id: 3,
    //         name: '店家名稱C',
    //         img: 'https://placem.at/things',
    //         hidden: 1,
    //     },
    //     {
    //         id: 4,
    //         name: '店家名稱D',
    //         img: 'https://placem.at/places',
    //         hidden: 1,
    //     },
    //     {
    //         id: 5,
    //         name: '店家名稱E',
    //         img: 'https://placem.at/things',
    //         hidden: 1,
    //     },
    //     {
    //         id: 6,
    //         name: '店家名稱F',
    //         img: 'https://placem.at/things',
    //         hidden: 1,
    //     },
    //     {
    //         id: 7,
    //         name: '店家名稱G',
    //         img: 'https://placem.at/people',
    //         hidden: 1,
    //     },
    //     {
    //         id: 7,
    //         name: '店家名稱H',
    //         img: 'https://placem.at/things',
    //         hidden: 1,
    //     },
    // ]

    return (
        <div>
            <LayOutStore />
            <div className="bs_article">
                <h1>店家管理</h1>
                <CardList listData={data} />
            </div>
        </div>
    )
}
