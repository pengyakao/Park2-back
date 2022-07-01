import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import ReactDOM from "react-dom";


const Input = styled('input')({
  display: 'none',
});


export default function UploadButtons() {
  const [isimg, setImg] = useState([]);

  const onChange = e => {
    const file = e.target.files.item(0); // 取得選中檔案們的一個檔案
    const fileReader = new FileReader(); // FileReader為瀏覽器內建類別，用途為讀取瀏覽器選中的檔案
    fileReader.addEventListener("load", fileLoad);
    fileReader.readAsDataURL(file); // 讀取完檔案後，變成URL
    console.log("ok");
  };


  const fileLoad = e => {
    setImg(e.target.result);
    // 讀取到DataURL後，儲存在result裡面，指定為img
  };


  return (
    <div>
      <Stack direction="row" alignItems="center" spacing={2}>
        <label htmlFor="contained-button-file">
          <Input onChange={onChange} accept="image/*" id="contained-button-file" multiple type="file" />
          <Button variant="outlined" component="span">
            上傳圖片
          </Button>
        </label>
        <Button variant="contained">上傳</Button>

      </Stack>
      <hr />
      <img width="300" src={isimg} />
    </div>
  );
}
