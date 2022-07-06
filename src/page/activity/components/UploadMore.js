import ReactDOM from 'react-dom'
import './UploadMore.css'
import * as React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const Input = styled('input')({
    display: 'none',
})

class UploadMore extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            no_image: 'https://www.freeiconspng.com/uploads/no-image-icon-6.png',
            files: [],
        }
        this.inputRef = React.createRef()
    }

    uploadItem = (e) => {
        const cnt = this.state.files.length
        console.log(cnt)
        if (cnt < 10) {
            e.preventDefault()
            let files = e.target.files
            const reader = new FileReader()
            for (const element of files) {
                reader.onloadend = () => {
                    this.setState({
                        files: [
                            ...this.state.files,
                            {
                                id: element.size,
                                file: element,
                                imagePreviewUrl: reader.result,
                            },
                        ],
                    })
                }
                reader.readAsDataURL(element)
            }
        } else {
            alert('照片上限為10張')
        }
    }

    removeItem = (event) => {
        const id = Number(event.target.id)
        this.setState({
            files: [...this.state.files.filter((obj) => obj.id !== id)],
        })
        this.inputRef.current.value = ''
    }

    render() {
        return (
            <div className="Upload">
                {/* <h1>多張輪片上傳</h1> */}

                <div className="imgContainer">
                    {!this.state.files.length ? (
                        <img src={this.state.no_image} alt="No Image" />
                    ) : (
                        this.state.files.map((obj, k) => (
                            <div className="imgWrapper">
                                <img src={obj.imagePreviewUrl} alt={obj.id} key={k} />
                                <button type="button" onClick={this.removeItem} id={obj.id}>
                                    &times;
                                </button>
                            </div>
                        ))
                    )}
                </div>
                <label>
                    <Stack spacing={2} direction="row" justifyContent="center" margin={2}>
                        <div>
                            <Input type="file" onChange={this.uploadItem} ref={this.inputRef} accept="image/*" />
                            <Button variant="outlined" component="span">
                                選擇檔案
                            </Button>
                        </div>
                        <Button variant="contained">上傳</Button>
                    </Stack>
                </label>
            </div>
        )
    }
}

export default UploadMore
