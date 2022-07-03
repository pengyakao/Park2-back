import React, { Component } from 'react';
import LayOut from '../../../components/Crystal/LayOut';
import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



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


const Home_act_edit = ({ add }) => {
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

    return <div>
        <div>
            <LayOut />
            <div className='bs_article'>
                <div style={{ width: "80%" }}>
                    <h1>編輯輪播活動</h1>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField 
                            id="outlined-basic"
                            label="首頁輪播標題(限11字)"
                            variant="outlined"
                            required="true"
                        />
                        <TextField
                            disabled
                            id="outlined-disabled"
                            label="活動名稱"
                            defaultValue={home_act_data[0].home_act_title}
                        />
                        <TextField
                            disabled
                            id="outlined-disabled"
                            label="活動日期"
                            defaultValue={`${act_data[0].act_Sdate}-${act_data[0].act_Edate}`}
                        />
                        <TextField
                            disabled
                            id="outlined-disabled"
                            label="活動時間"
                            defaultValue={`${act_data[0].act_Stime}-${act_data[0].act_Etime}`}
                        />


                    </Box>
                    <ThemeProvider theme={theme}>
                        <Stack spacing={2} direction="row" style={{ display: 'flex', 'justify-content': 'flex-end' }}>
                            <Button color="neutral" variant="outlined" href='/home/act'>取消</Button>
                            <Button color="neutral" variant="contained" href='/home/faq'
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



export default Home_act_edit;