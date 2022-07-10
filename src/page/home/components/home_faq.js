import React, { Component } from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import FAQlist from './home_faq_list';
import LayOut from '../../../components/layout/LayOut';

import { getFaq } from '../../../api/home/getFaq';


export default function Home_faq() {

    const [data, setData] = useState(
        []
    );



    useEffect(() => {
        async function getData() {
            let faqList = await getFaq().then((result) => {
                setData(result)
            })
            // await setData(prev => ({
            //     ...prev
            //     , textQ: faqList[0].home_FAQ_qu
            // }))
            // await setData(prev => ({
            //     ...prev
            //     , textA: faqList[0].home_FAQ_ans
            // }))
        }
        getData();
    }, [])





    return (
        <div>
            <LayOut />
            <div className='bs_article'>
                <h1>FAQ管理</h1>
                <div>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Fab size="small" color="dark" aria-label="add" href="/home/faq_new">
                            <AddIcon sx={{ color: "black" }} />
                        </Fab>
                    </Box>
                </div>
                <FAQlist listData={data} />
            </div>
        </div>
    )

}
