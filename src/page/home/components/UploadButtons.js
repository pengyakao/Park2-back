import * as React from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
// import IconButton from '@mui/material/IconButton';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import { fontWeight } from '@mui/system'

const Input = styled('input')({
    display: 'none',
})

export default function UploadButtons({ changeImg }) {
    const [isimg, setImg] = useState([])

    const onChange = (e) => {
        const file = e.target.files.item(0) // 取得選中檔案們的一個檔案
        const fileReader = new FileReader() // FileReader為瀏覽器內建類別，用途為讀取瀏覽器選中的檔案
        fileReader.addEventListener('load', fileLoad)
        fileReader.readAsDataURL(file) // 讀取完檔案後，變成URL
        console.log(e.target.files[0])
        changeImg(e.target.files[0])
        console.log('ok')
    }

    const fileLoad = (e) => {
        setImg(e.target.result)
        // 讀取到DataURL後，儲存在result裡面，指定為img
    }

    return (
        <div
        // style={{display: 'flex', justifyContent: 'center', alignItem: 'center', border: '2px #F4F4F4 solid'}}
        >
            <h4 style={{ color: "gray", fontWeight: 400 }}>公告圖片上傳*&nbsp;&nbsp;&nbsp;
            <Stack
            // direction="row" alignItems="center" justifyContent="center" margin={2} spacing={2}
            >
                <label htmlFor="contained-button-file">
                    <Input onChange={onChange} accept="image/*" id="contained-button-file" multiple type="file" />
                    <Button variant="outlined" component="span" size='small' style={{ color: '#26252b', borderColor: '#26252b', marginTop: "10px" }}>
                        選擇檔案
                    </Button>
                </label>
            </Stack>
            </h4>
            <div
                style={{
                    display: 'flex',
                    border: '1px #C4C4C4 solid',
                    borderRadius: '18px',
                    justifyContent: 'center',
                    alignItem: 'center',
                    width: '280px',
                    // minHeight: '250px',
                    overflow: 'hidden',
                    // backgroundColor: 'red'
                }}
            >
                <img height={200} src={isimg} />
            </div>
           

        </div>
    )
}
