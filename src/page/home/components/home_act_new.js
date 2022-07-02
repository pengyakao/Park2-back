import React, { Component } from 'react';
import LayOut from '../../../components/Crystal/LayOut';
import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



const theme = createTheme({
    palette: {
        neutral: {
            main: '#000',
            contrastText: '#fff'
        },
    },
});

const style1 = {
    color: "#000",
    "font-family": 'Noto Sans TC',
    "font-weight": 500,
    "letter-spacing": "1px",
    "font-size": "20px",
}

const data = [
    {
        label: "活動名稱A",
        act_Sdate: "05/06",
        act_Edate: "05/21",
        act_Stime: "21:00",
        act_Etime: "21:30"
    }, {
        label: "活動名稱B",
        act_Sdate: "05/01",
        act_Edate: "05/02",
        act_Stime: "20:00",
        act_Etime: "20:30"
    }, {
        label: "活動名稱C",
        act_Sdate: "04/28",
        act_Edate: "04/29",
        act_Stime: "09:00",
        act_Etime: "09:30"
    }, {
        label: "活動名稱D",
        act_Sdate: "05/16",
        act_Edate: "05/17",
        act_Stime: "21:00",
        act_Etime: "21:30"
    },
]

const Home_act_new = ({ add }) => {

    const [date, setDate] = useState("MM/DD-MM/DD");
    const [time, setTime] = useState("HH/mm-HH/mm");
    
    var dateChange = () => {
        setDate(`${data[0].act_Sdate}-${data[0].act_Edate}`);
        setTime(`${data[0].act_Stime}-${data[0].act_Etime}`);
    }


    return <div>
        <div>
            <LayOut />
            <div className='bs_article'>
                <div style={{ width: "80%" }}>
                    <h1>活動輪播編輯</h1>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <Autocomplete
                            onChange={dateChange}
                            disablePortal
                            id="combo-box-demo"
                            options={data}
                            renderInput={(params) => <TextField {...params} label="選擇活動" />}
                        />
                        <TextField
                            id="outlined-basic"
                            label="首頁輪播標題(限11字)"
                            variant="outlined"
                            required="true"
                        />
                        <TextField
                            disabled
                            id="outlined-disabled"
                            label="活動日期"
                            defaultValue={date}
                        />
                        <TextField
                            disabled
                            id="outlined-disabled"
                            label="活動時間"
                            defaultValue={time}
                        />


                    </Box>
                    <ThemeProvider theme={theme}>
                        <Stack spacing={2} direction="row" style={{ display: 'flex', 'justify-content': 'flex-end' }}>
                            <Button color="neutral" variant="outlined" href='/home/act'>取消</Button>
                            <Button color="neutral" variant="contained" href='/home/act'
                                onClick={() => {
                                    alert('送出')
                                }}
                            >送出</Button>
                        </Stack>
                    </ThemeProvider>
                </div>
            </div>
        </div>
    </div>

}



export default Home_act_new;