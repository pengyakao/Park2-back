import * as React from 'react';
import ReactDOM from 'react-dom/client';
import Button from '@mui/material/Button';
import { useState } from 'react';
import UploadButtons from '../components/Ally/UploadButtons';
import FAQlist from '../components/Ally/FAQlist';
import UploadMore from '../components/Ally/UploadMore';
import UploadFile from '../components/Ally/UploadFile';
import BasicModal from '../components/Ellie/BasicModal';
import  { Component } from 'react';

import { getActivities } from '../api/home/getActivities'
import { getCarousel } from '../api/home/getCarousel'


class Ally extends Component {
  state = {}
  render() {
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

        <h3>彈跳窗</h3>
        <BasicModal />

      </React.Fragment>
    );
  }

  componentDidMount(){
    getActivities().then((result) => {
      console.log(result)
  });
  getCarousel().then((result) => {
    console.log(result)
});
  }}
export default Ally
