import axios from 'axios';
import {url}  from '../url.js'

const reqObj = axios.create({
	// baseURL: 'http://10.0.0.188:3001',
    // baseURL: 'http://10.0.102.59:3001',
	// baseURL: 'http://192.168.0.161:3001',
	baseURL: url,
    header: {
        'Content-Type': 'application/json'
		// 'Content-Type': 'multipart/form-data'
    }
})

function handleReq(e) {
	return new Promise((resolve, reject) => {
		e
			.then((res) => resolve(res.data))
			.catch((err) => reject(err))
	})
}

// 取得市集資料
export function getStoreApply() {
	return handleReq(reqObj.get('/admin/apply/store/get'))
}

// 編輯市集資料
export function editStoreApply(data) {
	return handleReq(reqObj.put('/admin/apply/store/edit', data))
}

// 寄送合約
export function postMail(data) {
	return handleReq(reqObj.post('/mail/contract/post', data))
}

// 寄送帳密
export function postAccount(data) {
	return handleReq(reqObj.post('/mail/login/post', data))
}

// 新增店家
export function addStore(data) {
	return handleReq(reqObj.post('/admin/apply/store/add', data))
}

// 新增帳號
export function addAccount(data) {
	return handleReq(reqObj.post('/admin/apply/account/add', data))
}

export function getStoreList(id){
	return handleReq(reqObj.get('/admin/apply/store/list/get',{
		params:{
			id
		}
	}))
}
