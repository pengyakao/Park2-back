import "./LayOut.css";
import React from "react";

const LayOutStore = () => {
  // 權限驗證
  const [style, setStyle] = React.useState();
  const user_id = JSON.parse(localStorage.getItem("UserInfo")).user_id;
  
  React.useEffect(() => {
    if (user_id !== 1) {
      setStyle("none");
    } else if (user_id == 1) {
      console.log("Welcome!");
      setStyle("block");
    }
  }, [user_id]);

  return (
    <div>
      <div className="bs_navbar">
        <img src="/img/Park2B3E24D.svg" alt="Park2_logo" />

        <ul>
          <li>
            <a href="/home/act" style={{ display: `${style}` }}>
              首頁管理
            </a>
          </li>
          <li>
            <a href="/activity" style={{ display: `${style}` }}>
              活動管理
            </a>
          </li>
          <li>
            <a href="/store" style={{ color: "#B3E24D" }}>
              店家管理
            </a>
          </li>
          <li>
            <a href="/stationed_store" style={{ display: `${style}` }}>
              進駐管理
            </a>
          </li>
          <li>
            <a href="/user">帳號管理</a>
          </li>
        </ul>

        {/* <ul>
                <li><a className='checkPermission' href="/home/act">首頁管理</a></li>
                <li><a className='checkPermission' href="/activity">活動管理</a></li>
                <li><a href="/store" style={{ color: "#B3E24D" }}>店家管理</a></li>
                <li><a className='checkPermission' href="/stationed_store">進駐管理</a></li>
                <li><a href="/user">帳號管理</a></li>
            </ul> */}
        <button
          className="btn_logout"
          onClick={() => {
            localStorage.removeItem("Token");
            window.location.href = "/login";
          }}
        >
          <img src="/img/LogOut.svg" alt="log_out" />
          登出
        </button>
      </div>
      <div className="bs_aside">
        <ul>
          <li>
            <a href="/store">店家管理</a>
          </li>
        </ul>

        {/* 
            首頁管理：活動輪播, 官方公告, FQA
            活動管理：活動管理, 標籤管理, 活動資訊編輯
            店家管理：店家管理, 標籤管理, 店家資訊編輯
            店家進駐：申請中, 進駐中, 已退租
            攤位進駐：待審核, 補件中, 已完成(含未繳費), 歷史申請
            帳號管理：帳號與權限, 帳號設定
             */}
      </div>
    </div>
  );
};

export default LayOutStore;
