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
import { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

const ActCard = ({ key, id, name, img, hidden }) => {

    const [ischeck, setCheck] = useState(hidden)

    const isHidden = () => {
        setCheck(!ischeck);
    }

    const actEdit = () =>{
        window.location.href=`/activity/act_edit/${id}`;
    }
    const actDelete = () =>{
        window.confirm("是否確定刪除");
    }

    return <div  style={{"margin":"15px"}}>
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
                            <Stack onClick={isHidden} direction="row" spacing={1} alignItems="center">
                                <Typography style={{ "font-size": "10px" }}>OFF</Typography>
                                <AntSwitch checked={ischeck} inputProps={{ 'aria-label': 'ant design' }} size="small" />
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