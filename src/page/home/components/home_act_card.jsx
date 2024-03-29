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
import { putHomeAct } from '../../../api/home/putHomeAct';
import { putActivity } from '../../../api/home/putActivity';
import { deleteHomeAct } from '../../../api/home/deleteHomeAct'

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

const ActCard = ({ key, id, name, img, hidden, sdate, edate, stime, etime, act_sta, act_id,act_title }) => {

    // const [ischeck, setCheck] = useState(hidden)

    const [data, setData] = useState(
        {
            relation: act_id,
            isShow: hidden,
            title: name,
            id: id
        }
    )

    //要傳回activity的資料=>putActData
    const [putActData, setPutActData] = useState({
        title: act_title,
        isSlider: 0,
        id: act_id
    });



    const actEdit = () => {
        window.location.href = `/home/act_edit/${id}`;
    }
    const actDelete = () => {
        // window.confirm("是否確定刪除");
        if (window.confirm("是否確認刪除") == true) {
            putActivity(putActData).then((result) => {
                console.log(result)
            })
            deleteHomeAct(id).then((result) => {
                console.log("已刪除")
                console.log(result)
            })
            window.location.href = "/home/act"
        } else {
            console.log("NO");
        }
    }

    // 監測data有異動就執行function
    useEffect(() => {
        putHomeAct(data).then((result) => {
            console.log(result)
        })
    }, [data])



    return <div style={{ "margin": "15px" }}>
        <Card sx={{ maxWidth: 252, minHeight: 223 }}>
            <CardMedia component="img" alt="store-img" height="140" image={img} />
            <div style={{ "display": "flex", "justify-content": "space-around", "align-items": "center" }}>
                <Typography gutterBottom fontSize="14" margin="5px" component="div">
                    {name}
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