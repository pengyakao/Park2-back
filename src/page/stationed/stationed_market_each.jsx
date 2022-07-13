import React, { Component } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LayOut from '../../components/layout/LayOut';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getMarketApply } from '../../api/stationed/marketApi'

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



export default function Stationed_market_each() {
    // state = {}
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { applyId } = useParams();

    const [data, setData] = useState([
        {
            mar_apply_id: '',
            mar_apply_brand: '',
            market_id: '',
            mar_apply_class: '',
            mar_apply_url: '',
            mar_apply_name: '',
            mar_apply_tel: '',
            mar_apply_mail: '',
            mar_apply_count: '',
            mar_apply_bill: '',
            mar_apply_file: '',
            mar_apply_sta: '',
            mar_apply_feeinfo: ''
        }
    ])
    useEffect(()=>{
        getMarketApply().then((result)=>{
            let target = result.filter(e=>e.mar_apply_id == applyId)

            // 後5碼
            let feeInfoData = target.map(e=>{
                if(e.mar_apply_sta == 1){
                    e.mar_apply_feeinfo = '尚未匯款'
                }
                return e
            })

            // 是否開發票
            let billData = feeInfoData.map(e=>{
                if(e.mar_apply_bill == 1){
                    e.mar_apply_bill = '是'
                }else if(e.mar_apply_bill == 0){
                    e.mar_apply_bill = '否'
                }
                return e
            })

            // 申請狀態
            let stateData = billData.map(e=>{
                if(e.mar_apply_sta == 1){
                    e.mar_apply_sta = '審核中'
                }else if(e.mar_apply_sta == 2){
                    e.mar_apply_sta = '待補件'
                }else if(e.mar_apply_sta == 3){
                    e.mar_apply_sta = '匯款中'
                }else if(e.mar_apply_sta == 4){
                    e.mar_apply_sta = '待查帳'
                }else if(e.mar_apply_sta == 5){
                    e.mar_apply_sta = '已完成'
                }else if(e.mar_apply_sta == 6){
                    e.mar_apply_sta = '已取消'
                }else if(e.mar_apply_sta == 7){
                    e.mar_apply_sta = '待退款'
                }else if(e.mar_apply_sta == 8){
                    e.mar_apply_sta = '已退款'
                }
                return e
            })
            
            setData(stateData)
            console.log(target)
        })
    },[])

    return (
        <div>
            <LayOut />
            <div className='bs_article'>
                <div style={{ width: "100%" }}>
                    <div className="title">
                        <h1 style={{fontSize: '28px', margin: '0', margin: '10px 5px 5px 5px'}}>風格市集進駐申請</h1>
                        <div style={{ border: 'solid 2px #000', display: 'inline-block', padding: '0px 15px', fontWeight: '900', borderRadius: '5px', marginTop: '10px', backgroundColor: '#000', color: '#fff'}}>{data[0].mar_apply_sta}</div>
                    </div>
                    <TableContainer component={Paper} sx={{ maxHeight: 440, margin: '20px 0px 25px 0px' }}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
                            <TableHead sx={{backgroundColor: '#f4f4f4'}}>
                                <TableRow>
                                    <TableCell sx={{padding: '13px 16px', backgroundColor: '#f4f4f4', minWidth: '170px', borderRight: 'solid 2px #eee'}}>品牌/店家名稱</TableCell>
                                    <TableCell sx={{padding: '13px 16px', backgroundColor: '#f4f4f4', minWidth: '500px'}}>DEREX 噴漆藝術家</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{borderRight: 'solid 2px #f4f4f4'}}>欲報名市集</TableCell>
                                    <TableCell >{data[0].market_id}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{borderRight: 'solid 2px #f4f4f4'}}>販售類型</TableCell>
                                    <TableCell >{data[0].mar_apply_class}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{borderRight: 'solid 2px #f4f4f4'}}>申請攤位數</TableCell>
                                    <TableCell >{data[0].mar_apply_count}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{borderRight: 'solid 2px #f4f4f4'}}>品牌連結</TableCell>
                                    <TableCell >{data[0].mar_apply_url}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{borderRight: 'solid 2px #f4f4f4'}}>聯絡人</TableCell>
                                    <TableCell >{data[0].mar_apply_name}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{borderRight: 'solid 2px #f4f4f4'}}>聯絡信箱</TableCell>
                                    <TableCell >{data[0].mar_apply_mail}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{borderRight: 'solid 2px #f4f4f4'}}>聯絡電話</TableCell>
                                    <TableCell >{data[0].mar_apply_tel}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{borderRight: 'solid 2px #f4f4f4'}}>是否開發票</TableCell>
                                    <TableCell >{data[0].mar_apply_bill}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{borderRight: 'solid 2px #f4f4f4'}}>匯款帳號 (後五碼)</TableCell>
                                    <TableCell >{data[0].mar_apply_feeinfo}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{borderRight: 'solid 2px #f4f4f4'}}>活動企劃書</TableCell>
                                    <TableCell >{data[0].mar_apply_file}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <ThemeProvider theme={theme}>
                        <Stack spacing={2} direction="row" style={{ display: 'flex', 'justify-content': 'flex-start'}}>
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