import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Switch from '@mui/material/Switch'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import { useState, useEffect } from 'react';
import FormGroup from '@mui/material/FormGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { putActivity } from '../../../api/activity/putActivity';
import { deleteActivity } from '../../../api/activity/deleteActivity';



const theme = createTheme({
    palette: {
        neutral: {
            main: '#000',
            contrastText: '#fff'
        },
    },
});

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 15,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 2,
        '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 12,
        height: 12,
        borderRadius: 6,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
        boxSizing: 'border-box',
    },
}))

const ActCard = ({ key, title, startDate, endDate, startTime, endTime, organizer, organizerImg, location, type, quests, info, mainImg, isShow, isSlider, id }) => {

    // const [ischeck, setCheck] = useState(hi;ldden)

    // const isHidden = () => {
    //     setCheck(!ischeck);
    // }
    const [data, setData] = useState(
        {
            title: title,
            startDate: startDate.slice(0, 10),
            endDate: endDate.slice(0, 10),
            startTime: startTime,
            endTime: endTime,
            organizer: organizer,
            organizerImg: organizerImg,
            location: location,
            type: type,
            quests: quests,
            info: info,
            mainImg: mainImg,
            isShow: isShow,
            isSlider: isSlider,
            id: id
        }
    )

    const actEdit = () => {
        window.location.href = `/activity/act_edit/${id}`;
    }
    const actDelete = () => {
        console.log(id)
        if (isSlider == 1) {
            alert("此活動為輪播活動，請先將活動於輪播列表中下架。")
        } else {
            // window.confirm("是否確定刪除");
            if (window.confirm("是否確認刪除") == true) {
                deleteActivity(id).then((result) => {
                    console.log("已刪除")
                    console.log(result)
                })
                window.location.href = "/activity"
            } else {
                console.log("NO");
            }
        }

    }

    // 監測data有異動就執行function
    useEffect(() => {
        putActivity(data).then((result) => {
            console.log(result)
        })
    }, [data])

    return <div style={{ "margin": "15px" }}>
        <Card sx={{ maxWidth: 252, minHeight: 223 }}>
            <CardMedia component="img" alt="store-img" height="140" image={data.mainImg} />
            <div style={{ "display": "flex", "justify-content": "space-around", "align-items": "center" }}>
                <Typography gutterBottom fontSize="14" margin="5px" component="div" style={{ "min-height": "50px", "display": "flex", "align-items": "center" }}>
                    {data.title}
                </Typography>
            </div>
            <div>
                <ThemeProvider theme={theme}>
                    <CardActions style={{ "display": "flex", "justify-content": "space-around" }}>
                        <Button onClick={actEdit} size="small" variant="outlined" color="neutral">編輯</Button>
                        <Button onClick={actDelete} size="small" variant="outlined" color="error" >刪除</Button>
                        <FormGroup style={{ "margin": "3px" }}>
                            <Stack onClick={() => {
                                if (window.confirm("是否確認修改顯示狀態") == true) {
                                    console.log('origin', data.isShow)
                                    setData(prevState => ({
                                        ...prevState,
                                        isShow: !data.isShow
                                    }))
                                    console.log('new', data.isShow)
                                }
                            }}
                                direction="row" spacing={1} alignItems="center">
                                <Typography style={{ "font-size": "10px" }}>OFF</Typography>
                                <AntSwitch checked={data.isShow} inputProps={{ 'aria-label': 'ant design' }} size="small" />
                                <Typography style={{ "font-size": "10px" }}>ON</Typography>
                            </Stack>
                        </FormGroup>
                    </CardActions>
                </ThemeProvider>
            </div>
        </Card>

    </div>
}

export default ActCard