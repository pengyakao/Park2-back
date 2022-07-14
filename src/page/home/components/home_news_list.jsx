import * as React from 'react';
import { useState } from 'react';
import { Input } from '@mui/material';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import News_item from './home_news_item';



const ListStyle = {
    width: '100%',
    bgcolor: 'background.paper',
};

const Newslist = ({ listData }) => {

    console.log('listData', listData)

    return (
        <div>
            <List sx={ListStyle} component="nav" aria-label="mailbox folders">
                {
                    listData.map((item) => {
                        console.log(item)
                        const { home_news_id, home_news_title, home_news_sta, home_news_img , home_news_Sdate, home_news_Edate, home_news_info } = item
                        return (
                            <News_item
                                key = {home_news_id}
                                home_news_id = {home_news_id}
                                home_news_title = {home_news_title}
                                home_news_sta = {home_news_sta}
                                home_news_img = {home_news_img}
                                home_news_Sdate = {home_news_Sdate}
                                home_news_Edate = {home_news_Edate}
                                home_news_info = {home_news_info}
                            />
                        );
                    })
                }
            </List>
        </div >
    );
}

export default Newslist
