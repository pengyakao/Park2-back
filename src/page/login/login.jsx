import React, { Component, useContext } from "react";

// mui
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import {loginUser} from '../../api/login/loginApi';

const theme = createTheme({
  palette: {
    neutral: {
      main: "#000",
      contrastText: "#fff",
    },
  },
});

const style1 = {
  color: "#000",
  "font-family": "Noto Sans TC",
  "font-weight": 500,
  "letter-spacing": "1px",
  "font-size": "20px",
};

const loginPage = {
  backgroundColor: '#f4f4f4',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
}

const Login = () => {
  const [account, setAccount] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [show, setShow] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <div style={loginPage}>
        <h3 style={{display: 'flex', alignItems: 'flex-end', marginBottom: '40px'}}>
          <img src="/img/park2-black.svg" alt="" />
          <span style={{backgroundColor: '#000', color: '#fff', fontSize: '15px', padding: '3px 10px', borderRadius: '2px', marginLeft: '20px', fontWeight: '900', letterSpacing: '1px'}}>CMS內容管理系統</span>
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '50px'}}>
          <TextField
            id="input-with-icon-textfield"
            label="帳號"
            size="small"
            variant="outlined"
            color="neutral"
            value={account}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <AccountCircle color="neutral"/>
                </InputAdornment>
              ),
            }}
            sx={{marginBottom: '30px', minWidth: '450px'}}
            onChange={
              (e)=>{
                setAccount(e.target.value)
              }
            }
          />
          <TextField
            id="input-with-icon-textfield"
            label="密碼"
            size="small"
            type={show ? 'text' : 'password'}
            variant="outlined"
            color="neutral"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  {show
                    ? <VisibilityIcon onClick={()=>{setShow(!show)}} sx={{cursor: 'pointer'}} color="neutral"/>
                    : <VisibilityOffIcon onClick={()=>{setShow(!show)}} sx={{cursor: 'pointer'}} color="neutral"/>
                  }
                </InputAdornment>
              ),
            }}
            sx={{minWidth: '450px', marginBottom: '30px'}}
            onChange={
              (e)=>{
                setPassword(e.target.value)
              }
            }
          />
          <Stack
            spacing={2}
            direction="row"
            style={{ display: "flex",  }}
          >
            {/* <Button color="neutral" variant="outlined" href="/activity/">
              取消
            </Button> */}
            <Button
              color="neutral"
              variant="contained"
              sx={{minWidth: '100px'}}
              // href="/home/act"
              onClick={() => {
                const info = {
                  account: account,
                  password: password
                }
                console.log(info)
                loginUser(info).then((result)=>{
                  if(result.token){
                    localStorage.setItem('Token', result.token);
                    window.location.href="/home/act"
                  }else{
                    window.alert('帳號密碼錯誤！')
                  }
                  console.log(result)
                })
              }}
            >
              登入
            </Button>
          </Stack>
          {/* <TextField
            label="帳號"
            id="login_account"
            variant="outlined"
            required="true"
            size="small"
            sx={{width: '400px', marginBottom: '15px'}}
          /> */}
          {/* <TextField
            label="密碼"
            id="login_password"
            variant="outlined"
            required="true"
            size="small"
            type="password"
            value={act_title ?? ""}
            onChange={(e) => setact_title(e.target.value)}
          /> */}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Login;
