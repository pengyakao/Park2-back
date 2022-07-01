import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import SwitchLabels from './SwitchLabels';
import { useState } from 'react';
import { Input } from '@mui/material';



const ListStyle = {
    width: '100%',
    maxWidth: 600,
    bgcolor: 'background.paper',
};


export default function FAQlist() {
    
    const [isFaq, setFaq] = useState([
        {
            id:1,
            text:"q1;....."
        },
        {
            id:2,
            text:"q2;....."
        },
        {
            id:3,
            text:"q3;....."
        }
    ]);
    
    // const cat = () => {
    //     console.log(123);
    // }

    const FAQadd = () =>{
        console.log("轉新增頁面");
    }


    return (
        <div>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab size="small" color="primary" aria-label="add">
                    <AddIcon onClick={FAQadd} />
                </Fab>
            </Box>

            <List sx={ListStyle} component="nav" aria-label="mailbox folders">
                <ListItem button divider>
                    <ListItemText primary={isFaq[0].id} /><SwitchLabels/>
                </ListItem>
                {/* <Divider /> */}
                <ListItem button divider>
                    <ListItemText primary={isFaq[1].id} /><SwitchLabels/>
                </ListItem>
                <ListItem button divider>
                    <ListItemText primary={isFaq[2].id} /><SwitchLabels/>
                </ListItem>
                {/* <Divider light /> */}
                <ListItem button divider>
                    <ListItemText primary={isFaq[2].id} /><SwitchLabels/>
                </ListItem>
                {/* <Input type='text' onChange={cat}></Input> */}
            </List>
        </div>
    );
}
