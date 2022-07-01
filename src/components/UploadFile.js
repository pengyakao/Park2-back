import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';



export default function UploadFile() {
    const onFileUpload = event => {
        console.log(event.target.files[0])
    }
    return (
        // <label htmlFor="contained-button-file">
        //     <input accept="application/pdf" id="contained-button-file" type="file" />
        // </label>
        <Button
            component="label"
            variant="contained">
            新增附件
            <input
                accept="application/pdf"
                type={"file"}
                style={{ display: "none" }}
                onChange={onFileUpload}
            />
        </Button>
    );
}
