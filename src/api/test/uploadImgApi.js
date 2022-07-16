import axios from 'axios';
import {url}  from '../url.js'
const reqObj = axios.create({
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

// 取得活動圖片
export function getStoreImgs(id) {
	return handleReq(reqObj.get('/test/get', {
        params: {
            id
        }
    }))
}

// 修改活動圖片
export function editStoreImgs(formData) {
	return handleReq(reqObj.put('/test/edit', formData))
}

