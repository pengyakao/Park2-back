import React, { Component } from 'react'
import LayOut from '../../components/Crystal/LayOut'
import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import UploadButtons from '../../components/Ally/UploadButtons'
import ComboBox from '../../components/Ellie/ComboBox'
import Autocomplete from '@mui/material/Autocomplete'
import UploadMore from '../../components/Ally/UploadMore'
import TimeOption from '../../components/Ellie/TimeOption'
import CreditCardIcon from '@mui/icons-material/CreditCard'

const theme = createTheme({
    palette: {
        neutral: {
            main: '#000',
            contrastText: '#fff',
        },
    },
})

const style1 = {
    color: '#000',
    'font-family': 'Noto Sans TC',
    'font-weight': 500,
    'letter-spacing': '1px',
    'font-size': '20px',
}

const store_new = ({ add }) => {
    const home_act_data = [
        {
            home_act_id: 1,
            act_id: 1,
            home_act_sta: 1,
            home_act_title: '活動名稱A',
        },
        {
            home_act_id: 2,
            act_id: 2,
            home_act_sta: 0,
            home_act_title: '活動名稱B',
        },
        {
            home_act_id: 3,
            act_id: 3,
            home_act_sta: 1,
            home_act_title: '活動名稱C',
        },
        {
            home_act_id: 4,
            act_id: 4,
            home_act_sta: 0,
            home_act_title: '活動名稱D',
        },
    ]

    const act_data = [
        {
            act_id: '活動名稱A',
            act_Sdate: '05/06',
            act_Edate: '05/21',
            act_Stime: '21:00',
            act_Etime: '21:30',
        },
        {
            act_id: '活動名稱B',
            act_Sdate: '05/01',
            act_Edate: '05/02',
            act_Stime: '20:00',
            act_Etime: '20:30',
        },
        {
            act_id: '活動名稱C',
            act_Sdate: '04/28',
            act_Edate: '04/29',
            act_Stime: '09:00',
            act_Etime: '09:30',
        },
        {
            act_id: '活動名稱D',
            act_Sdate: '05/16',
            act_Edate: '05/17',
            act_Stime: '21:00',
            act_Etime: '21:30',
        },
    ]
    const time1 = {
        border: '2px #F4F4F4 solid',
        // display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
    }
    const time2 = {
        display: 'flex',
        // justifyContent: 'flex-start',
        margin: '10px',
    }
    const time3 = {
        margin: '20px',
    }
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
    return (
        <div>
            <div>
                <LayOut />
                <div className="bs_article">
                    <div style={{ width: '80%' }}>
                        <h1>編輯店家資訊</h1>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '100%' },
                            }}
                            noValidate
                            autoComplete="off"
                            direction="row"
                        >
                            <div>
                                <h3>封面圖片</h3>
                                <UploadButtons width={300}></UploadButtons>
                            </div>
                            <h3>店家名稱</h3>
                            <TextField id="outlined-basic" label="店家名稱" variant="outlined" required="true" />
                            <h3>店家位置</h3>
                            <ComboBox></ComboBox>
                            <h3>聯絡電話</h3>
                            <TextField
                                id="outlined-basic"
                                label="聯絡電話"
                                placeholder="0912-345-678"
                                variant="outlined"
                                required="true"
                            />
                            <h3>
                                店家圖片
                                <span style={{ fontSize: '12px', fontWeight: '400' }}>（至少五張，最多八張）</span>
                            </h3>
                            <UploadMore></UploadMore>
                            <h3>營業時間</h3>
                            <div style={time1}>
                                <div direction="row" style={time2}>
                                    <div style={time3}>週一</div>
                                    <TimeOption></TimeOption>
                                    <div style={time3}>～</div>
                                    <TimeOption></TimeOption>
                                </div>
                                <div direction="row" style={time2}>
                                    <div style={time3}>週二</div>
                                    <TimeOption></TimeOption>
                                    <div style={time3}>～</div>
                                    <TimeOption></TimeOption>
                                </div>
                                <div direction="row" style={time2}>
                                    <div style={time3}>週三</div>
                                    <TimeOption></TimeOption>
                                    <div style={time3}>～</div>
                                    <TimeOption></TimeOption>
                                </div>
                                <div direction="row" style={time2}>
                                    <div style={time3}>週四</div>
                                    <TimeOption></TimeOption>
                                    <div style={time3}>～</div>
                                    <TimeOption></TimeOption>
                                </div>
                                <div direction="row" style={time2}>
                                    <div style={time3}>週五</div>
                                    <TimeOption></TimeOption>
                                    <div style={time3}>～</div>
                                    <TimeOption></TimeOption>
                                </div>
                                <div direction="row" style={time2}>
                                    <div style={time3}>週六</div>
                                    <TimeOption></TimeOption>
                                    <div style={time3}>～</div>
                                    <TimeOption></TimeOption>
                                </div>
                                <div direction="row" style={time2}>
                                    <div style={time3}>週日</div>
                                    <TimeOption></TimeOption>
                                    <div style={time3}>～</div>
                                    <TimeOption></TimeOption>
                                </div>
                            </div>
                            <div>
                                <h3>支付方式</h3>
                                <div direction="row" style={time1}>
                                    <Checkbox {...label} defaultChecked id="pay" color="secondary" />
                                    <label htmlFor="pay">
                                        <CreditCardIcon></CreditCardIcon>
                                    </label>
                                </div>
                            </div>
                            <h3>店家介紹</h3>
                            <TextareaAutosize aria-label="empty textarea" style={{ height: 300 }} showCount />
                        </Box>
                        <ThemeProvider theme={theme}>
                            <Stack
                                spacing={2}
                                direction="row"
                                style={{ display: 'flex', 'justify-content': 'flex-end' }}
                            >
                                <Button color="neutral" variant="outlined" href="/home/act">
                                    取消
                                </Button>
                                <Button
                                    color="neutral"
                                    variant="contained"
                                    href="/home/faq"
                                    onClick={() => {
                                        alert('送出')
                                    }}
                                >
                                    送出
                                </Button>
                            </Stack>
                        </ThemeProvider>
                    </div>
                </div>
            </div>
        </div>
    )

    // const options = [
    //     { label: 'The Godfather', id: 1 },
    //     { label: 'Pulp Fiction', id: 2 },
    // ]

    const top100Filmsss = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 },
    ]
}

export default store_new
