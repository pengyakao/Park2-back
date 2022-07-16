import axios from 'axios';
import {url}  from '../url.js'

const reqObj = axios.create({
    // baseURL: 'http://10.0.102.59:3001',
	// baseURL: 'http://10.0.0.188:3001',
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

// 取得市集申請資料
export function getMarketApply() {
	return handleReq(reqObj.get('/admin/apply/market/get'))
}

// 取得市集資料
export function getMarketList() {
	return handleReq(reqObj.get('/admin/apply/market/list/get'))
}

// 編輯市集申請資料
export function editMarketApply(data) {
	return handleReq(reqObj.put('/admin/apply/market/edit', data))
}

// 新增市集
export function addMarket(data) {
	return handleReq(reqObj.post('/admin/apply/market/add', data))
}


