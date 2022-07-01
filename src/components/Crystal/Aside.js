import './Aside.css'

const Aside = () => {

    return <div className="bs_aside">
        <ul>
            <li><a href="#">活動輪播</a></li>
            <li><a href="#">官方公告</a></li>
            <li><a href="#">FAQ</a></li>
        </ul>
        活動管理, 標籤管理, 活動資訊編輯
        店家管理, 標籤管理, 店家資訊編輯
        待審核, 補件中, 已完成(含未繳費), 歷史申請
        申請中, 進駐中, 已退租
        帳號與權限, 帳號設定
    </div>
}

export default Aside