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
    const home_act_data = [
        {
            home_act_id: 1,
            act_id: 1,
            home_act_sta: 1,
            home_act_title: "活動名稱A"
        },
        {
            home_act_id: 2,
            act_id: 2,
            home_act_sta: 0,
            home_act_title: "活動名稱B"
        }, {
            home_act_id: 3,
            act_id: 3,
            home_act_sta: 1,
            home_act_title: "活動名稱C"
        }, {
            home_act_id: 4,
            act_id: 4,
            home_act_sta: 0,
            home_act_title: "活動名稱D"
        }
    ]

    const act_data = [
        {
            act_id: "活動名稱A",
            act_Sdate: "05/06",
            act_Edate: "05/21",
            act_Stime: "21:00",
            act_Etime: "21:30"
        }, {
            act_id: "活動名稱B",
            act_Sdate: "05/01",
            act_Edate: "05/02",
            act_Stime: "20:00",
            act_Etime: "20:30"
        }, {
            act_id: "活動名稱C",
            act_Sdate: "04/28",
            act_Edate: "04/29",
            act_Stime: "09:00",
            act_Etime: "09:30"
        }, {
            act_id: "活動名稱D",
            act_Sdate: "05/16",
            act_Edate: "05/17",
            act_Stime: "21:00",
            act_Etime: "21:30"
        },
    ]

    const [data, setData] = useState(
        []
    );


    // const data = {
    //     relation: '活動編號',
    //   isShow: '顯示狀態',
    //     title: '活動標題',
    //   id: '編號'
    // }


    //get url ID
    const { actId } = useParams();
    console.log(actId);

    useEffect(() => {
        async function getData() {
            await getCarousel().then((result) => {
                const listData = result
                getActivities().then((result2) => {
                    const listData2 = result2
                    const margeData = listData;
                    listData.forEach(margeList);
                    console.log('margeData', margeData);
                    console.log('margeData2', margeData[actId - 1]);
                    margeData[actId - 1].title = listData[actId - 1].home_act_title
                    margeData[actId - 1].isShow = listData[actId - 1].home_act_sta
                    setData(margeData[actId - 1]);
                    function margeList(item, index) {
                        console.log('margeData', margeData)
                        console.log(item.act_id);
                        let filter = listData2.filter(e => e.act_id == item.act_id)
                        margeData[index].relation = filter[0].act_id
                        margeData[index].act_title = filter[0].act_title
                        margeData[index].startDate = filter[0].act_Sdate
                        margeData[index].endDate = filter[0].act_Edate
                        margeData[index].act_Stime = filter[0].act_Stime
                        margeData[index].act_Etime = filter[0].act_Etime
                        // margeData[index].img = "filter[0].act_img"
                        // margeData[index].info = filter[0].act_info
                        // margeData[index].act_img = filter[0].act_img
                        // margeData[index].act_sta = filter[0].act_sta
                    }
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
                            id="outlined-basic"
                            label="首頁輪播標題(限11字)"
                            variant="outlined"
                            required="true"
                            defaultValue=" "
                            value={data.title}
                            onChange={(e) => {
                                setData(prev => ({
                                    ...prev
                                    , title: e.target.value
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
                            value={`${data.startDate} ~ ${data.endDate}`}

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
                                            title: data.title,
                                            isShow: data.isShow,
                                            relation: data.relation,
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