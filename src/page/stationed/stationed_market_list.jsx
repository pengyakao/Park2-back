import * as React from 'react';
import dayjs from "dayjs";
import { useState, useEffect } from 'react';
import { Input } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const theme = createTheme({
    palette: {
        neutral: {
            main: '#000',
            contrastText: '#fff'
        },
    },
});


const Stationed_market_list = ({ listData, marketData }) => {
    const [transfer, setTransfer] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [marketValue, setMarketValue] = useState('')

    let standard = {
        '1': '審核中',
        '2': '待補件',
        '3': '匯款中',
        '4': '待查帳',
        '5': '已完成',
        '6': '已取消',
        '7': '待退款',
        '8': '已退款'
    }
    
    const transferState = (data) => {
        let result = data.map(e=>{
            Object.keys(standard).forEach((o, i)=>{
                if(o==e.mar_apply_sta){
                    e.mar_apply_sta = standard[o]
                }
            })
            return e
        })
        let transferDate = result.map(e=>{
            let resultDate = dayjs(e.mar_apply_date).add(8, 'hour').format('YYYY-MM-DD')
            e.mar_apply_date = resultDate
            return e
        })
        return transferDate
    }
    const transferMarket = (data) => {
        let transferDate = data.map(e=>{
            marketData.forEach(m=>{
                if(e.market_id == m.market_id) {
                    e.market_id = m.market_title
                }
            })
            return e
        })
        return transferDate
    }
    
    useEffect(()=>{
        console.log('test',marketData)
        let stateResult = transferState(listData)
        let result = transferMarket(stateResult)
        setTransfer(result)
    }, [listData, marketData])

    useEffect(()=>{
        if(inputValue != '' &&  marketValue != ''){
            let filterData = listData.filter(e=> e.mar_apply_sta == inputValue)
            let filterData2 = filterData.filter(e=> e.market_id == marketValue)
            setTransfer(filterData2)
        }else if(inputValue != '' &&  marketValue == ''){
            let filterData = listData.filter(e=> e.mar_apply_sta == inputValue)
            let result = transferState(filterData)
            setTransfer(result)
        }else if(inputValue == '' &&  marketValue != ''){
            let filterData = listData.filter(e=> e.market_id == marketValue)
            let result = transferState(filterData)
            setTransfer(result)
        }
        else{
            let result = transferState(listData)
            setTransfer(result)
        }
    }, [inputValue, marketValue])

    const stateOptions = [
        {
            step: '審核中',
            value: 1
        },
        {
            step: '待補件',
            value: 2
        },
        {
            step: '匯款中',
            value: 3
        },
        {
            step: '待查帳',
            value: 4
        },
        {
            step: '已完成',
            value: 5
        },
        {
            step: '已取消',
            value: 4
        },
        {
            step: '待退款',
            value: 5
        },

    ]

    return (
        <div>
            <div className='wrapper' style={{display: 'flex', marginBottom: '25px'}}>
                <Autocomplete
                    id="size-small-outlined"
                    size="small"
                    options={marketData}
                    getOptionLabel={(option) => option.market_title}
                    onChange={(e, newValue)=>{
                        if(newValue){
                            setMarketValue(newValue.market_title)
                        }else{
                            setMarketValue('')
                        }
                    }}
                    sx={{width: '330px', marginRight: '10px'}}
                    renderInput={(params) => (
                        <TextField {...params} label="申請市集" placeholder="依申請市集篩選" />
                    )}
                />
                <Autocomplete
                    id="size-small-outlined"
                    size="small"
                    options={stateOptions}
                    getOptionLabel={(option) => option.step}
                    // defaultValue={stateOptions[0]}
                    onChange={(e, newValue)=>{
                        if(newValue){
                            setInputValue(newValue.step)
                        }else{
                            setInputValue('')
                        }
                    }}
                    sx={{width: '300px'}}
                    renderInput={(params) => (
                        <TextField {...params} label="進駐狀態" placeholder="選擇進駐狀態..." />
                    )}
                />
            </div>
            
            <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
                    <TableHead sx={{backgroundColor: '#f4f4f4'}}>
                        <TableRow>
                            <TableCell sx={{padding: '13px 16px', backgroundColor: '#f4f4f4'}}>品牌/店家名稱</TableCell>
                            <TableCell sx={{padding: '13px 16px', backgroundColor: '#f4f4f4'}}>聯絡人</TableCell>
                            <TableCell sx={{padding: '13px 16px', backgroundColor: '#f4f4f4'}}>申請進駐市集</TableCell>
                            <TableCell sx={{padding: '13px 16px', backgroundColor: '#f4f4f4'}}>申請攤位數量</TableCell>
                            <TableCell sx={{padding: '13px 16px', backgroundColor: '#f4f4f4'}}>申請狀態</TableCell>
                            <TableCell sx={{padding: '13px 16px', backgroundColor: '#f4f4f4'}}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transfer.map((row) => (
                            <TableRow
                                key={row.mar_apply_id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.mar_apply_brand}</TableCell>
                                <TableCell >{row.mar_apply_name}</TableCell>
                                <TableCell >{row.market_id}</TableCell>
                                <TableCell >{row.mar_apply_count}</TableCell>
                                <TableCell >{row.mar_apply_sta}</TableCell>
                                <TableCell >
                                    <ThemeProvider theme={theme}>
                                        <Stack spacing={2} direction="row">
                                            <Button variant="outlined" color="neutral" href={`/stationed_market/${row.mar_apply_id}`}>查看資料</Button>
                                        </Stack>
                                    </ThemeProvider>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>
        </div >
    );
}

export default Stationed_market_list