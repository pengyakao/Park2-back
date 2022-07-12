import React, { Component } from 'react';
import LayOut from '../../../components/layout/LayOut';
import { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom'
import { getActivities } from '../../../api/home/getActivities'
import { getCarousel } from '../../../api/home/getCarousel'
import { putHomeAct } from '../../../api/home/putHomeAct'
import { CompressOutlined } from '@mui/icons-material';

const theme = createTheme({
    palette: {
        neutral: {
            main: '#000',
            contrastText: '#fff'
        },
    },
});

const style1 = {
    color: "#000",
    "font-family": 'Noto Sans TC',
    "font-weight": 500,
    "letter-spacing": "1px",
    "font-size": "20px",
}


const Home_act_edit = ({ add }) => {

    const [data, setData] = useState(
        []
    );

    //get url ID
    const { actId } = useParams();
    console.log(actId);

    useEffect(() => {
        async function getData() {
            await getCarousel().then((result) => {
                const listData = result
                getActivities().then((result2) => {
                    const listData2 = result2 //活動的資料表
                    // listData.forEach(margeList);
                    console.log('listData', listData);
                    let margeData = listData.filter(e => e.home_act_id == actId) //被選到的表(home_act)
                    console.log('margeData', margeData[0]);
                    let margeData2 = listData2.filter(e => e.act_id == margeData[0].act_id)//被選到的表(activity)
                    console.log('margeData2', margeData2[0]);
                    margeData[0].act_title = margeData2[0].act_title
                    margeData[0].act_Sdate = margeData2[0].act_Sdate
                    margeData[0].act_Edate = margeData2[0].act_Edate
                    margeData[0].act_Stime = margeData2[0].act_Stime
                    margeData[0].act_Etime = margeData2[0].act_Etime
                    setData(margeData[0]);



                });
            });
        }
        getData()
    }, [])







    return <div>
        <div>
            <LayOut />
            <div className='bs_article'>
                <div style={{ width: "80%" }}>
                    <h1>編輯輪播活動</h1>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            required
                            id="outlined-required"
                            label="首頁輪播標題(限11字)"
                            defaultValue=" "
                            value={data.home_act_title}
                            // required="true"
                            onChange={(e) => {
                                setData(prev => ({
                                    ...prev
                                    , home_act_title: e.target.value
                                }))
                            }}
                        />
                        <TextField
                            disabled
                            id="outlined-disabled"
                            label="活動名稱"
                            defaultValue=" "
                            value={data.act_title}
                        />
                        <TextField
                            disabled
                            id="outlined-disabled"
                            label="活動日期"
                            defaultValue=' '
                            value={`${data.act_Sdate} ~ ${data.act_Edate}`}
                        

                        />
                        <TextField
                            disabled
                            id="outlined-disabled"
                            label="活動時間"
                            defaultValue=" "
                            value={`${data.act_Stime} ~ ${data.act_Etime}`}
                       

                        />


                    </Box>
                    <ThemeProvider theme={theme}>
                        <Stack spacing={2} direction="row" style={{ display: 'flex', 'justify-content': 'flex-end' }}>
                            <Button color="neutral" variant="outlined" href='/home/act'>取消</Button>
                            <Button color="neutral" variant="contained"
                                onClick={() => {
                                    if (window.confirm("是否確認修改") == true) {
                                        var putData = {
                                            title: data.home_act_title,
                                            isShow: data.home_act_sta,
                                            relation: data.act_id,
                                            id: data.home_act_id
                                        }
                                        putHomeAct(putData).then((result) => {
                                            console.log(putData)
                                            console.log(result)
                                        })
                                        alert('已送出')
                                        window.location.href = "/home/act"
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
    </div>

}



export default Home_act_edit;