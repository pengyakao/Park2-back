import './LayOut.css'
// import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import $ from 'jquery';


const LayOut = () => {

    const data = {
        home: [
            { title: "活動輪播", url: "/home/act" },
            { title: "官方公告", url: "/home/news" },
            { title: "FQA", url: "/home/faq" },
            { title: "跑馬燈", url: "/home/mar" }
        ],
        activity: [
            { title: "活動管理", url: "#" }
        ],
        store: [
            { title: "店家管理", url: "#" }
        ],
        stationed: [
            { title: "市集管理", url: "/stationed" },
            { title: "市集攤位申請", url: "/stationed" },
            { title: "店家進駐申請", url: "/stationed" }
        ],
        user: [
            { title: "帳號與權限管理", url: "/user" }
        ]
    }

    //抓取網址來讀取資料
    const url = useLocation();
    var page = url.pathname.split("/")[1];
    console.log(url.pathname.split("/")[1])
    const innerHTML = ""
    if (page == "home") {
        console.log(123)
        $('#home').css({ color: '#B3E24D' })
        let homeList = data.home
        let text = ""
        homeList.map((item)=>{
            text += '<li><a href="' + item.url + '">' + item.title + '</a></li>'
        })
        $('#sidebar').html(text)       
    }else if(page == "activity"){
        $('#activity').css({ color: '#B3E24D' })
        let activityList = data.activity
        let text = ""
        activityList.map((item)=>{
            text += '<li><a href="' + item.url + '">' + item.title + '</a></li>'
        })
        $('#sidebar').html(text)       
    }else if(page == "store"){
        $('#store').css({ color: '#B3E24D' })
        let storeList = data.store
        let text = ""
        storeList.map((item)=>{
            text += '<li><a href="' + item.url + '">' + item.title + '</a></li>'
        })
        $('#sidebar').html(text)       
    }else if(page == "stationed"){
        $('#stationed').css({ color: '#B3E24D' })
        let stationedList = data.stationed
        let text = ""
        stationedList.map((item)=>{
            text += '<li><a href="' + item.url + '">' + item.title + '</a></li>'
        })
        $('#sidebar').html(text)       
    }else if(page == "user"){
        $('#user').css({ color: '#B3E24D' })
        let userList = data.user
        let text = ""
        userList.map((item)=>{
            text += '<li><a href="' + item.url + '">' + item.title + '</a></li>'
        })
        $('#sidebar').html(text)
        console.log(text)    
    }





    return <div>
        <div className="bs_navbar">
            <img src="/img/Park2B3E24D.svg" alt="Park2_logo" />

            <ul>
                {/* style={{ color: "#B3E24D" }} */}
                <li><a id="home" href="/home/act">首頁管理</a></li>
                <li><a id="activity" href="/activity">活動管理</a></li>
                <li><a id="store" href="/store">店家管理</a></li>
                <li><a id="stationed" href="/stationed">進駐管理</a></li>
                <li><a id="user" href="/user">帳號管理</a></li>
            </ul>
            <button className="btn_logout" onclick="">
                <img src="/img/LogOut.svg" alt="log_out" />登出
            </button>
        </div>
        <div className="bs_aside">
            <ul id="sidebar">
                {/* <li><a href="/home/act">活動輪播</a></li>
                <li><a href="/home/news">官方公告</a></li>
                <li><a href="/home/faq">FAQ</a></li>
                <li><a href="/home/mar">跑馬燈</a></li> */}
            </ul>
        </div>
    </div>
}

export default LayOut



