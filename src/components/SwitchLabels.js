import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';



const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));




export default function SwitchLabels() {
  const [ischeck, setCheck] = useState(true)

  var isHidden = () => {
    setCheck(!ischeck);
  }

  const FAQedit = () => {
    console.log("編輯");
}

  const FAQdelete = () => {
      console.log("刪除");
  }



  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button size="small" variant="outlined" onClick={FAQedit} >編輯</Button>
        <Button size="small" variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={FAQdelete}>刪除</Button>
        <FormGroup>
          <Stack onClick={isHidden} direction="row" spacing={1} alignItems="center">
            <Typography>Off</Typography>
            <AntSwitch checked={ischeck} inputProps={{ 'aria-label': 'ant design' }} />
            <Typography>On</Typography>
          </Stack>
        </FormGroup>
      </Stack>
    </div>
  );
}
