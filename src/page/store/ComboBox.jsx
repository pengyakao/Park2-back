import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

export default function ComboBox() {
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            renderInput={(params) => <TextField {...params} label="店家位置" />}
        />
    )
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { label: '101' },
    { label: '102' },
    { label: '103' },
    { label: '104' },
    { label: '105' },
    { label: '106' },
    { label: '107' },
    { label: '108' },
    { label: 'B101' },
    { label: 'B102' },
    { label: 'B103' },
    { label: 'B104' },
    { label: 'B105' },
    { label: 'B106' },
    { label: 'B107' },
    
]
