import axios from 'axios';
const reqObj = axios.create({
    // baseURL: 'http://10.0.102.59:3001',
	// baseURL: 'http://192.168.0.161:3001',
<<<<<<< HEAD
    baseURL: 'http://10.0.0.188:3001',
=======
	baseURL: 'http://10.0.101.137:3001',
>>>>>>> c3faf6f079e1567c7a5a3346273fc04ccc81870f
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

