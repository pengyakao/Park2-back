import * as React from 'react'
import SwitchLabels from './SwitchLabels';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';



const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 15,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 2,
        '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 12,
        height: 12,
        borderRadius: 6,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
        boxSizing: 'border-box',
    },
}));

const theme = createTheme({
    palette: {
        neutral: {
            main: '#000',
            contrastText: '#fff'
        },
    },
});

const FAQ_item = ({ key, id, textQ, textA, hidden }) => {

    const [ischeck, setCheck] = useState(hidden)

    const isHidden = () => {
        setCheck(!ischeck);
    }

    const FAQedit = () => {
        alert("編輯頁面彈跳窗");
        // window.location.href=`/home/faq_edit/${item.id}`;
    }

    const FAQdelete = () => {
        window.confirm("是否確定刪除");
    }


    return <div>
        <ListItem divider>
            <ListItemText primary={textQ} />
            <ThemeProvider theme={theme}>
                <Stack spacing={2} direction="row">
                    <Button color="neutral" size="small" variant="outlined" href={`/home/faq_edit/${id}`} >編輯</Button>
                    <Button size="small" variant="outlined" color="error" onClick={FAQdelete}>刪除</Button>
                    <FormGroup>
                        <Stack onClick={isHidden} direction="row" spacing={1} alignItems="center">
                            <Typography style={{ "font-size": "10px" }}>OFF</Typography>
                            <AntSwitch checked={ischeck} inputProps={{ 'aria-label': 'ant design' }} size="small" />
                            <Typography style={{ "font-size": "10px" }}>ON</Typography>
                        </Stack>
                    </FormGroup>
                </Stack>
            </ThemeProvider>
        </ListItem>
    </div>


}

export default FAQ_item



