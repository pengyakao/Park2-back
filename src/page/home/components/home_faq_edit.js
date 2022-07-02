import React, { Component } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import { bgcolor } from '@mui/system';
// import { useFormControl } from '@mui/material/FormControl';
// import { Input } from '@mui/material';
import LayOut from '../../../components/Crystal/LayOut';


var data = [
    {
        id: 1,
        textQ: "Q1:問題一問題一問題一問題一問題一問題一",
        textA: "回答1回答1回答1回答1回答1回答1回答1回答1回答1",
        hidden: 0
    },
    {
        id: 2,
        textQ: "Q2:問題二問題二問題二問題二問題二問題二",
        textA: "回答2回答2回答2回答2回答2回答2回答2回答2回答2",
        hidden: 1
    },
    {
        id: 3,
        textQ: "Q3:問題三問題三問題三問題三問題三問題三",
        textA: "回答3回答3回答3回答3回答3回答3回答3回答3回答3",
        hidden: 1
    },
    {
        id: 4,
        textQ: "Q4:問題四問題四問題四問題四問題四問題四",
        textA: "回答4回答4回答4回答4回答4回答4回答4回答4回答4",
        hidden: 1
    }
]


const theme = createTheme({
    palette: {
        neutral: {
            main: '#000',
            contrastText: '#fff'
        },
    },
});

class Home_faq_edit extends Component {
    state = {}


    render() {
        return (
            <div>
                <LayOut />
                <div className='bs_article'>
                    <div style={{ width: "80%" }}>
                        <h1>編輯FAQ</h1>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '100%' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="outlined-basic"
                                label="FAQ題目"
                                variant="outlined"
                                required="true"
                                defaultValue={data[0].textQ}

                            />
                            <TextField id="outlined-basic"
                                label="FAQ回答"
                                variant="outlined"
                                required="true"
                                multiline
                                rows={5}
                                defaultValue={data[0].textA}
                                inputProps={{
                                    step: 1,
                                    min: 0,
                                    max: 10,
                                    type: 'number'
                                }}
                            />
                        </Box>
                        <ThemeProvider theme={theme}>
                            <Stack spacing={2} direction="row" style={{ display: 'flex', 'justify-content': 'flex-end' }}>
                                <Button color="neutral" variant="outlined" href='/home/faq'>取消</Button>
                                <Button color="neutral" variant="contained" href='/home/faq'
                                    onClick={() => {
                                        alert('送出')
                                    }}
                                >送出</Button>
                            </Stack>
                        </ThemeProvider>
                    </div>
                </div>
            </div>




        );
    }
}

export default Home_faq_edit;