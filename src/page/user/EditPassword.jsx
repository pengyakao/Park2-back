import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import './EditPassword.css';
import Stack from '@mui/material/Stack';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 757,
  // height: 405,
  display: 'flex' ,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: 5,
  boxShadow: 24 ,
  p: 4,
};

export default function EditPassword() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='model-container'>
      <Button onClick={handleOpen} color="neutral" variant="contained" href='#'>修改密碼</Button>
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
          請確認新密碼：
          </Typography>
          <Box id="modelBox-content" 
          // sx={{ mt: 2 }}
          ><div>
            <div className='modelBox-input'>
              <span>收款人員：</span>
              <TextField 
                id="standard-basic" 
                label="" 
                variant="standard" />
            </div>
            <div className='modelBox-input'>
              <span>匯款日期：</span>
              <TextField 
                id="standard-basic" 
                label="" 
                variant="standard" />
                </div>
            <div className='modelBox-input'><span>匯款帳號：</span><TextField 
                id="standard-basic" 
                label="" 
                variant="standard" /></div></div>
          </Box>
           <Stack spacing={2} direction="row">
      <Button className='btn-stationed' variant="contained">送出</Button>
      <Button className='btn-stationed' variant="outlined">取消</Button>
    </Stack>
        </Box>
      </Modal>
    </div>
  );
}
