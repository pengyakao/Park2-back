import React, { Component } from 'react';
// 這裡引入的是本地檔案而不是下載的模組，是為了適配React@16.x的版本，這一塊在後面會講到
import FileUpload from './react-fileupload.jsx';

class FileUploader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        /*set properties*/
        const options={
            baseUrl: '/manage/product/upload.do',
            fileFieldName: 'upload_file',
            dataType: 'json',
            chooseAndUpload:true,
            uploadSuccess: (res)=>{
                this.props.onSuccess(res.data)
            },
            uploadError: (err)=>{
                this.props.onError(err.message||'上傳失敗')
            }
        }
        /*Use FileUpload with options*/
        /*Set two dom with ref*/
        return (
            <FileUpload options={options}>
                <button className="btn btn-xs btn-default" ref="chooseAndUpload">請選擇圖片</button>
            </FileUpload>
        )
    }
}
export default FileUploader;
