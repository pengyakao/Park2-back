import React, { Component } from 'react';
import { useLocation } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ReactDOM from "react-dom";
import LayOutHome from '../../../components/layout/LayOut_home';
import { getNews } from '../../../api/home/getNews';
import { putNewsFile } from '../../../api/home/putNewsFile'
import { putNews } from '../../../api/home/putNews'
import { useParams } from 'react-router-dom'
import UploadButtons from './UploadButtons'


export default function Home_news_edit() {

    const [isimg, setImg] = useState([])

    const [isData, setData] = useState(
        {
            title: '活動編號',
            isShow: '顯示狀態',
            img: '公告圖片',
            startDate: '開始日期',
            endDate: '結束日期',
            info: '公告',
            id: "編號"
        }
    );


    //get url ID
    const { newsId } = useParams();


    useEffect(() => {
        async function getData(params) {
            let getDataItem = await getNews().then((result) => {
                console.log(result)
                var dataItem = result.filter(e => e.home_news_id == newsId)
                return dataItem
            })
            await setData(prev => ({
                ...prev,
                title: getDataItem[0].home_news_title
            }))
            await setData(prev => ({
                ...prev,
                isShow: getDataItem[0].home_news_sta
            }))
            await setData(prev => ({
                ...prev,
                img: getDataItem[0].home_news_img
                // img: 'https://placem.at/things'
            }))
            await setData(prev => ({
                ...prev,
                // startDate: test[0].home_news_Sdate
                startDate: getDataItem[0].home_news_Sdate
                // startDate: getDataItem[0].home_news_Sdate
            }))
            await setData(prev => ({
                ...prev,
                // endDate: test[0].home_news_Edate
                endDate: getDataItem[0].home_news_Edate
                // endDate: getDataItem[0].home_news_Edate
            }))
            await setData(prev => ({
                ...prev,
                info: getDataItem[0].home_news_info
            }))
            await setData(prev => ({
                ...prev,
                id: getDataItem[0].home_news_id
            }))
            setImg(getDataItem[0].home_news_img)
        }
        getData()
    }, [])




    const theme = createTheme({
        palette: {
            neutral: {
                main: '#000',
                contrastText: '#fff'
            },
        },
    });

    return (
        <div>
            <LayOutHome />
            <div className='bs_article'>
                <div style={{ width: "80%" }}>
                    <h1>編輯最新公告</h1>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic"
                            label="公告標題(限20字)"
                            variant="outlined"
                            required="true"
                            value={isData.title}
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
                            label="公告日期(起) YYYY-MM-DD"
                            value={isData.startDate}
                            onChange={(e) => {
                                console.log(e.target.value)
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
                            label="公告日期(迄) YYYY-MM-DD"
                            // onChange={handleChange}
                            value={isData.endDate}
                            onChange={(e) => {
                                console.log(e.target.value)
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
                            value={isData.info}
                            inputProps={{
                                step: 1,
                                min: 0,
                                max: 10,
                                type: 'number'
                            }}
                            onChange={(e) => {
                                setData(prev => ({
                                    ...prev
                                    , info: e.target.value
                                }))
                            }}
                        />
                        <div id="newsImg" style={{ display: "flex", justifyContent: 'space-between', }} >

                            <div>
                                <h4 style={{ color: "gray", fontWeight: 400 }}> 目前圖片 </h4>
                                <h4 style={{ color: "gray", fontWeight: 400 }}> ＊若需修改圖片，請於右側重新上傳 </h4>
                                <img src={isData.img} alt="" style={{ width: '280px', minHeight: '200px', borderRadius: '18px', }} />
                            </div>
                            <UploadButtons width={300} changeImg={setImg}></UploadButtons>
                        </div>
                    </Box>
                    <ThemeProvider theme={theme}>
                        <Stack spacing={2} direction="row" style={{ display: 'flex', 'justify-content': 'flex-end' }}>
                            <Button color="neutral" variant="outlined" href='/home/news'>取消</Button>
                            <Button color="neutral" variant="contained" href='#'
                                onClick={() => {
                                    if (window.confirm("是否確認修改") == true) {
                                        console.log(isData);
                                        console.log(isimg);
                                        if (isimg == isData.img) {
                                            // console.log(13678)
                                            putNews(isData).then((result) => {
                                                console.log(result)
                                            })
                                            window.location.href = '/home/news'
                                        } else {
                                            const formData = new FormData();
                                            formData.append("title", isData.title);
                                            formData.append("isShow", isData.isShow);
                                            formData.append("file", isimg);
                                            formData.append("startDate", isData.startDate);
                                            formData.append("endDate", isData.endDate);
                                            formData.append("info", isData.info);
                                            formData.append("id", isData.id);
                                            putNewsFile(formData).then((result) => {
                                                console.log(result)
                                            })
                                            window.location.href = '/home/news'
                                        }
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
