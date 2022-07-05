import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LayOut from '../../components/Crystal/LayOut';
import Userlist from './user_list';


// api
import {token} from '../../api/token'
import {data} from '../../api/data'


export default function User() {

    var myData = data
    var myToken = token
    var listData = myData;

    // 
        // var listData;
        // if (myToken.user_id == 1) {
        //     listData = myData
        // } else {
        //     listData = [myData[myToken.user_id -1]] 
        //     console.log(listData)
        // }

        // href={`/user/${row.user_id}`}


    // 判斷權限
    if (myToken.user_id == 1) {
        return (
            <div>
                <LayOut />
                <div className='bs_article'>
                    <h1>帳號管理</h1>
                    <Userlist listData={listData} />
                </div>
            </div>
        )
    } else {
        return <Redirect to='/user/:user_id' />;
    }

   
}

