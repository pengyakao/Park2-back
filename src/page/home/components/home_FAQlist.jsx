import * as React from 'react';
// import Box from '@mui/material/Box';
// import Fab from '@mui/material/Fab';
// import AddIcon from '@mui/icons-material/Add';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useState } from 'react';
import { Input } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
import SwitchLabels from './SwitchLabels';


const ListStyle = {
    width: '100%',
    maxWidth: 600,
    bgcolor: 'background.paper',
};




export default function Home_FAQlist() {

    const [isFaq, setFaq] = useState([
        {
            id: 1,
            text: "q1;....."
        },
        {
            id: 2,
            text: "q2;....."
        },
        {
            id: 3,
            text: "q3;....."
        }
    ]);

    const [ischeck, setCheck] = useState(true)

    



    return (
        <div>

            <List sx={ListStyle} component="nav" aria-label="mailbox folders">
                <ListItem button divider>
                    <ListItemText primary={isFaq[0].text} />
                    <SwitchLabels />
                </ListItem>
                {/* <Divider /> */}
                <ListItem button divider>
                    <ListItemText primary={isFaq[1].text} />
                    <SwitchLabels />
                </ListItem>
                <ListItem button divider>
                    <ListItemText primary={isFaq[2].text} />
                    <SwitchLabels />
                </ListItem>
                {/* <Divider light /> */}
                <ListItem button divider>
                    <ListItemText primary={isFaq[2].text} />
                    <SwitchLabels />
                </ListItem>
            </List>
        </div>
    );
}
