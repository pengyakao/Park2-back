import React, { Component } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LayOut from '../../components/layout/LayOut';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getStoreApply } from '../../api/stationed/storeApi'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: 5,
    boxShadow: 24
};
const tag= {
    fontSize: '13px',
    fontWeight: '700',
    // backgroundColor: '#000',
    // color: '#fff',
    // padding: '5px 15px',
    borderRadius: '2px',
    margin: '10px 7px',
    display: 'inline-block'
}

const theme = createTheme({
    palette: {
        neutral: {
            main: '#000',
            contrastText: '#fff'
        },
    },
});



export default function Stationed_store_each() {
    // state = {}
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { applyId } = useParams();

    const [data, setData] = useState([
        {
            sto_apply_id: '',
            sto_apply_brand: '',
            sto_apply_location: '',
            sto_apply_class: '',
            sto_apply_name: '',
            sto_apply_tel: '',
            sto_apply_mail: '',
            sto_apply_time: '',
            sto_apply_file: '',
            sto_apply_sta: '',
            sto_apply_date: ''
        }
    ])
    useEffect(()=>{
        getStoreApply().then((result)=>{
            let target = result.filter(e=>e.sto_apply_id == applyId)
            setData(target)
            console.log(target)
        })
    },[])

    return (
        <div>
            <LayOut />
            <div className='bs_article'>
                <div style={{ width: "80%" }}>
                    <div className="title">
                        <h1 style={{fontSize: '28px', margin: '0', margin: '10px 5px 5px 5px'}}>店家進駐申請</h1>
                        <div style={tag}>{data[0].sto_apply_brand}</div>
                    </div>

                    {/* <h1>『店家』單一訂單資訊審核頁(通過、轉待繳費/需補件/不通過)</h1> */}
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
                            // value={data[0].sto_apply_brand} 
                            // defaultValue={data[0]}
                        />
                        <TextField id="outlined-basic"
                            disabled
                            label="帳號"
                            variant="outlined"
                            required="true"
                            // defaultValue={data[0].user_account}
                        />
                        <TextField id="outlined-basic"
                            label="密碼"
                            variant="outlined"
                            required="true"
                            // defaultValue={data[0].user_password}
                        />
                        <TextField id="outlined-basic"
                            disabled
                            label="帳號權限(請至店家管理頁修改)"
                            variant="outlined"
                            required="true"
                            // defaultValue={data[0].user_level}
                        />
                        <TextField id="outlined-basic"
                            disabled
                            label="進駐狀態(請至店家管理頁修改)"
                            variant="outlined"
                            required="true"
                            // defaultValue={data[0].sto_sta}
                        />

                    </Box>
                    <ThemeProvider theme={theme}>
                        <Stack spacing={2} direction="row" style={{ display: 'flex', 'justify-content': 'flex-end' }}>
                            <Button color="neutral" variant="outlined" href='/stationed_store'>取消</Button>
                            <div>
                                <Button onClick={handleOpen} color="neutral" variant="contained" href='#'>確定修改</Button>
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