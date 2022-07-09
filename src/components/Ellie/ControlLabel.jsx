import * as React from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import './ControlLabel.css'

export default function FormControlLabelPosition() {
    return (
        // <div>
        //   <input type="checkbox" name="" id="pay" />
        //   <label htmlFor='pay'>123
        //   <img src="/img/icon/card.svg" alt="" />
        //   </label>
        //   </div>
        <FormControl component="fieldset">
            <FormLabel component="legend">支付方式</FormLabel>
            <div>
                <FormControlLabel
                    id="pay"
                    // value="end"
                    control={<Checkbox />}
                    label=""
                    // labelPlacement="end"
                    // sx={{ src: '/img/icon/card.svg', backgroundColor: 'red' }}
                    // image="/img/icon/card.svg"
                />
                <label htmlFor="pay" for="pay">
                    <img src="/img/icon/card.svg" alt="" />
                </label>
            </div>
        </FormControl>
    )
}
