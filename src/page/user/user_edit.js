import React, { Component } from 'react';
import LayOutUser from '../../components/layout/LayOut_user';
import {User_editTable} from './user_editTable'


// api
import {token} from '../../api/user/token'
import {data} from '../../api/user/data'


export default function User_edit() {
    // state = {}
    var myData = data
    var myToken = token
    var listData = myData;



    

    return (
        <div>
            <LayOutUser />
            <User_editTable listData={listData} token={myToken}/>
        </div>
    )

}