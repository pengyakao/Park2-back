import axios from 'axios';
const reqObj = axios.create({
    baseURL: 'http://10.0.102.59:3001',
	// baseURL: 'http://192.168.0.161:3001',
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