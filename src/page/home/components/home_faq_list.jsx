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
                        const { home_FAQ_id, home_FAQ_qu, home_FAQ_ans, home_FAQ_sta } = item
                        return (
                            <FAQ_item
                                key = {home_FAQ_id}
                                FAQid = {home_FAQ_id}
                                textQ = {home_FAQ_qu}
                                textA = {home_FAQ_ans}
                                hidden = {home_FAQ_sta}
                            />
                        );
                    })
                }
            </List>
        </div >
    );
}

export default FAQlist
