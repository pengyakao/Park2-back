import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';

export default function ImageItem({id , img , deleteData}) {

    function deleteImg(){
        deleteImg(function(prev){
            console.log("刪除")
            return prev.filter(item => item.id !== id)
        })
    }
    return (
        <div style={{margin:"3px"}}>
            <img width="150" height="150" style={{objectFit:"cover"}}
                src="https://ichef.bbci.co.uk/news/976/cpsprodpb/15951/production/_117310488_16.jpg" />
            <br />
            <Button onClick={deleteImg} size="small" variant="outlined" color="error">刪除</Button>
        </div>
    )
}


