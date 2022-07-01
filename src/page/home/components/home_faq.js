import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import FAQlist from './home_FAQlist';


export default function Home_faq() {

    return (
        <div>
            <div>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Fab size="small" color="black" aria-label="add" href="/home/home_faq_edit/:faqId">
                        <AddIcon />
                    </Fab>
                </Box>
            </div>
            <FAQlist/>
        </div>
    )

}
