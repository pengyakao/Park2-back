import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import FAQlist from './home_FAQlist';


export default function Home_faq() {

    const FAQadd = () => {
        alert("新增頁面彈跳窗");
    }

    return (
        <div>
            <div>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Fab size="small" color="primary" aria-label="add">
                        <AddIcon onClick={FAQadd} />
                    </Fab>
                </Box>
            </div>
            <FAQlist/>
        </div>
    )

}