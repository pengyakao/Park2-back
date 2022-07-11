import axios from 'axios';
const reqObj = axios.create({
    baseURL: 'http://192.168.0.231:3001',
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
	return handleReq(reqObj.get('/admin/store/apply/get'))
}