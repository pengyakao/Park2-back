import React, { Component } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import LayOut from '../../../components/layout/LayOut';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Newslist from './home_news_list';
import { getNews } from '../../../api/home/getNews';



export default function Home_news() {

    // var data = [
    //     {
    //         home_news_id:1,
    //         home_news_title:"【Rockland】營業時間異動公告",
    //         home_news_sta:1,
    //         home_news_img:"https://placem.at/things",
    //         home_news_Sdate:"2022-04-01",
    //         home_news_Edate:"2022-04-03",
    //         home_news_info:"本週的天氣仍不穩定，期望讓參與活動的品牌主理人、和來到這裡遊逛的大家，都能夠完整體驗到活動的呈現，故審慎評估過後，決定本週《我出去一下．生活裝飾篇》活動取消。<br>但星際大戰為主題的品牌出店計畫仍會在 PARK2 B1舉行！除了會在現場販售星際大戰相關的周邊外，也邀請到重量級的星戰收藏家，在5/7活動當天帶來期間限定的精緻收藏展示！星戰迷絕對不能錯過！"
    //     },
    //     {
    //         home_news_id:2,
    //         home_news_title:"【公園裡的星期天】營業時間異動公告",
    //         home_news_sta:1,
    //         home_news_img:"https://placem.at/things",
    //         home_news_Sdate:"2022-04-05",
    //         home_news_Edate:"2022-04-06",
    //         home_news_info:"因應疫情狀況，新村站著吃烤肉員工採取分流上班制，<br>為讓每位客人都能夠享有完整的桌邊服務，<br>故營業開放調整如下：<br>➜5/14-5/15本週末暫不開放內用，僅提供外送及外帶服務！<br>➜5/16-5/22，內用僅開放7桌部分座位！<br>➜5/23起恢復正常營業<br>.<br>造成不便，敬請見諒！"
    //     },
    //     {
    //         home_news_id:3,
    //         home_news_title:"【新村站著吃烤肉】營業時間異動公告",
    //         home_news_sta:1,
    //         home_news_img:"https://placem.at/things",
    //         home_news_Sdate:"2022-04-01",
    //         home_news_Edate:"2022-04-03",
    //         home_news_info:"4/30(三)起 Sunday in the Park 公園裡的星期天<br>營業時間調整如下：<br>9 : 00 - 20 : 00 (最後點餐時間為 19 : 00 )<br>--------------------------------------<br>▪ 線上訂位：https://reurl.cc/XjX8W3<br>▪ 電話：04 - 2305 - 09290929<br>▪ 地點： PARK2草悟廣場 B1"
    //     },
    //     {
    //         home_news_id:4,
    //         home_news_title:"《我出去一下．生活裝飾篇》活動取消公告",
    //         home_news_sta:0,
    //         home_news_img:"https://placem.at/place",
    //         home_news_Sdate:"2022-04-20",
    //         home_news_Edate:"2022-05-06",
    //         home_news_info:""
    //     },
    // ]
    const [data, setData] = useState(
        []
    );
    useEffect(() => {
        async function getData() {
            let NewsList = await getNews().then((result) => {
                setData(result)
            })
        }
        getData();
    }, [])



    return (
        <div>
            <LayOut />
            <div className='bs_article'>
                <h1>最新公告管理</h1>
                <div>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Fab size="small" color="black" aria-label="add" href="/home/news_new">
                            <AddIcon sx={{ color: "black" }} />
                        </Fab>
                    </Box>
                </div>
                <Newslist listData={data} />
            </div>
        </div>
    )

}
