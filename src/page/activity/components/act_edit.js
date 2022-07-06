import React, { Component } from 'react';
import LayOut from '../../../components/Crystal/LayOut';
import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete'
import UploadButtons from './UploadButtons'
import Select from './Select'
import UploadMore from './UploadMore'

import TextareaAutosize from '@mui/material/TextareaAutosize'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

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

const Act_edit = ({ add }) => {
    const home_act_data = [
        {
            home_act_id: 1,
            act_id: 1,
            home_act_sta: 1,
            home_act_title: "活動名稱A"
        },
        {
            home_act_id: 2,
            act_id: 2,
            home_act_sta: 0,
            home_act_title: "活動名稱B"
        }, {
            home_act_id: 3,
            act_id: 3,
            home_act_sta: 1,
            home_act_title: "活動名稱C"
        }, {
            home_act_id: 4,
            act_id: 4,
            home_act_sta: 0,
            home_act_title: "活動名稱D"
        }
    ]

    const act_data = [
        {
            act_id:"活動名稱A",
            act_Sdate:"05/06",		
            act_Edate:"05/21",
            act_Stime:"21:00",
            act_Etime:"21:30"
        },{
            act_id:"活動名稱B",
            act_Sdate:"05/01",		
            act_Edate:"05/02",
            act_Stime:"20:00",
            act_Etime:"20:30"
        },{
            act_id:"活動名稱C",
            act_Sdate:"04/28",		
            act_Edate:"04/29",
            act_Stime:"09:00",
            act_Etime:"09:30"
        },{
            act_id:"活動名稱D",
            act_Sdate:"05/16",		
            act_Edate:"05/17",
            act_Stime:"21:00",
            act_Etime:"21:30"
        },
    ]

    // One time slot every 30 minutes.
    const timeSlots = Array.from(new Array(24 * 2)).map(
        (_, index) => `${index < 20 ? '0' : ''}${Math.floor(index / 2)}:${index % 2 === 0 ? '00' : '30'}`
    )

    return <div>
        <div>
            <LayOut />
            <div className='bs_article'>
                <div style={{ width: "80%", paddingBottom: "50px" }}>
                    <h1>編輯活動資訊</h1>
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '100%' }, }}
                        noValidate
                        autoComplete="off"
                        direction="row"
                    >
                        <h3>封面圖片</h3>
                        <UploadButtons label="封面圖片" width={300}></UploadButtons>
                        
                        <h3>活動資訊</h3>
                        <TextField label="活動名稱" id="outlined-basic" variant="outlined" required="true" />
                        <TextField label="活動日期(起)" id="outlined-disabled" type="date" required="true" defaultValue="2022-01-01" />
                        <TextField label="活動日期(迄)" id="outlined-disabled" type="date" required="true" defaultValue="2022-01-01" />
                        {/* 活動時間 */}
                        <Autocomplete
                            id="disabled-options-demo"
                            options={timeSlots}
                            getOptionDisabled={(option) => option === timeSlots[0] || option === timeSlots[2]}
                            sx={{ width: 100 }}
                            renderInput={(params) => <TextField {...params} label="活動時間(起)" />}
                        />
                        <Autocomplete
                            id="disabled-options-demo"
                            options={timeSlots}
                            getOptionDisabled={(option) => option === timeSlots[0] || option === timeSlots[2]}
                            sx={{ width: 100 }}
                            renderInput={(params) => <TextField {...params} label="活動時間(迄)" />}
                        />
                        <TextField label="活動嘉賓" id="outlined-basic" variant="outlined" />
                        <TextField label="活動地點" id="outlined-basic" variant="outlined" required="true" />
                        {/* 活動類別 */}
                        <Select />
                        <TextField label="活動介紹" id="outlined-basic" variant="outlined" required="true" multiline rows={10} inputProps={{ step: 1, min: 0, max: 10, type: 'number' }} />
                        <h3>活動圖片</h3>
                        <UploadMore />

                    </Box>
                    <ThemeProvider theme={theme}>
                        <Stack spacing={2} direction="row" style={{ display: 'flex', 'justify-content': 'flex-end' }}>
                            <Button color="neutral" variant="outlined" href='/activity/'>取消</Button>
                            <Button color="neutral" variant="contained" href='/activity/' onClick={() => { alert('送出') }} >送出</Button>
                        </Stack>
                    </ThemeProvider>
                </div>
            </div>
        </div>
    </div>
}

export default Act_edit;