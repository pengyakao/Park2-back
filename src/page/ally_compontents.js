<<<<<<< HEAD
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import Button from '@mui/material/Button';
import { useState } from 'react';
import UploadButtons from '../components/Ally/UploadButtons';
import FAQlist from '../components/Ally/FAQlist';
import UploadMore from '../components/Ally/UploadMore';
import UploadFile from '../components/Ally/UploadFile';
import BasicModal from '../components/Ellie/BasicModal';



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

      <h3>彈跳窗</h3>
      <BasicModal/>

    </React.Fragment>
  );
=======
import * as React from 'react'
import ReactDOM from 'react-dom/client'
import Button from '@mui/material/Button'
import { useState } from 'react'
import UploadButtons from '../components/Ally/UploadButtons'
import FAQlist from '../components/Ally/FAQlist'
import UploadMore from '../components/Ally/UploadMore'
import UploadFile from '../components/Ally/UploadFile'
// import { useState } from 'react'
import ComboBox from '../components/Ellie/ComboBox'
import TextareaAutosize from '../components/Ellie/TextareaAutosize'
import BasicTextFields from '../components/Ellie/BasicTextFields'
import DatePicker from '../components/Ellie/DatePicker'
import TimePicker from '../components/Ellie/TimePicker'
import FormControl from '../components/Ellie/FormControl'
import ControlLabel from '../components/Ellie/ControlLabel'
import ShowTextFields from '../components/Ellie/ShowTextFields'
import BasicModal from '../components/Ellie/BasicModal'
import Card from '../components/Ellie/Card'
import RadioButtons from '../components/Ellie/RadioButtons'
import UploadCard from '../components/Ellie/UploadCard'
import Table from '../components/Crystal/Table'

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
            <UploadFile />
            <h1>------Ellie-------</h1>
            <h3>Input_Basic</h3>
            <BasicTextFields />
            <h3>Input_Content</h3>
            <TextareaAutosize />
            <h3>DatePicker</h3>
            <DatePicker />
            <h3>TimePicker</h3>
            <TimePicker />
            <h3>下拉式選單_可搜尋</h3>
            <ComboBox />
            <h3>下拉式選單_單純點</h3>
            <FormControl />
            <h3>勾選_支付方式</h3>
            <ControlLabel />
            <h3>顯示內容_進駐資料</h3>
            <ShowTextFields />
            <h3>彈跳視窗_進駐匯款</h3>
            <BasicModal />
            <h3>Card</h3>
            <Card />
            <h3>UploadCard</h3>
            <UploadCard />
            <h3>Radio_開放狀態</h3>
            <RadioButtons />
            {/* <h1>-------Crystal------</h1>
            <h3>Table</h3>
            <Table /> */}
        </React.Fragment>
    )
>>>>>>> c1e828b34b6a0d30d503894e0f723f609b3cc0cb
}

export default Ally
