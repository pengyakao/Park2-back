import React, { Component } from 'react';
import LayOut from '../../../components/layout/LayOut';
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
            // home_act_id: 1,
            act_id: 1,
            act_sta: 1,
            act_title: "DJ Night in PARK2 ✦ Question Mark"
        },
        {
            // home_act_id: 2,
            act_id: 2,
            act_sta: 1,
            act_title: "我出去一下．風格品牌出店計畫 ：生活裝飾篇"
        }, {
            // home_act_id: 3,
            act_id: 3,
            act_sta: 1,
            act_title: "PPK設計師交流之夜IN草悟道生活圈"
        }, {
            // home_act_id: 4,
            act_id: 4,
            act_sta: 1,
            act_title: "我出去一下．城市裡的戶外生活篇"
        }, {
            act_id: 5,
            act_sta: 1,
            act_title: "𝐃𝐉 𝐍𝐈𝐆𝐇𝐓 | 游璨賓"
        }, {
            act_id: 6,
            act_sta: 1,
            act_title: "劍聚 𝐢𝐧 𝐭𝐡𝐞 𝐏𝐀𝐑𝐊𝟐"
        }, {
            act_id: 7,
            act_sta: 1,
            act_title: "星際大戰塔圖因模型展示"
        }, {
            act_id: 8,
            act_sta: 1,
            act_title: "我出去一下《生活裝飾篇》"
        }
    ]

    const act_data = [
        {
            act_id:"1",
            act_Sdate:"05/06",		
            act_Edate:"05/21",
            act_Stime:"21:00",
            act_Etime:"21:30"
        },{
            act_id:"2",
            act_Sdate:"05/21",		
            act_Edate:"05/22",
            act_Stime: null,
            act_Etime: null
        },{
            act_id:"3",
            act_Sdate:"05/06",		
            act_Edate:"05/06",
            act_Stime:"19:00",
            act_Etime:"21:30"
        },{
            act_id:"4",
            act_Sdate:"06/18",		
            act_Edate:"06/19",
            act_Stime:"14:00",
            act_Etime:"21:00"
        },{
            act_id:"5",
            act_Sdate:"06/18",		
            act_Edate:"06/18",
            act_Stime:"20:00",
            act_Etime:"21:30"
        },{
            act_id:"6",
            act_Sdate:"06/04",		
            act_Edate:"06/04",
            act_Stime:"21:00",
            act_Etime:"22:00"
        },{
            act_id:"7",
            act_Sdate:"05/07",		
            act_Edate:"05/07",
            act_Stime:"13:30",
            act_Etime:"20:30"
        },{
            act_id:"8",
            act_Sdate:"05/07",		
            act_Edate:"05/08",
            act_Stime:"13:30",
            act_Etime:"20:30"
        }
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
                        <h3>活動封面圖</h3>
                        <UploadButtons label="封面圖片" width={300}></UploadButtons>
                        
                        <h3>活動資訊</h3>
                        <TextField label="活動名稱" id="act_title" variant="outlined" required="true" />
                        {/* 活動類別 */}
                        <Select />
                        <TextField label="活動日期(起)" id="act_Sdate" type="date" required="true" defaultValue="2022-01-01" />
                        <TextField label="活動日期(迄)" id="act_Edate" type="date" required="true" defaultValue="2022-01-01" />
                        {/* 活動時間 */}
                        <Autocomplete
                            id="act_Stime"
                            options={timeSlots}
                            getOptionDisabled={(option) => option === timeSlots[0] || option === timeSlots[2]}
                            sx={{ width: 100 }}
                            renderInput={(params) => <TextField {...params} label="活動時間(起)" />}
                        />
                        <Autocomplete
                            id="act_Etime"
                            options={timeSlots}
                            getOptionDisabled={(option) => option === timeSlots[0] || option === timeSlots[2]}
                            sx={{ width: 100 }}
                            renderInput={(params) => <TextField {...params} label="活動時間(迄)" />}
                        />
                        <TextField label="活動地點" id="act_location" variant="outlined" required="true" />
                        <TextField label="活動嘉賓" id="act_guests" variant="outlined" multiline />
                        <TextField label="主辦單位" id="acr_org" variant="outlined" required="true" />
                        <TextField label="活動介紹" id="act_info" variant="outlined" required="true" multiline rows={10} inputProps={{ step: 1, min: 0, max: 10, type: 'number' }} />
                        <h3>活動照片</h3>
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