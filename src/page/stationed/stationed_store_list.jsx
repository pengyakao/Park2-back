import * as React from 'react';
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
    
    useEffect(()=>{
        let standard = {
            '1': '申請中',
            '2': '進駐中',
            '3': '已退租',
            '4': '已取消'
        }
        let result = listData.map(e=>{
            Object.keys(standard).forEach((o, i)=>{
                if(o==e.sto_apply_sta){
                    e.sto_apply_sta = standard[o]
                }
            })
            return e
        })
        console.log(result)
        setTransfer(result)
    }, [listData])

    // console.log('listData', listData)

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>帳號名稱</TableCell>
                            <TableCell>使用者帳號</TableCell>
                            <TableCell align="center">帳號權限</TableCell>
                            <TableCell align="center">進駐狀態</TableCell>
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
                                <TableCell >{row.sto_apply_mail}</TableCell>
                                <TableCell align="center">一般店家</TableCell>
                                <TableCell align="center">{row.sto_apply_sta}</TableCell>
                                <TableCell >
                                    <ThemeProvider theme={theme}>
                                        <Stack spacing={2} direction="row">
                                            <Button variant="outlined" color="neutral" href={`/stationed_store/${row.sto_apply_id}`}>修改資料</Button>
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
