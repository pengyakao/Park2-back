// 引入 Axios
import axios from 'axios'

// 設定 baseUrl
const reqObj = axios.create({
    // baseURL 設定的是自己測試的 IP位址:server埠號 (ex. http://192.168.0.112:3000)
    baseURL: 'http://10.0.102.113:3001',
    header: {
        'Content-Type': 'application/json',
    },
})

// 建立 promise函式
function handleReq(e) {
    return new Promise((resolve, reject) => {
        e.then((res) => resolve(res.data)).catch((err) => reject(err))
    })
}

// api function
export function getStores() {
    return handleReq(reqObj.get('/admin/store/get'))
}

// function getActivities(id) {
//     return handleReq(
//         reqObj.get('/activity/get', {
//             params: {
//                 id,
//             },
//         })
//     )
// }

// function getActivities(data) {
//     return handleReq(reqObj.get('/activity/get', data))
// }