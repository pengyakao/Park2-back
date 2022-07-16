// 引入 Axios
import axios from 'axios'
import {url}  from '../url.js'

// 設定 baseUrl
const reqObj = axios.create({
    // baseURL 設定的是自己測試的 IP位址:server埠號 (ex. http://192.168.0.112:3000)
    // baseURL: 'http://192.168.100.11:3001',
	// baseURL: 'http://192.168.0.7:3001',
	baseURL: 'http://192.168.100.11:3001',


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

export function getStore(id) {
    return handleReq(reqObj.get('/self/store/get', {
        params: {
            id
        }
    }))
}

export function putStore(data) {
    return handleReq(reqObj.put('/admin/store/edit/file', data))
}


export function putStoreWithoutFile(data) {
	return handleReq(reqObj.put('/admin/store/edit',data))
}


