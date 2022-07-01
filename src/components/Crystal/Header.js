import './Header.css'

const Header = () => {
    return <div className="bs_navbar">
        <img src="../02_activities/icon/park2_ABFF1D.svg" alt="Park2_logo" />
        <ul>
          <li><a href="#">首頁管理</a></li>
          <li><a href="#">活動管理</a></li>
          <li><a href="#">店家管理</a></li>
          <li><a href="#">進駐管理</a></li>
          <li><a href="#">帳號管理</a></li>
        </ul>
        <button className="btn_logout" onclick="">
          <img src="../02_activities/icon/log_out.svg" alt="log_out" />登出
        </button>
    </div>
}

export default Header