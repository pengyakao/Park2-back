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

import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';


const ListStyle = {
    width: '100%',
    bgcolor: 'background.paper',
};

const theme = createTheme({
    palette: {
        neutral: {
            main: '#000',
            contrastText: '#fff'
        },
    },
});



const Stationed_store_list = ({ listData }) => {
    const [transfer, setTransfer] = useState([])
    const [inputValue, setInputValue] = useState('')

    let standard = {
        '1': '申請中',
        '2': '進駐中',
        '3': '已退租',
        '4': '已取消'
    }
    
    const transferState = (data) => {
        let result = data.map(e=>{
            Object.keys(standard).forEach((o, i)=>{
                if(o==e.sto_apply_sta){
                    e.sto_apply_sta = standard[o]
                }
            })
            return e
        })
        let transferDate = result.map(e=>{
            let resultDate = dayjs(e.sto_apply_date).add(8, 'hour').format('YYYY-MM-DD')
            e.sto_apply_date = resultDate
            return e
        })
        return transferDate
    }
    
    useEffect(()=>{
        console.log(listData)
        let result = transferState(listData)
        setTransfer(result)
    }, [listData])

    useEffect(()=>{
        if(inputValue != ''){
            console.log(inputValue)
            console.log(listData)
            let filterData = listData.filter(e=> e.sto_apply_sta == inputValue)
            let result = transferState(filterData)
            setTransfer(result)
        }else{
            let result = transferState(listData)
            setTransfer(result)
        }
    }, [inputValue])

    const stateOptions = [
        {
            step: '申請中',
            value: 1
        },
        {
            step: '進駐中',
            value: 2
        },
        {
            step: '已退租',
            value: 3
        },
        {
            step: '已取消',
            value: 4
        }
    ]

    return (
        <div>
            <div className='wrapper' style={{display: 'flex', marginBottom: '25px'}}>
                {/* <Paper component="form" sx={{ p: '0px 4px', display: 'flex', alignItems: 'center', width: 300, height:'40px' ,marginRight: '20px' ,border: 'solid 2px #f4f4f4'
                }}>
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="搜尋申請編號"
                        inputProps={{ 'aria-label': 'search apply number' }}
                    />

                </Paper> */}
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
            
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{backgroundColor: '#f4f4f4'}}>
                        <TableRow>
                            <TableCell sx={{padding: '13px 16px'}}>店家名稱</TableCell>
                            <TableCell sx={{padding: '13px 16px'}}>聯絡人</TableCell>
                            <TableCell sx={{padding: '13px 16px'}}>申請進駐日期</TableCell>
                            <TableCell sx={{padding: '13px 16px'}}>申請櫃位</TableCell>
                            <TableCell sx={{padding: '13px 16px'}}>進駐狀態</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transfer.map((row) => (
                            <TableRow
                                key={row.sto_apply_id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.sto_apply_brand}</TableCell>
                                <TableCell >{row.sto_apply_name}</TableCell>
                                <TableCell >{row.sto_apply_date}</TableCell>
                                <TableCell >{row.sto_apply_location}</TableCell>
                                <TableCell >{row.sto_apply_sta}</TableCell>
                                <TableCell >
                                    <ThemeProvider theme={theme}>
                                        <Stack spacing={2} direction="row">
                                            <Button variant="outlined" color="neutral" href={`/stationed_store/${row.sto_apply_id}`}>查看資料</Button>
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

export default Stationed_store_list
