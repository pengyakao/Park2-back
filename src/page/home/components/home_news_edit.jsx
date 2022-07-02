import React, { Component } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LayOut from '../../../components/Crystal/LayOut';


var data = [
    {
        home_news_id: 1,
        home_news_title: "【Rockland】營業時間異動公告",
        home_news_sta: 1,
        home_news_img: "https://placem.at/things",
        home_news_Sdate: "2022-04-01",
        home_news_Edate: "2022-04-02",
        home_news_info: "本週的天氣仍不穩定，期望讓參與活動的品牌主理人、和來到這裡遊逛的大家，都能夠完整體驗到活動的呈現，故審慎評估過後，決定本週《我出去一下．生活裝飾篇》活動取消。<br>但星際大戰為主題的品牌出店計畫仍會在 PARK2 B1舉行！除了會在現場販售星際大戰相關的周邊外，也邀請到重量級的星戰收藏家，在5/7活動當天帶來期間限定的精緻收藏展示！星戰迷絕對不能錯過！"
    }
]

const theme = createTheme({
    palette: {
        neutral: {
            main: '#000',
            contrastText: '#fff'
        },
    },
});


class Home_news_edit extends Component {
    state = {}


    render() {
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
                                defaultValue={data[0].home_news_title}

                            />
                            <TextField
                                required="true"
                                type="date"
                                id="outlined-disabled"
                                label="公告日期(起)"
                                // onChange={handleChange}
                                defaultValue={data[0].home_news_Sdate}
                            />
                            <TextField
                                required="true"
                                type="date"
                                id="outlined-disabled"
                                label="公告日期(起)"
                                // onChange={handleChange}
                                defaultValue={data[0].home_news_Edate}
                            />


                            <TextField id="outlined-basic"
                                label="公告內容"
                                variant="outlined"
                                required="true"
                                multiline
                                rows={5}
                                defaultValue={data[0].home_news_info}
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
                                        alert('送出')
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

export default Home_news_edit;