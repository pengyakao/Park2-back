import * as React from 'react';
import { useState } from 'react';
import { Input } from '@mui/material';
import { styled } from '@mui/material/styles';
import FAQ_item from './home_faq_item';
import List from '@mui/material/List';



const ListStyle = {
    width: '100%',
    bgcolor: 'background.paper',
};

const FAQlist = ({ listData }) => {

    console.log('listData', listData)

    return (
        <div>
            <List sx={ListStyle} component="nav" aria-label="mailbox folders">
                {
                    listData.map((item) => {
                        console.log(item)
                        const { id, textQ, textA, hidden } = item
                        return (
                            <FAQ_item
                                key = {id}
                                id = {id}
                                textQ = {textQ}
                                textA = {textA}
                                hidden = {hidden}
                            />
                        );
                    })
                }
            </List>
        </div >
    );
}

export default FAQlist
