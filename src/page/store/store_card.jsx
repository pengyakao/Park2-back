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
import { useState, useEffect } from 'react'
import FormGroup from '@mui/material/FormGroup'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { putStore } from '../../api/store/putStore'
import { deleteStore } from '../../api/store/deleteStore'


const theme = createTheme({
    palette: {
        neutral: {
            main: '#000',
            contrastText: '#fff',
        },
    },
})

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

const StoreCard = ({ name, type, img, tel, location, pay1, pay2, pay3, pay4, pay5, pay6, pay7, mon, tue, wed, thu, fri, sat, sun, fb, ig, line, info, state, isMain, firstImg, id }) => {

    const [data, setData] = useState({
        name: name,
        type: type,
        img: img,
        tel: tel,
        location: location,
        pay1: pay1,
        pay2: pay2,
        pay3: pay3,
        pay4: pay4,
        pay5: pay5,
        pay6: pay6,
        pay7: pay7,
        mon: mon,
        tue: tue,
        wed: wed,
        thu: thu,
        fri: fri,
        sat: sat,
        sun: sun,
        fb: fb,
        ig: ig,
        line: line,
        info: info,
        state: state,
        isMain: isMain,
        firstImg: firstImg,
        id: id
    })


    // const [ischeck, setCheck] = useState(state)

    // const isHidden = () => {
    //     setCheck(!ischeck)
    // }

    const Edit = () => {
        window.location.href = `/store/store_edit/${id}`
    }
    const Delete = () => {
        // window.confirm("是否確定刪除");
        if (window.confirm("是否確認刪除") == true) {
            deleteStore(id).then((result) => {
                console.log("已刪除")
                console.log(result)
            })
            window.location.href = "/store"
        } else {
            console.log("NO");
        }
    }

    // 監測data有異動就執行function
    useEffect(() => {
        // putStore(data).then((result) => {
        //     console.log(result)
        // })
    }, [data.state])

    return (
        <div style={{ margin: '15px' }}>
            <Card sx={{ maxWidth: 252, minHeight: 223 }}>
                <CardMedia component="img" alt="store-img" height="140" image={data.firstImg} />
                <div style={{ display: 'flex', 'justify-content': 'space-around', 'align-items': 'center' }}>
                    <Typography gutterBottom fontSize="14" margin="5px" component="div">
                        {data.name}
                    </Typography>
                </div>
                <div>
                    <ThemeProvider theme={theme}>
                        <CardActions style={{ display: 'flex', 'justify-content': 'space-around' }}>
                            <Button onClick={Edit} size="small" variant="outlined" color="neutral">
                                編輯
                            </Button>
                            <Button onClick={Delete} size="small" variant="outlined" color="error">
                                刪除
                            </Button>
                            <FormGroup style={{ margin: '3px' }}>
                                <Stack onClick={() => {
                                    if (window.confirm("是否確認修改顯示狀態") == true) {
                                        console.log('origin', data.state)
                                        setData(prevState => ({
                                            ...prevState,
                                            state: !data.state
                                        }))
                                        console.log('new', data.state)
                                    }
                                }}
                                    direction="row" spacing={1} alignItems="center">
                                    <Typography style={{ 'font-size': '10px' }}>OFF</Typography>
                                    <AntSwitch
                                        checked={data.state}
                                        inputProps={{ 'aria-label': 'ant design' }}
                                        size="small"
                                    />
                                    <Typography style={{ 'font-size': '10px' }}>ON</Typography>
                                </Stack>
                            </FormGroup>
                        </CardActions>
                    </ThemeProvider>
                </div>
            </Card>
        </div>
    )
}

export default StoreCard
