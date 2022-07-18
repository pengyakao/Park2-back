import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LayOutUser from '../../components/layout/LayOut_user';
import Userlist from './user_list';
import { useEffect } from 'react';

// api
import { getUser } from "../../api/user/userData";
import { checkLogin } from '../../api/login/isLogin'

export default function User() {
    const [data, setData] = React.useState([]);


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


    return (
        <div>
            <LayOutUser />
            <div className='bs_article'>
                <h1>帳號管理</h1>
                <Userlist listData={listData} />
            </div>
        </div>
    )

   
}

