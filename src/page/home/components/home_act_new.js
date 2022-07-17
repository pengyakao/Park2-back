import React, { Component } from 'react';
import LayOutHome from '../../../components/layout/LayOut_home';

import { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { postCarousel } from '../../../api/home/postCarousel';
import { getActivities } from '../../../api/home/getActivities';
import { putActivity } from '../../../api/home/putActivity';


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


export default function Home_act_new() {

    //這邊需要用的資料=>data
    const [data, setData] = useState([]);

    // 要傳回home_act的資料=>isData1
    const [isData1, setData1] = useState(
        {
            relation: '活動編號',
            isShow: 0,
            title: '活動標題'
        }
    );

    //activity的資料=>actData
    const [actData, setActData] = useState({});
    //要傳回activity的資料=>putActData
    const [putActData, setPutActData] = useState({
        title: "",
        isSlider: "",
        id: ""
    });






    useEffect(() => {
        async function getData() {
            await getActivities().then((result) => {
                let data = result.filter(e => e.act_sta == 1)
                data = data.filter(e => e.act_is_slider == 0)
                //加label=>下拉要用的
                data.forEach(addLabel);
                console.log(data);
                setData(data)
                function addLabel(item, index) {
                    item.label = item.act_id + " - " + item.act_title;
                }
                //actData 資料定義
                setActData(result)
            })
        }
        getData()
    }, [])


    const [date, setDate] = useState("MM/DD-MM/DD");
    const [time, setTime] = useState("HH/mm-HH/mm");

    var dateChange = (obj) => {
        var selectId = obj.target.innerHTML.split(" - ")[0];
        console.log(obj);
        console.log(selectId);
        var cnt = obj.target.dataset.optionIndex;
        setDate(`${data[cnt].act_Sdate.slice(0, 10)} ~ ${data[cnt].act_Edate.slice(0, 10)}`);
        setTime(`${data[cnt].act_Stime.slice(0, 5)} ~ ${data[cnt].act_Etime.slice(0, 5)}`);
        setData1(prev => ({
            ...prev
            , relation: selectId
        }))
        var newactData = actData.filter(e => e.act_id == selectId)
        console.log(newactData)
        setPutActData(prev => ({ ...prev, title: newactData[0].act_title }))
        setPutActData(prev => ({ ...prev, isSlider: 1 }))
        setPutActData(prev => ({ ...prev, id: newactData[0].act_id }))
    }


    return <div>
        <div>
            <LayOutHome />
            <div className='bs_article'>
                <div style={{ width: "80%" }}>
                    <h1>新增輪播活動</h1>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <Autocomplete

                            onChange={dateChange}
                            disablePortal
                            id="combo-box-demo"
                            options={data}
                            renderInput={(params) => <TextField {...params} label="選擇活動" />}
                        />
                        <TextField
                            id="outlined-basic"
                            label="首頁輪播標題(限11字)"
                            variant="outlined"
                            required="true"
                            onChange={(e) => {
                                setData1(prev => ({
                                    ...prev
                                    , title: e.target.value
                                }))
                            }}
                        />
                        <TextField
                            disabled
                            id="outlined-disabled"
                            label="活動日期"
                            // defaultValue={date}
                            value={date}
                        />
                        <TextField
                            disabled
                            id="outlined-disabled"
                            label="活動時間"
                            // defaultValue={time}
                            value={time}
                        />


                    </Box>
                    <ThemeProvider theme={theme}>
                        <Stack spacing={2} direction="row" style={{ display: 'flex', 'justify-content': 'flex-end' }}>
                            <Button color="neutral" variant="outlined" href='/home/act'>取消</Button>
                            <Button color="neutral" variant="contained"
                                onClick={() => {
                                    if (window.confirm("是否確認新增") == true) {
                                        console.log(isData1);
                                        console.log(putActData)
                                        postCarousel(isData1).then((result) => {
                                            console.log(result)
                                        })
                                        putActivity(putActData).then((result) => {
                                            console.log(result)
                                        })
                                        window.location.href="/home/act"
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


