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
import { getMarketApply, getMarketList, editMarketApply } from '../../api/stationed/marketApi';
import { checkLogin } from '../../api/login/isLogin'
import ReplyIcon from '@mui/icons-material/Reply';
import dayjs from 'dayjs';

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

export default function Stationed_market_each() {
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

    const [btn, setBtn] = useState([])
    const [nextTo, setNextTo] = useState([])
    const [nextState, setNextState] = useState([])

    const buttonList = {
        1: [
            {
                btn: '審核通過',
                stateTo: 3
            },
            {
                btn: '退回補件',
                stateTo: 2
            },
            {
                btn: '取消申請',
                stateTo: 7
            }
        ],
        2: [
            {
                btn: '取消申請',
                stateTo: 7
            }
        ],
        3: [
            {
                btn: '取消申請',
                stateTo: 7
            }
        ],
        4: [
            {
                btn: '已確認收款',
                stateTo: 5
            },
            {
                btn: '取消申請(退款)',
                stateTo: 7
            }
        ],
        5: [
            {
                btn: '取消申請(退款)',
                stateTo: 7
            }
        ],
        6: [
            {
                btn: '已完成退款',
                stateTo: 7
            }
        ],
        7: []
    } 

    const initData = async () => {
        let marketList = []
        await getMarketList().then((result)=>{
            marketList = result
        })
        await getMarketApply().then((result)=>{
            let target = result.filter(e=>e.mar_apply_id == applyId)

            console.log(buttonList[target[0].mar_apply_sta])
            
            // 依申請狀態顯示btn
            setBtn(buttonList[target[0].mar_apply_sta])

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
                    e.mar_apply_sta = '待退款'
                }else if(e.mar_apply_sta == 7){
                    e.mar_apply_sta = '已取消'
                }
                return e
            })
            console.log(marketList)
            let marketData = stateData.map(e=>{
                marketList.forEach(o=>{
                    if(e.market_id == o.market_id){
                        e.market_id = o.market_title
                    }
                })
                return e
            })
            
            setData(marketData)
        })
    }

    useEffect(()=>{
        checkLogin().then(result=>{
            console.log(result)
        })
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
                    <div style={{marginLeft: '10px', fontWeight: '500'}}>返回市集申請列表</div>
                </a>
                <div style={{ width: "100%" }}>
                    <div className="title">
                        <h1 style={{fontSize: '28px', margin: '0', margin: '15px 5px 5px 5px'}}>風格市集進駐申請</h1>
                        <div style={{ border: 'solid 2px #000', display: 'inline-block', padding: '0px 15px', fontWeight: '900', borderRadius: '5px', marginTop: '10px', backgroundColor: '#000', color: '#BCFD55'}}>{data[0].mar_apply_sta}</div>
                    </div>
                    <TableContainer component={Paper} sx={{ maxHeight: 440, margin: '20px 0px 25px 0px' }}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
                            <TableHead sx={{backgroundColor: '#f4f4f4'}}>
                                <TableRow>
                                    <TableCell sx={{padding: '13px 16px', backgroundColor: '#f4f4f4', minWidth: '170px', borderRight: 'solid 2px #eee'}}>品牌/店家名稱</TableCell>
                                    <TableCell sx={{padding: '13px 16px', backgroundColor: '#f4f4f4', minWidth: '500px'}}>{data[0].mar_apply_brand}</TableCell>
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
                                    <TableCell >{data[0].mar_apply_feeinfo ? data[0].mar_apply_feeinfo : '尚無資料'}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{borderRight: 'solid 2px #f4f4f4'}}>活動企劃書</TableCell>
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
                                    if(e.stateTo == 1){
                                        btnState = '"審核中"'
                                    }else if(e.stateTo == 2){
                                        btnState = '"待補件"'
                                    }else if(e.stateTo == 3){
                                        btnState = '"匯款中"'
                                    }else if(e.stateTo == 4){
                                        btnState = '"待查帳"'
                                    }else if(e.stateTo == 5){
                                        btnState = '"已完成"'
                                    }else if(e.stateTo == 6){
                                        btnState = '"待退款"'
                                    }else if(e.stateTo == 7){
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
                                                id: data[0].mar_apply_id,
                                                state: nextState,
                                                deadline: nextState == 3 ? dayjs().add(7, 'day').format('YYYY/MM/DD') : null
                                            }
                                            console.log(inputData)
                                            editMarketApply(inputData).then((result)=>{
                                                console.log(result)
                                            })
                                            alert("修改成功");
                                            window.location.href = '/stationed_market'
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