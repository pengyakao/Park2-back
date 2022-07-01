import React, { Component } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import { bgcolor } from '@mui/system';
// import { useFormControl } from '@mui/material/FormControl';
// import { Input } from '@mui/material';


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
            <div style={{ width: "80%" }}>
                <h1>新增FAQ</h1>
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
                    />
                    <TextField id="outlined-basic"
                        label="FAQ回答"
                        variant="outlined"
                        required="true"
                        multiline
                        rows={5}
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
                        <Button color="neutral" variant="outlined" href='/home/home_faq'>取消</Button>
                        <Button color="neutral" variant="contained" href='/home/home_faq'
                            onClick={() => {
                                alert('送出')
                            }}
                        >送出</Button>
                    </Stack>
                </ThemeProvider>
            </div>
        );
    }
}

export default Home_faq_edit;