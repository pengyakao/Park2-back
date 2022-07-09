import React, { Component } from 'react';
import LayOut from '../../../components/Crystal/LayOut';
import { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { postCarousel } from '../../../api/home/postCarousel';
import { getActivities } from '../../../api/home/getActivities';


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

// const data = [
//     {
//         label: "活動名稱A",
//         act_Sdate: "05/06",
//         act_Edate: "05/21",
//         act_Stime: "21:00",
//         act_Etime: "21:30"
//         act_sta:0
//     }, {
//         label: "活動名稱B",
//         act_Sdate: "05/01",
//         act_Edate: "05/02",
//         act_Stime: "20:00",
//         act_Etime: "20:30"
//     }, {
//         label: "活動名稱C",
//         act_Sdate: "04/28",
//         act_Edate: "04/29",
//         act_Stime: "09:00",
//         act_Etime: "09:30"
//     }, {
//         label: "活動名稱D",
//         act_Sdate: "05/16",
//         act_Edate: "05/17",
//         act_Stime: "21:00",
//         act_Etime: "21:30"
//     },
// ]




export default function Home_act_new() {

    const [data, setData] = useState([]);

    const [isData1, setData1] = useState(
        {
            relation: '活動編號',
            isShow: 0,
            title: '活動標題'
        }
    );

    useEffect(() => {
        async function getData() {
            await getActivities().then((result) => {
                let data = result.filter(e=>e.act_sta == 1)
                data = result.filter(e=>e.act_is_slider == 0)
                data.forEach(addLabel);
                console.log(data);
                setData(data)
                function addLabel(item, index) {
                    item.label = item.act_title;
                }
            })
        }
        getData()
    }, [])

    const [date, setDate] = useState("MM/DD-MM/DD");
    const [time, setTime] = useState("HH/mm-HH/mm");

    var dateChange = (obj) => {
        // var title = obj.target.innerHTML;
        console.log(obj);
        console.log(obj.target.dataset.optionIndex);
        var cnt = obj.target.dataset.optionIndex;
        setDate(`${data[cnt].act_Sdate.slice(0, 10)} ~ ${data[cnt].act_Edate.slice(0, 10)}`);
        setTime(`${data[cnt].act_Stime.slice(0, 5)} ~ ${data[cnt].act_Etime.slice(0, 5)}`);
        setData1(prev => ({
            ...prev
            , relation: obj.target.value
        }))
    }


    return <div>
        <div>
            <LayOut />
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
                                        postCarousel(isData1).then((result) => {
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



