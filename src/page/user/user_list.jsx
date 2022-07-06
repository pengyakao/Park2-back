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

// api
// import {getActivities} from '../../api/act'

// import {getActivities} from '../../api/user'

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



const Userlist = ({ listData }) => {



    // useEffect (()=>{
    //     getActivities().then((result)=>{
    //         console.log(result)
    //     })
    // })
    

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
                {listData.map((row) => (
                <TableRow key={row.user_id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">{row.user_name}</TableCell>
                    <TableCell >{row.user_account}</TableCell>
                    <TableCell align="center">{row.user_level}</TableCell>
                    <TableCell align="center">{row.sto_sta}</TableCell>
                    <TableCell >
                        <ThemeProvider theme={theme}>
                            <Stack spacing={2} direction="row">
                                {/* <Button variant="outlined" color="neutral" href={`/user/${row.user_id}`}>修改資料</Button> */}
                                <Button variant="outlined" color="neutral" href={`/user/${row.user_id}`}>修改資料</Button>
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

export default Userlist
