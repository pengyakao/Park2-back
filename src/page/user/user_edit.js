import React, { Component } from 'react';
import LayOut from '../../components/Crystal/LayOut';
import {User_editTable} from './user_editTable'

// api
import {token} from '../../api/token'
import {data} from '../../api/data'


export default function User_edit() {
    // state = {}
    var myData = data
    var myToken = token
    var listData = myData;



    

    return (
        <div>
            <LayOut />
            <User_editTable listData={listData} token={myToken}/>
        </div>
    )

}