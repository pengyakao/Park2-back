// 引入 Axios
import axios from 'axios'
import {url}  from '../url.js'

// 設定 baseUrl
const reqObj = axios.create({
    // baseURL 設定的是自己測試的 IP位址:server埠號 (ex. http://192.168.0.112:3000)
	baseURL: url,
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

// 取得所有店家
export function getStores() {
    return handleReq(reqObj.get('/admin/store/get'))
}

// 取得指定店家
export function getStore(id) {
    return handleReq(reqObj.get('/self/store/get', {
        params: {
            id
        }
    }))
}


// 新增(有改圖)
export function postStore(data) {
    return handleReq(reqObj.put('/admin/store/post', data))
}


// 編輯(有改圖)
export function putStore(data) {
    return handleReq(reqObj.put('/admin/store/edit/file', data))
}

// 編輯(有改圖)(無刪除)
export function putStoreNoDelete(data){
    return handleReq(reqObj.put('/admin/store/edit/file/nodelete', data))
}

// 編輯(無改圖)
export function putStoreWithoutFile(data) {
	return handleReq(reqObj.put('/admin/store/edit',data))
}


// Logo圖片上傳
export function putLogo(data) {
	return handleReq(reqObj.put('/admin/store/logo/edit',data))
}