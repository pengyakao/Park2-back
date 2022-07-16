import axios from 'axios';
const reqObj = axios.create({
	// baseURL: 'http://10.0.0.188:3001',
    // baseURL: 'http://10.0.102.59:3001',
	// baseURL: 'http://192.168.0.161:3001',
	baseURL: 'http://192.168.31.124:3001',
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
