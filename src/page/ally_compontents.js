import * as React from 'react';
import ReactDOM from 'react-dom/client';
import Button from '@mui/material/Button';
import { useState } from 'react';
import UploadButtons from '../components/Ally/UploadButtons';
import FAQlist from '../components/Ally/FAQlist';
import UploadMore from '../components/Ally/UploadMore';
import UploadFile from '../components/Ally/UploadFile';

const Ally = () => {
  const [num, setNum] = useState(100)
  function plus() {
    setNum(function (prev) {
      return prev + 200
    })
  }
  return (
    <React.Fragment>

      <h3>FAQlist</h3>
      <FAQlist />
      <hr /> 
      <h3>圖片上傳</h3>
      <UploadButtons />
      <hr /> 
      <h3>多張圖片上傳</h3>
      <UploadMore />
      <hr /> 
      <h3>合約文件上傳(限.pdf檔)</h3>
      <UploadFile/>


      {/* <hr />
      <h3>測試</h3>
      <h3>FloatingActionButtons</h3>
      <FloatingActionButtons />
      <h3>ListDividers</h3>
      <ListDividers />
      <h3>Switch</h3>
      <Switch />
      <h3>BasicButtons</h3>
      <BasicButtons />
      <h3>SwitchListSecondary</h3>
      <SwitchListSecondary /> */}

    </React.Fragment>
  );
}

export default Ally;
