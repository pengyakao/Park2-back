import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LayOutUser from '../../components/layout/LayOut_user';
import Userlist from './user_list';
import { useEffect } from 'react';




// api
import {token} from '../../api/user/token'
import {data} from '../../api/user/data'
import { getUser } from "../../api/user/userData";
import { checkLogin } from '../../api/login/isLogin'

export default function User() {
    const [data, setData] = React.useState([]);

    var myToken = token
    var listData = data;

    useEffect(()=>{
        getUser().then((result)=>{
            console.log(result)
            setData(result)
        })

        checkLogin().then((result)=>{
            console.log(result)
        })
    },[])


    // 判斷權限
    if (myToken.user_id == 1) {
        return (
            <div>
                <LayOutUser />
                <div className='bs_article'>
                    <h1>帳號管理</h1>
                    <Userlist listData={listData} />
                </div>
            </div>
        )
    } else {
        return <Redirect to={`/user/${myToken.user_id}`} />;
    }

   
}

