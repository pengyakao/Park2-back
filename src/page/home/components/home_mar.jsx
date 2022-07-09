import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LayOut from '../../../components/Crystal/LayOut';

import { getMarquee } from '../../../api/home/getMarquee';
import { putMarquee } from '../../../api/home/putMarquee';

const theme = createTheme({
    palette: {
        neutral: {
            main: '#000',
            contrastText: '#fff'
        },
    },
});


export default function Home_mar() {
    const [isMar, setMar] = useState(
        {
            id: 0,
            info: ""
        }
    );


    // 接api (要先input {getMarquee})
    useEffect(() => {
        // 要拿 某筆活動 的資料
        async function getMar(params) {
            let test = await getMarquee().then((result) => {
                return result
            })
            await setMar(prev => ({
                ...prev
                , id: test[0].marquee_id
            }))
            await setMar(prev => ({
                ...prev
                , info: test[0].marquee_info
            }))

            console.log(isMar)
        }
        getMar()
    }, [])





    return (
        <div>
            <LayOut />
            <div className='bs_article'>
                <div style={{ width: "80%" }}>
                    <h1>跑馬燈管理</h1>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic"
                            label="跑馬燈內容"
                            variant="outlined"
                            required="true"
                            multiline
                            rows={10}
                            value={isMar.info}
                            onChange={(e) => {
                                setMar(prev => ({
                                    ...prev
                                    , info: e.target.value
                                }))
                            }}
                        />
                    </Box>
                    <ThemeProvider theme={theme}>
                        <Stack spacing={2} direction="row" style={{ display: 'flex', 'justify-content': 'flex-end' }}>
                            <Button color="neutral" variant="contained"
                                onClick={() => {
                                    if (window.confirm("是否確認修改") == true) {
                                        console.log("OK");
                                        putMarquee(isMar).then((result) => {
                                            console.log(result)
                                        })
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

