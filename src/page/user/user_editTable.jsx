import React, { Component, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {useLocation} from 'react-router-dom';


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
const theme = createTheme({
    palette: {
        neutral: {
            main: '#000',
            contrastText: '#fff'
        },
    },
});



const User_editTable= ({ listData, token, id }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    var i;
    
    // 權限判定
    if (token.user_id != 1){
        i = token.user_id-1
    } else {
        i=0
    }


    const url = useLocation()
    console.log(url.pathname)
    console.log(Array.from(url.pathname))



    return (
        <div>
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
                            defaultValue={listData[i].user_name}
                        />
                        <TextField id="outlined-basic"
                            disabled
                            label="帳號"
                            variant="outlined"
                            required="true"
                            defaultValue={listData[i].user_account}
                        />
                        <TextField id="outlined-basic"
                            label="密碼"
                            variant="outlined"
                            required="true"
                            defaultValue={listData[i].user_password}
                        />
                        <TextField id="outlined-basic"
                            disabled
                            label="帳號權限(請至店家管理頁修改)"
                            variant="outlined"
                            required="true"
                            defaultValue={listData[i].user_level}
                        />
                        <TextField id="outlined-basic"
                            disabled
                            label="進駐狀態(請至店家管理頁修改)"
                            variant="outlined"
                            required="true"
                            defaultValue={listData[i].sto_sta}
                        />

                    </Box>
                    <ThemeProvider theme={theme}>
                        <Stack spacing={2} direction="row" style={{ display: 'flex', 'justifyContent': 'flex-end' }}>
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


export {User_editTable} 