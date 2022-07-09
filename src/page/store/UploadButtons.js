import * as React from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
// import IconButton from '@mui/material/IconButton';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack'
import { useState } from 'react'
import ReactDOM from 'react-dom'

const Input = styled('input')({
    display: 'none',
})

export default function UploadButtons() {
    const [sto_img, setImg] = useState([])

    const onChange = (e) => {
        const file = e.target.files.item(0) // 取得選中檔案們的一個檔案
        const fileReader = new FileReader() // FileReader為瀏覽器內建類別，用途為讀取瀏覽器選中的檔案
        fileReader.addEventListener('load', fileLoad)
        fileReader.readAsDataURL(file) // 讀取完檔案後，變成URL
        console.log('ok')
    }

    const fileLoad = (e) => {
        setImg(e.target.result)
        // 讀取到DataURL後，儲存在result裡面，指定為img
    }

    return (
        <div
            style={
                {
                    // display: 'flex', justifyContent: 'center', alignItem: 'center', border: '2px #F4F4F4 solid'
                }
            }
        >
            <div
                style={{
                    display: 'flex',
                    border: '2px #F4F4F4 solid',
                    justifyContent: 'center',
                    alignItem: 'center',
                    minHeight: '300px',
                    overflow: 'hidden',
                }}
            >
                <img height={300} src={sto_img} />
            </div>
            <Stack direction="row" alignItems="center" justifyContent="center" margin={2} spacing={2}>
                <label htmlFor="contained-button-file">
                    <Input onChange={onChange} accept="image/*" id="contained-button-file" multiple type="file" />
                    <Button variant="outlined" component="span" style={{ backgroundColor: '#26252b', color: 'white' }}>
                        選擇檔案
                    </Button>
                </label>
                {/* <Button variant="contained" style={{ backgroundColor: '#26252b', color: 'white' }}>
                    上傳
                </Button> */}
            </Stack>
        </div>
    )
}
