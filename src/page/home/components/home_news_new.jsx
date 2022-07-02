import React, { Component } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LayOut from '../../../components/Crystal/LayOut';


const theme = createTheme({
    palette: {
        neutral: {
            main: '#000',
            contrastText: '#fff'
        },
    },
});


class Home_news_new extends Component {
    state = {}

    render() {
        return (
            <div>
                <LayOut />
                <div className='bs_article'>
                    <div style={{ width: "80%" }}>
                        <h1>新增公告</h1>
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
                            />
                            <TextField
                                required="true"
                                type="date"
                                id="outlined-disabled"
                                label="公告日期(起)"
                                // onChange={handleChange}
                                defaultValue="2022-01-01"
                            />
                            <TextField
                                required="true"
                                type="date"
                                id="outlined-disabled"
                                label="公告日期(起)"
                                // onChange={handleChange}
                                defaultValue="2022-01-01"

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
                                    type: 'number'
                                }}
                            />
                        </Box>
                        <ThemeProvider theme={theme}>
                            <Stack spacing={2} direction="row" style={{ display: 'flex', 'justify-content': 'flex-end' }}>
                                <Button color="neutral" variant="outlined" href='/home/news'>取消</Button>
                                <Button color="neutral" variant="contained" href='/home/news'
                                    onClick={() => {
                                        window.confirm("確定送出");
                                    }}
                                >送出</Button>
                            </Stack>
                        </ThemeProvider>
                    </div>
                </div>
            </div>




        );
    }
}

export default Home_news_new;