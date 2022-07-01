import React, { Component } from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



const theme = createTheme({
    palette: {
        neutral: {
            main: '#000',
            contrastText: '#fff'
        },
    },
});


export default function Home_mar() {

    const [isMar, setMar] = useState([
        {
            id: 1,
            text: "//   PARK2，一座大人系非典型公園，探索公園與城市生活的更多可能！   "
        }
    ]);

    return (
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
                    value={isMar[0].text}
                />
            </Box>
            <ThemeProvider theme={theme}>
                <Stack spacing={2} direction="row" style={{ display: 'flex', 'justify-content': 'flex-end' }}>
                    <Button color="neutral" variant="outlined">取消</Button>
                    <Button color="neutral" variant="contained" 
                        onClick={() => {
                            alert('送出')
                        }}
                    >送出</Button>
                </Stack>
            </ThemeProvider>

        </div>
    );
}

