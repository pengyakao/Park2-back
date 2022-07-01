import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './ShowTextFields.css';
import { fontSize } from '@mui/system';


export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div id='ShowTextFields'>
        <div className='title'>品牌名稱</div>
        <div className='content'>
          <p>瑋堡WEIBAO</p>
        </div>
      </div>
    </Box>
  );
}
