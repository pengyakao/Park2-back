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
import { useParams } from 'react-router-dom'
import { getStore } from '../../api/store/getStore'

const theme = createTheme({
    palette: {
        neutral: {
            main: '#000',
            contrastText: '#fff',
        },
    },
})

const Store_each = ({ add }) => {

    const [isData, setData] = useState(
        {
            name: '店家名稱',
            type: '店家類型',
            img: '店家Logo',
            tel: '店家電話',
            location: '店家位置',
            pay1: '現金支付',
            pay2: '信用卡',
            pay3: 'LinePay',
            pay4: '街口支付',
            pay5: '悠遊卡',
            pay6: 'ApplePay',
            pay7: '支付寶',
            mon: '開放時間',
            tue: '開放時間',
            wed: '開放時間',
            thu: '開放時間',
            fri: '開放時間',
            sat: '開放時間',
            sun: '開放時間',
            fb: 'fb連結',
            ig: 'ig連結',
            line: 'line連結',
            info: '資訊',
            state: '狀態',
            isMain: '是否主打',
            id: '編號'
        }
    );

    useEffect(() => {
        async function getData() {
            let faqList = await getStore().then((result) => {
                setData(result)
            })
        }
        getData();
    }, [])



    //  店家類別
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

    //get url ID
    const { storeId } = useParams();
    // console.log(storeId);

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
                            <div className="storeMainImg">
                                <h3>封面圖片</h3>
                                <UploadButtons width={300}></UploadButtons>
                            </div>
                            <div className="storeName">
                                <h3>店家名稱</h3>
                                <TextField
                                    id="outlined-basic"
                                    label="店家名稱"
                                    variant="outlined"
                                    required="true"
                                    value={isData.sto_name}
                                    onChange={(e) => {
                                        setData(prev => ({
                                            ...prev
                                            , sto_name: e.target.value
                                        }))
                                    }}
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
                                    <div className="storepay1">
                                        <Checkbox {...label} checked={Store_each.sto_pay1} id="sto_pay1" />
                                        <label htmlFor="sto_pay1">
                                            <img src="/img/icon/cash.svg" alt="現金支付" />
                                        </label>
                                    </div>
                                    <div className="storepay2">
                                        <Checkbox {...label} checked={Store_each.sto_pay2} id="sto_pay2" />
                                        <label htmlFor="sto_pay2">
                                            <img src="/img/icon/card.svg" alt="信用卡" />
                                        </label>
                                    </div>
                                    <div className="storepay3">
                                        <Checkbox {...label} checked={Store_each.sto_pay3} id="sto_pay3" />
                                        <label htmlFor="sto_pay3">
                                            <img src="/img/icon/linepay.png" alt="Linepay" />
                                        </label>
                                    </div>
                                    <div className="storepay4">
                                        <Checkbox {...label} checked={Store_each.sto_pay4} id="sto_pay4" />
                                        <label htmlFor="sto_pay4">
                                            <img src="/img/icon/street.png" alt="街口" />
                                        </label>
                                    </div>

                                    <div className="storepay5">
                                        <Checkbox {...label} checked={Store_each.sto_pay5} id="sto_pay5" />
                                        <label htmlFor="sto_pay5">
                                            <img src="/img/icon/icash.png" alt="悠遊卡" />
                                        </label>
                                    </div>

                                    <div className="storepay6">
                                        <Checkbox {...label} checked={Store_each.sto_pay6} id="sto_pay6" />
                                        <label htmlFor="sto_pay6">
                                            <img src="/img/icon/Apple_Pay_logo.svg" alt="ApplePay" />
                                        </label>
                                    </div>
                                    <div className="storepay7">
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
                                        <TextField
                                            id="outlined-basic"
                                            label="Facebook"
                                            placeholder="https://www.facebook.com/cmppark2/"
                                            variant="outlined"
                                            required="true"
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            id="outlined-basic"
                                            label="Instargam"
                                            placeholder="https://www.Instargam.com/cmppark2/"
                                            variant="outlined"
                                            required="true"
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            id="outlined-basic"
                                            label="Line"
                                            placeholder="https://line.me/ti/p/~@Park2"
                                            variant="outlined"
                                            required="true"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="storeintro">
                                <h3>店家介紹</h3>
                                <TextField
                                    label=""
                                    id="outlined-basic"
                                    variant="outlined"
                                    required="true"
                                    multiline
                                    rows={10}
                                    fullWidth
                                    inputProps={{ step: 1, min: 0, max: 10, type: 'number' }}
                                />
                            </div>
                        </Box>
                        <ThemeProvider theme={theme}>
                            <div className="StoreBtn">
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
                            </div>
                        </ThemeProvider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Store_each
