import React, { Component } from 'react'
import LayOut from '../../components/Crystal/LayOut'
import { useState, useEffect } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import TextareaAutosize from './TextareaAutosize'
import Checkbox from '@mui/material/Checkbox'
import UploadButtons from './UploadButtons'
import ComboBox from './ComboBox'
import UploadMore from './UploadMore'
import TimeOption from './TimeOption'
import Input_fb from './Input_fb'
import Input_ig from './Input_ig'
import Input_line from './Input_line'
import './store_each.css'
import { getStores } from '../../api/store/storeApi'

const theme = createTheme({
    palette: {
        neutral: {
            main: '#000',
            contrastText: '#fff',
        },
    },
})

const Store_each = ({ add }) => {
    useEffect(() => {
        getStores().then((result) => {
            console.log(result)
        })
    }, [])
    const store_each_data = [
        {
            sto_id: 1,
            sto_name: 12333,
            sto_img: 'https://placem.at/people',
        },
    ]

    // const new_data = [
    //     {
    //         act_id: '活動名稱A',
    //         act_Sdate: '05/06',
    //         act_Edate: '05/21',
    //         act_Stime: '21:00',
    //         act_Etime: '21:30',
    //     },
    //     {
    //         act_id: '活動名稱B',
    //         act_Sdate: '05/01',
    //         act_Edate: '05/02',
    //         act_Stime: '20:00',
    //         act_Etime: '20:30',
    //     },
    //     {
    //         act_id: '活動名稱C',
    //         act_Sdate: '04/28',
    //         act_Edate: '04/29',
    //         act_Stime: '09:00',
    //         act_Etime: '09:30',
    //     },
    //     {
    //         act_id: '活動名稱D',
    //         act_Sdate: '05/16',
    //         act_Edate: '05/17',
    //         act_Stime: '21:00',
    //         act_Etime: '21:30',
    //     },
    // ]
    // const store_each = [
    //     {
    //         sto_pay1: '1',
    //         sto_pay2: '0',
    //         sto_pay3: '1',
    //         sto_pay4: '0',
    //         sto_pay5: '0',
    //         sto_pay6: '1',
    //         sto_pay7: '1',
    //     },
    // ]
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

    return (
        <div>
            <div>
                <LayOut />
                <div className="bs_article">
                    <div style={{ width: '80%' }}>
                        <h1>新增店家資訊</h1>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '100%' },
                            }}
                            noValidate
                            autoComplete="off"
                            direction="row"
                        >
                            <div className="storeMainImg">
                                <h3>封面圖片</h3>
                                <UploadButtons width={300}></UploadButtons>
                            </div>
                            <div className="storeName">
                                <h3>店家名稱</h3>
                                <TextField
                                    id={Store_each.sto_name}
                                    label="店家名稱"
                                    variant="outlined"
                                    required="true"
                                />
                            </div>
                            <div className="storeSet">
                                <h3>店家位置</h3>
                                <ComboBox></ComboBox>
                            </div>
                            <div className="storePhone">
                                <h3>聯絡電話</h3>
                                <TextField
                                    id="outlined-basic"
                                    label="聯絡電話"
                                    placeholder="0912-345-678"
                                    variant="outlined"
                                    required="true"
                                />
                            </div>
                            <div>
                                <div className="storeMoreImg">
                                    <h3>
                                        店家圖片
                                        <span style={{ fontSize: '12px', fontWeight: '400' }}>
                                            （至少五張，最多八張）
                                        </span>
                                    </h3>
                                    <UploadMore></UploadMore>
                                </div>
                            </div>
                            <div className="storetime">
                                <h3>營業時間</h3>
                                <div className="storetime_container">
                                    <div>
                                        <div>平日：</div>
                                        <TimeOption></TimeOption>
                                        <div>～</div>
                                        <TimeOption></TimeOption>
                                    </div>
                                    <div>
                                        <div>假日：</div>
                                        <TimeOption></TimeOption>
                                        <div>～</div>
                                        <TimeOption></TimeOption>
                                    </div>
                                </div>
                            </div>
                            <div className="storepay">
                                <h3>支付方式</h3>
                                <div className="storepay_container">
                                    <div>
                                        <Checkbox {...label} checked={Store_each.sto_pay1} id="sto_pay1" />
                                        <label htmlFor="sto_pay1">
                                            <img src="/img/icon/cash.svg" alt="現金支付" />
                                        </label>
                                    </div>
                                    <div>
                                        <Checkbox {...label} checked={Store_each.sto_pay2} id="sto_pay2" />
                                        <label htmlFor="sto_pay2">
                                            <img src="/img/icon/card.svg" alt="信用卡" />
                                        </label>
                                    </div>
                                    <div>
                                        <Checkbox {...label} checked={Store_each.sto_pay3} id="sto_pay3" />
                                        <label htmlFor="sto_pay3">
                                            <img src="/img/icon/linepay.png" alt="信用卡" />
                                        </label>
                                    </div>
                                    <div>
                                        <Checkbox {...label} checked={Store_each.sto_pay4} id="sto_pay4" />
                                        <label htmlFor="sto_pay4">
                                            <img src="/img/icon/street.png" alt="街口" />
                                        </label>
                                    </div>

                                    <div>
                                        <Checkbox {...label} checked={Store_each.sto_pay5} id="sto_pay5" />
                                        <label htmlFor="sto_pay5">
                                            <img src="/img/icon/icash.png" alt="悠遊卡" />
                                        </label>
                                    </div>

                                    <div>
                                        <Checkbox {...label} checked={Store_each.sto_pay6} id="sto_pay6" />
                                        <label htmlFor="sto_pay6">
                                            <img src="/img/icon/Apple_Pay_logo.svg" alt="ApplePay" />
                                        </label>
                                    </div>
                                    <div>
                                        <Checkbox {...label} checked={Store_each.sto_pay7} id="sto_pay7" />
                                        <label htmlFor="sto_pay7">
                                            <img src="/img/icon/taobao.png" alt="支付寶" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="fanspage">
                                <h3>粉絲專頁</h3>
                                <div className="fanspage-container">
                                    <div>
                                        <Input_fb />
                                    </div>
                                    <div>
                                        <Input_ig />
                                    </div>
                                    <div>
                                        <Input_line />
                                    </div>
                                </div>
                            </div>
                            <div className="storeintro">
                                <h3>店家介紹</h3>
                                <TextareaAutosize
                                    aria-label="empty textarea"
                                    style={{ height: 300, border: '2px solid #f4f4f4' }}
                                    showCount
                                />
                            </div>
                        </Box>
                        <ThemeProvider theme={theme}>
                            <Stack
                                spacing={2}
                                direction="row"
                                style={{ display: 'flex', 'justify-content': 'flex-end' }}
                            >
                                <Button color="neutral" variant="outlined" href="/store">
                                    取消
                                </Button>
                                <Button
                                    color="neutral"
                                    variant="contained"
                                    href="/store"
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
}

export default Store_each
