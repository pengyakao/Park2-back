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

import LayOut from '../../../components/Crystal/LayOut';
import { getNews } from '../../../api/home/getNews';
import { putNews } from '../../../api/home/putNews'
import { useParams } from 'react-router-dom'


export default function Home_news_edit() {



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
                // img: test[id].home_news_img
                img: 'test[0].home_news_img'
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
    // console.log(isData.endDate.slice(8, 10))
    // console.log(isData.endDate.slice(0, 8) + (parseInt(isData.endDate.slice(8, 10))+1))

    // 圖片上傳

    // const Input = styled('input')({
    //     display: 'none',
    // });

    // const onChange = e => {
    //     const file = e.target.files.item(0); // 取得選中檔案們的一個檔案
    //     const fileReader = new FileReader(); // FileReader為瀏覽器內建類別，用途為讀取瀏覽器選中的檔案
    //     fileReader.addEventListener("load", fileLoad);
    //     fileReader.readAsDataURL(file); // 讀取完檔案後，變成URL
    //     console.log("ok");
    //   };

    //   const fileLoad = e => {
    //     setImg(e.target.result);
    //     // 讀取到DataURL後，儲存在result裡面，指定為img
    //   };


    return (
        <div>
            <LayOut />
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
                            label="公告標題"
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
                            // onChange={handleChange}
                            // value={isData.startDate.slice(0, 8) + (parseInt(isData.startDate.slice(8, 10))+1)}
                            value={isData.startDate.slice(0, 8) + (parseInt(isData.startDate.slice(8, 10))+1)}
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
                            label="公告日期(迄) YYYY-MM-DD"
                            // onChange={handleChange}
                            // value={isData.endDate.slice(0, 8) + (parseInt(isData.endDate.slice(8, 10))+1)}
                            value={isData.endDate.slice(0, 8)+(parseInt(isData.endDate.slice(8, 10))+1)}
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


                        {/* 圖片上傳 */}
                        {/* <div>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <label htmlFor="contained-button-file">
                                    <Input onChange={onChange} accept="image/*" id="contained-button-file" multiple type="file" />
                                    <Button variant="outlined" component="span">
                                        上傳圖片
                                    </Button>
                                </label>
                                <Button variant="contained">上傳</Button>

                            </Stack>
                            <hr />
                            <img width="300" src={isData.img} />
                        </div> */}
                    </Box>
                    <ThemeProvider theme={theme}>
                        <Stack spacing={2} direction="row" style={{ display: 'flex', 'justify-content': 'flex-end' }}>
                            <Button color="neutral" variant="outlined" href='/home/news'>取消</Button>
                            <Button color="neutral" variant="contained" href='#'
                                onClick={() => {
                                    if (window.confirm("是否確認修改") == true) {
                                        console.log(isData);
                                        console.log("OK");
                                        putNews(isData).then((result) => {
                                            console.log(result)
                                        })
                                        window.location.href='/home/news'
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
