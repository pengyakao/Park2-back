import axios from 'axios';
import {url}  from '../url.js'

const reqObj = axios.create({
	baseURL: url,
    header: {
        'Content-Type': 'application/json'
        // 'Authorization': `Bearer ${token}`
		// 'Content-Type': 'multipart/form-data'
    }
})

function handleReq(e) {
	return new Promise((resolve, reject) => {
		e
			.then((res) => resolve(res.data))
			.catch((err) => {
                window.alert('請先登入帳號密碼！')
                window.location.href="/login"
                reject(err)
            })
	})
}

// 登入
export function checkLogin() {
    let token = localStorage.getItem('Token')
	return handleReq(reqObj.get('/check/islogin', { headers: {"Authorization" : `Bearer ${token}`} }))
}