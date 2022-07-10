import React, { Component } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LayOut from '../../../components/layout/LayOut';
import { getFaq } from '../../../api/home/getFaq';
import { putFaq } from '../../../api/home/putFaq';

import { useParams } from 'react-router-dom'


export default function Home_faq_edit(props) {


    const [isData, setData] = useState(
        {
            id: '編號',
            question: '開始日期',
            answer: '結束日期',
            isShow: '顯示狀態'
        }
    );
    
    //get url ID
    const { faqId } =  useParams();
    // console.log(faqId);

    useEffect(() => {
        
        async function getData(params) {
            let getDataItem = await getFaq().then((result) => {
                // console.log(result)
                // console.log(faqId)
                var dataItem = result.filter(e => e.home_FAQ_id == faqId)
                // console.log(dataItem[0].home_FAQ_qu)
                return dataItem
            })
            await setData(prev => ({
                ...prev,
                question: getDataItem[0].home_FAQ_qu
            }))
            await setData(prev => ({
                ...prev,
                answer: getDataItem[0].home_FAQ_ans
            }))
            await setData(prev => ({
                ...prev,
                isShow: getDataItem[0].home_FAQ_sta
            }))
            await setData(prev => ({
                ...prev,
                id: getDataItem[0].home_FAQ_id
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

    return (
        <div>
            <LayOut />
            <div className='bs_article'>
                <div style={{ width: "80%" }}>
                    <h1>編輯FAQ</h1>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic"
                            label="FAQ題目"
                            variant="outlined"
                            required="true"
                            value={isData.question}
                            onChange={(e) => {
                                setData(prev => ({
                                    ...prev
                                    , question: e.target.value
                                }))
                            }}
                        />
                        <TextField id="outlined-basic"
                            label="FAQ回答"
                            variant="outlined"
                            required="true"
                            multiline
                            rows={5}
                            value={isData.answer}
                            inputProps={{
                                step: 1,
                                min: 0,
                                max: 10,
                                type: 'number'
                            }}
                            onChange={(e) => {
                                setData(prev => ({
                                    ...prev
                                    , answer: e.target.value
                                }))
                            }}
                        />
                    </Box>
                    <ThemeProvider theme={theme}>
                        <Stack spacing={2} direction="row" style={{ display: 'flex', 'justify-content': 'flex-end' }}>
                            <Button color="neutral" variant="outlined" href='/home/faq'>取消</Button>
                            <Button color="neutral" variant="contained"
                                onClick={() => {
                                    if (window.confirm("是否確認修改") == true) {
                                        console.log(isData);
                                        putFaq(isData).then((result) => {
                                            console.log(result)
                                        })
                                        window.location.href="/home/faq"
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


    )

}



