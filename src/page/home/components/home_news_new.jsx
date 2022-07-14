import React, { Component } from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LayOutHome from '../../../components/layout/LayOut_home';
import { postNews } from '../../../api/home/postNews';
import UploadButtons from './UploadButtons'


const theme = createTheme({
    palette: {
        neutral: {
            main: '#000',
            contrastText: '#fff'
        },
    },
});

export default function Home_news_new() {

    const [isimg, setImg] = useState([])

    const [isData, setData] = useState(
        {
            title: '公告標題',
            isShow: '0',
            img: 'https://placem.at/people',
            startDate: '2022-01-01',
            endDate: '2022-01-01',
            info: '公告內容'
        }
    )
    return (
        <div>
            <LayOutHome />
            <div className='bs_article'>
                <div style={{ width: "80%" }}>
                    <h1>新增最新公告</h1>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic"
                            label="公告標題"
                            variant="outlined"
                            required="true"
                            onChange={(e) => {
                                setData(prev => ({
                                    ...prev
                                    , title: e.target.value
                                }))
                            }}
                        />
                        <TextField
                            required="true"
                            type="date"
                            id="outlined-disabled"
                            label="公告日期(起)"
                            defaultValue="2022-01-01"
                            onChange={(e) => {
                                setData(prev => ({
                                    ...prev
                                    , startDate: e.target.value
                                }))
                            }}
                        />
                        <TextField
                            required="true"
                            type="date"
                            id="outlined-disabled"
                            label="公告日期(迄)"
                            defaultValue="2022-01-01"
                            onChange={(e) => {
                                setData(prev => ({
                                    ...prev
                                    , endDate: e.target.value
                                }))
                            }}

                        />
                        <TextField id="outlined-basic"
                            label="公告內容"
                            variant="outlined"
                            required="true"
                            multiline
                            rows={5}
                            inputProps={{
                                step: 1,
                                min: 0,
                                max: 10,
                            }}
                            onChange={(e) => {
                                setData(prev => ({
                                    ...prev
                                    , info: e.target.value
                                }))
                            }}
                        />
                        <div id="newsImg">
                            {/* <h4>公告圖片上傳</h4> */}
                            <UploadButtons width={300} changeImg={setImg}></UploadButtons>
                        </div>
                    </Box>
                    <ThemeProvider theme={theme}>
                        <Stack spacing={2} direction="row" style={{ display: 'flex', 'justify-content': 'flex-end' }}>
                            <Button color="neutral" variant="outlined" href='/home/news'>取消</Button>
                            <Button color="neutral" variant="contained" href='#'
                                onClick={() => {
                                    if (window.confirm("是否確認新增") == true) {
                                        console.log(isData);
                                        console.log(isimg);
                                        const formData = new FormData();
                                        formData.append("title", isData.title);
                                        formData.append("isShow", isData.isShow);
                                        formData.append("file", isimg)
                                        formData.append("startDate", isData.startDate);
                                        formData.append("endDate", isData.endDate);
                                        formData.append("info", isData.info);
                                        
                                        postNews(formData).then((result) => {
                                            console.log(result)
                                        })
                                        window.location.href = "/home/news"
                                    } else {
                                        console.log("NO");
                                    }
                                }}
                            >送出</Button>
                        </Stack>
                    </ThemeProvider>
                </div>
            </div>
        </div>




    );
}
