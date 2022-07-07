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

// One time slot every 30 minutes.
const timeSlots = Array.from(new Array(24 * 2)).map(
    (_, index) => `${index < 20 ? '0' : ''}${Math.floor(index / 2)}:${index % 2 === 0 ? '00' : '30'}`
)

const Act_new = ({ add }) => {

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
                    <h1>新增活動</h1>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
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

export default Act_new;