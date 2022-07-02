import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import FAQlist from './home_faq_list';
import LayOut from '../../../components/Crystal/LayOut';

export default function Home_faq() {

    var data = [
        {
            id: 1,
            textQ: "Q1:問題一問題一問題一問題一問題一問題一",
            textA: "回答1回答1回答1回答1回答1回答1回答1回答1回答1",
            hidden: 0
        },
        {
            id: 2,
            textQ: "Q2:問題二問題二問題二問題二問題二問題二",
            textA: "回答2回答2回答2回答2回答2回答2回答2回答2回答2",
            hidden: 1
        },
        {
            id: 3,
            textQ: "Q3:問題三問題三問題三問題三問題三問題三",
            textA: "回答3回答3回答3回答3回答3回答3回答3回答3回答3",
            hidden: 1
        },
        {
            id: 4,
            textQ: "Q4:問題四問題四問題四問題四問題四問題四",
            textA: "回答4回答4回答4回答4回答4回答4回答4回答4回答4",
            hidden: 1
        }
    ]

   


    return (
        <div>
            <LayOut />
            <div className='bs_article'>
                <div>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Fab size="small" color="black" aria-label="add" href="/home/faq_new">
                            <AddIcon />
                        </Fab>
                    </Box>
                </div>
                <FAQlist listData={data} />
            </div>
        </div>
    )

}
