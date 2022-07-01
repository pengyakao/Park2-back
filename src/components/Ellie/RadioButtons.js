import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

export default function RadioButtonsGroup() {
    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">開放狀態</FormLabel>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="1" name="radio-buttons-group">
                <FormControlLabel value="1" control={<Radio />} label="正常營業" />
                <FormControlLabel value="2" control={<Radio />} label="戶外暫停" />
                <FormControlLabel value="3" control={<Radio />} label="全部暫停" />
            </RadioGroup>
        </FormControl>
    )
}
