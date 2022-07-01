import * as React from 'react';
import ReactDOM from 'react-dom/client';
import Button from '@mui/material/Button';
import { useState } from 'react';
// import FloatingActionButtons from './components/FloatingActionButtons';
// import ListDividers from './components/ListDividers';
// import Switch from './components/SwitchLabels';
// import BasicButtons from './components/BasicButton';
// import SwitchListSecondary from './components/SwitchListSecondary';
import UploadButtons from '../components/UploadButtons';
import FAQlist from '../components/FAQlist';
import UploadMore from '../components/UploadMore';
import UploadFile from '../components/UploadFile';

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
