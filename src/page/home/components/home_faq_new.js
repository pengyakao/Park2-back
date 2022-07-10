import React, { Component } from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LayOut from '../../../components/layout/LayOut';
import { postFaq } from '../../../api/home/postFaq';



const theme = createTheme({
    palette: {
        neutral: {
            main: '#000',
            contrastText: '#fff'
        },
    },
});

export default function Home_faq_new() {

    const [isData, setData] = useState(
        {
            question: '問題',
            answer: '答案',
            isShow: '1'
        }
    );


    return (
        <div>
            <LayOut />
            <div className='bs_article'>
                <div style={{ width: "80%" }}>
                    <h1>新增FAQ</h1>
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
                                    if (window.confirm("是否確認新增") == true) {
                                        console.log(isData);
                                        postFaq(isData).then((result) => {
                                            console.log(result)
                                        })
                                        window.location.href= "/home/faq"
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
