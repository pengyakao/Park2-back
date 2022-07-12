import axios from "axios"

// 引入 Axios
{/* <script src="https://unpkg.com/axios/dist/axios.min.js"></script> */}

// 設定 baseUrl
const reqObj = axios.create({
  // baseURL 設定的是自己測試的 IP位址:server埠號 (ex. http://192.168.0.112:3000)
	// baseURL: 'http://10.0.102.245:3001',
	baseURL: 'http://10.0.102.59:3001',
	// baseURL: 'http://192.168.0.101:3001',

	header: {
		'Content-Type': 'application/json'
	}
})

// 建立 promise函式
function handleReq(e) {
	return new Promise((resolve, reject) => {
		e
			.then((res) => resolve(res.data))
			.catch((err) => reject(err))
	})
}

// api function
export function postNews(data) {
	return handleReq(reqObj.post('/admin/home/proclamation/post',data))
}

// 放到要get資料的頁面
// // 要拿 某筆活動 的資料
// getActivities('1').then((result)=>{
//   console.log(result)
// })