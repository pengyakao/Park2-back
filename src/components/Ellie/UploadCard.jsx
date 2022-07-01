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
import './UploadCard.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { AccessAlarm, NoEncryption, ThreeDRotation } from '@mui/icons-material'

export default function BasicSwitches() {
    return (
        <Card sx={{ maxWidth: 252, minHeight: 223, border: '5px solid #F4F4F4' }}>
            {/* <CardMedia
                component="img"
                alt="store-img"
                height="140"
                image="/img/store/MOLINO.jpeg"
            /> */}
            <button id="uploadIcon">
                <AddCircleOutlineIcon />
            </button>
            {/* <Typography gutterBottom fontSize="14" margin="5px" component="div">
                活動名稱
            </Typography> */}
            {/* <div>
                <CardActions margin="-5px">
                    <Button size="small">編輯</Button>
                    <Button size="small">刪除</Button>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Typography>Off</Typography>
                        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                        <Typography>On</Typography>
                    </Stack>
                </CardActions>
            </div> */}
        </Card>
    )
}
