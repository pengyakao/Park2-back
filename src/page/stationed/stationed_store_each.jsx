import React, { Component } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LayOutStation from '../../components/layout/LayOut_stationed';
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
import { getStoreApply, editStoreApply, postMail } from '../../api/stationed/storeApi';
import ReplyIcon from '@mui/icons-material/Reply';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    bgcolor: '#f4f4f4',
    borderRadius: 3,
    boxShadow: 24,
    padding: '40px 40px'
};

const pdfBox = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    bgcolor: '#f4f4f4',
    borderRadius: 3,
    boxShadow: 24,
    padding: '40px 40px',
    minWidth: '800px',
    minHeight: '500px'
};

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

    const [pdfOpen, setPdfOpen] = React.useState(false);
    const handlePdfOpen = () => setPdfOpen(true);
    const handlePdfClose = () => setPdfOpen(false);

    const openPdf = () => {
    }

    const { applyId } = useParams();

    const [data, setData] = useState([
        {
            sto_apply_id: '',
            sto_apply_brand: '',
            sto_apply_class: '',
            sto_apply_location: '',
            sto_apply_name: '',
            sto_apply_mail: '',
            sto_apply_tel: '',
            sto_apply_file: '',
            sto_apply_sta: '',
            sto_apply_date: ''
        }
    ])

    const [btn, setBtn] = useState([])
    const [nextTo, setNextTo] = useState([])
    const [nextState, setNextState] = useState([])

    const buttonList = {
        1: [
            {
                btn: '審核通過',
                stateTo: 2
            },
            {
                btn: '取消申請',
                stateTo: 5
            }
        ],
        2: [
            {
                btn: '簽約完成',
                stateTo: 3
            },
            {
                btn: '取消申請',
                stateTo: 5
            }
        ],
        3: [
            {
                btn: '轉退租',
                stateTo: 4
            }
        ],
        4: [],
        5: []
    } 

    const initData = async () => {
        await getStoreApply().then((result)=>{
            let target = result.filter(e=>e.sto_apply_id == applyId)
            
            // 依申請狀態顯示btn
            setBtn(buttonList[target[0].sto_apply_sta])


            // 申請狀態
            let stateData = target.map(e=>{
                if(e.sto_apply_sta == 1){
                    e.sto_apply_sta = '申請中'
                }else if(e.sto_apply_sta == 2){
                    e.sto_apply_sta = '簽約中'
                }else if(e.sto_apply_sta == 3){
                    e.sto_apply_sta = '進駐中'
                }else if(e.sto_apply_sta == 4){
                    e.sto_apply_sta = '已退租'
                }else if(e.sto_apply_sta == 5){
                    e.sto_apply_sta = '已取消'
                }
                return e
            })
            
            setData(stateData)
        })
    }

    useEffect(()=>{
        initData()
    },[])

    useEffect(()=>{
        console.log(btn)
    },[btn])

    return (
        <div>
            <LayOutStation />
            <div className='bs_article'>
                <a style={{ textDecoration: 'none', color: '#000', fontSize: '15px', display: 'inline-flex', alignItems: 'center', marginTop: '10px'}} href='/stationed_market/'>
                    <div className="icon" style={{ border: 'solid 2px #000', padding: '0px 3px', borderRadius: '3px'}}>
                        <ReplyIcon sx={{fontSize: '20px'}}></ReplyIcon>
                    </div>
                    <div style={{marginLeft: '10px', fontWeight: '500'}}>返回店家申請列表</div>
                </a>
                <div style={{ width: "100%" }}>
                    <div className="title">
                        <h1 style={{fontSize: '28px', margin: '0', margin: '15px 5px 5px 5px'}}>常駐店家進駐申請</h1>
                        <div style={{ border: 'solid 2px #000', display: 'inline-block', padding: '0px 15px', fontWeight: '900', borderRadius: '5px', marginTop: '10px', backgroundColor: '#000', color: '#BCFD55'}}>{data[0].sto_apply_sta}</div>
                    </div>
                    <TableContainer component={Paper} sx={{ maxHeight: 440, margin: '20px 0px 25px 0px' }}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
                            <TableHead sx={{backgroundColor: '#f4f4f4'}}>
                                <TableRow>
                                    <TableCell sx={{padding: '13px 16px', backgroundColor: '#f4f4f4', minWidth: '170px', borderRight: 'solid 2px #eee'}}>品牌/店家名稱</TableCell>
                                    <TableCell sx={{padding: '13px 16px', backgroundColor: '#f4f4f4', minWidth: '500px'}}>{data[0].sto_apply_brand}</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{borderRight: 'solid 2px #f4f4f4'}}>販售類型</TableCell>
                                    <TableCell >{data[0].sto_apply_class}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{borderRight: 'solid 2px #f4f4f4'}}>申請櫃位</TableCell>
                                    <TableCell >{data[0].sto_apply_location}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{borderRight: 'solid 2px #f4f4f4'}}>聯絡人</TableCell>
                                    <TableCell >{data[0].sto_apply_name}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{borderRight: 'solid 2px #f4f4f4'}}>聯絡信箱</TableCell>
                                    <TableCell >{data[0].sto_apply_mail}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{borderRight: 'solid 2px #f4f4f4'}}>聯絡電話</TableCell>
                                    <TableCell >{data[0].sto_apply_tel}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{borderRight: 'solid 2px #f4f4f4'}}>品牌介紹</TableCell>
                                    <TableCell>
                                    <ThemeProvider theme={theme}>
                                        <Button variant="contained" color="neutral" sx={{color: '#BCFD55'}} onClick={()=>{
                                            console.log('click')
                                            handlePdfOpen()
                                        }}>查看檔案</Button>
                                    </ThemeProvider>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <ThemeProvider theme={theme}>
                        <Stack spacing={2} direction="row" style={{ display: 'flex', 'justify-content': 'flex-start'}}>
                            {btn.map(e=>(
                                <Button color="neutral" variant="outlined" onClick={() => {
                                    handleOpen()
                                    let btnState = ''
                
                                    if(e.stateTo == 2){
                                        btnState = '"簽約中"'
                                    }else if(e.stateTo == 3){
                                        btnState = '"進駐中"'
                                    }else if(e.stateTo == 4){
                                        btnState = '"已退租"'
                                    }else if(e.stateTo == 5){
                                        btnState = '"已取消"'
                                    }
                                    setNextTo(
                                        btnState
                                    )
                                    setNextState(
                                        e.stateTo
                                    )
                                }}>{e.btn}</Button>
                            ))}
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
                                    <Box id="modelBox-content">
                                        <h4>確定更新申請狀態為{nextTo}</h4>
                                    </Box>
                                    <Stack spacing={2} direction="row">
                                        <Button color="neutral" variant="outlined" onClick={() => { setOpen(false); }}>取消</Button>
                                        <Button color="neutral" variant="contained" onClick={
                                            () => {
                                                setOpen(false);
                                                const inputData = {
                                                    id: data[0].sto_apply_id,
                                                    state: nextState
                                                }
                                                console.log(inputData)
                                                editStoreApply(inputData).then((result)=>{
                                                    if(nextState == 2){
                                                        const mail={
                                                            target: 'j951j951@gmail.com',
                                                            title: `Park2進駐申請通知，${data[0].sto_apply_brand}您好，您的店家進駐申請已通過！`,
                                                            content: '您好，您的店家進駐申請已通過，請詳讀合約內容並完成公司用印後回傳至 park2Taichung@gmail.com'
                                                        }
                                                        postMail(mail).then((result)=>{
                                                            console.log(result)
                                                        })
                                                    }
                                                })
                                                alert("修改成功");
                                                window.location.href = '/stationed_store'
                                            }}>確定修改
                                        </Button>
                                    </Stack>
                                </Box>
                            </Modal>
                            <Modal
                                open={pdfOpen}
                                onClose={handlePdfClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                                sx={{
                                    backgroundColor: 'rgba(0, 0, 0, .3)'
                                }}
                            >
                                <Box id="pdfBox" sx={pdfBox}>
                                    <Box id="pdfBox-content" sx={{marginBottom: '20px'}}>
                                        <iframe src={data[0].mar_apply_file+'#view=FitW'} style={{width: '100%', height: '460px'}}></iframe>
                                    </Box>
                                    <Stack spacing={2} direction="row">
                                        <Button color="neutral" variant="outlined" onClick={() => { setPdfOpen(false); }}>關閉</Button>
                                    </Stack>
                                </Box>
                            </Modal>
                            {/* <Button color="neutral" variant="outlined" href='/stationed_store'>取消</Button>
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
                            </div> */}
                        </Stack>
                    </ThemeProvider>
                </div>
            </div>
        </div>
    )
}
