import './LayOut.css'

const LayOutUser = () => {
    return <div>
        <div className="bs_navbar">
            <img src="/img/Park2B3E24D.svg" alt="Park2_logo" />
            
            <ul>
                <li><a href="/home/act">首頁管理</a></li>
                <li><a href="/activity">活動管理</a></li>
                <li><a href="/store">店家管理</a></li>
                <li><a href="/stationed_store">店家進駐</a></li>
                <li><a href="/stationed_market">攤位進駐</a></li>
                <li><a href="/user" style={{ color: "#B3E24D" }}>帳號管理</a></li>
            </ul>
            <button className="btn_logout" onclick="">
                <img src="/img/LogOut.svg" alt="log_out" />登出
            </button>
        </div>
        <div className="bs_aside">
            <ul>
                <li><a href="/user">帳號與權限管理</a></li>
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
}

export default LayOutUser