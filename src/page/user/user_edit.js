import React, { Component } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LayOut from '../../components/Crystal/LayOut';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 757,
    // height: 405,
    display: 'flex',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
};

var data = [
    {
        user_id: 1,
        sto_id: null,
        user_account: "park2@google.com",
        user_password: 12345678,
        user_name: "Park2",
        user_level: 999,
        sto_sta: 1
    },
    {
        user_id: 2,
        sto_id: 1,
        user_account: "min@google.com",
        user_password: 12345678,
        user_name: "酉5PM TWCAUDEX",
        user_level: 1,
        sto_sta: 1
    },
    {
        user_id: 3,
        sto_id: 2,
        user_account: "alice@google.com",
        user_password: 12345678,
        user_name: "米弎豆お茶処MISATO",
        user_level: 2,
        sto_sta: 1
    },
    {
        user_id: 4,
        sto_id: 3,
        user_account: "bear@google.com",
        user_password: 12345678,
        user_name: "新村站著吃烤肉",
        user_level: 3,
        sto_sta: 0
    },

]

const theme = createTheme({
    palette: {
        neutral: {
            main: '#000',
            contrastText: '#fff'
        },
    },
});



export default function User_edit() {
    // state = {}
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <LayOut />
            <div className='bs_article'>
                <div style={{ width: "80%" }}>
                    <h1>編輯帳號</h1>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic"
                            disabled
                            label="店家名稱"
                            variant="outlined"
                            required="true"
                            defaultValue={data[0].user_name}
                        />
                        <TextField id="outlined-basic"
                            disabled
                            label="帳號"
                            variant="outlined"
                            required="true"
                            defaultValue={data[0].user_account}
                        />
                        <TextField id="outlined-basic"
                            label="密碼"
                            variant="outlined"
                            required="true"
                            defaultValue={data[0].user_password}
                        />
                        <TextField id="outlined-basic"
                            disabled
                            label="帳號權限(請至店家管理頁修改)"
                            variant="outlined"
                            required="true"
                            defaultValue={data[0].user_level}
                        />
                        <TextField id="outlined-basic"
                            disabled
                            label="進駐狀態(請至店家管理頁修改)"
                            variant="outlined"
                            required="true"
                            defaultValue={data[0].sto_sta}
                        />

                    </Box>
                    <ThemeProvider theme={theme}>
                        <Stack spacing={2} direction="row" style={{ display: 'flex', 'justify-content': 'flex-end' }}>
                            <Button color="neutral" variant="outlined" href='/user'>取消</Button>
                            <div>
                                <Button onClick={handleOpen} color="neutral" variant="contained" href='#'>修改密碼</Button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                    sx={{
                                        backgroundColor: 'rgba(0, 0, 0, .3)'
                                    }}
                                >
                                    <Box id="modelBox" sx={style}>
                                        <Box id="modelBox-content"
                                            sx={{ mt: 2 }}
                                            style={{"background-color":"white"}}
                                        >
                                            <div>
                                                <div>
                                                    <span>新密碼：</span>
                                                    <TextField
                                                        id="standard-basic"
                                                        label=""
                                                        variant="standard"
                                                        />
                                                </div>
                                                <div><span>確認新密碼：</span><TextField
                                                    id="standard-basic"
                                                    label=""
                                                    variant="standard" /></div></div>
                                        </Box>
                                        <Stack spacing={2} direction="row">
                                            <Button color="neutral" variant="outlined" onClick={() => { setOpen(false); }}>取消</Button>
                                            <Button color="neutral" variant="contained" onClick={() => { setOpen(false); alert("密碼已修改") }}>確定修改</Button>
                                        </Stack>
                                    </Box>
                                </Modal>
                            </div>
                        </Stack>
                    </ThemeProvider>
                </div>
            </div>
        </div>
    )

}