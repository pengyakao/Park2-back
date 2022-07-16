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
			.catch((err) => {
                window.alert('帳號密碼錯誤！')
                reject(err)
            })
	})
}

// 登入
export function loginUser(data) {
	return handleReq(reqObj.post('/admin/login/user', data))
}