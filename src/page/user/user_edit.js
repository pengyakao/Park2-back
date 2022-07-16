import React, { Component } from 'react';
import LayOutUser from '../../components/layout/LayOut_user';
import {User_editTable} from './user_editTable'
import { useEffect } from 'react';


// api
import {token} from '../../api/user/token'
import {data} from '../../api/user/data'

import { checkLogin } from '../../api/login/isLogin'


export default function User_edit() {
    // state = {}
    var myData = data
    var myToken = token
    var listData = myData;

    useEffect(()=>{
        checkLogin().then((result)=>{
            console.log(result)
        })
    },[])
    

    return (
        <div>
            <LayOutUser />
            <User_editTable listData={listData} token={myToken}/>
        </div>
    )

}