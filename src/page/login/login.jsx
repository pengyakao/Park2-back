import React, { Component } from "react";

// mui
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#000",
      contrastText: "#fff",
    },
  },
});

const style1 = {
  color: "#000",
  "font-family": "Noto Sans TC",
  "font-weight": 500,
  "letter-spacing": "1px",
  "font-size": "20px",
};

const Login = () => {
  const [account, setAccount] = React.useState();
  const [password, setPassword] = React.useState();

  return (
    <div>
      <h3>後台登入頁面</h3>
      <form action="post">
      <TextField
        label="帳號"
        id="login_account"
        variant="outlined"
        required="true"
        // value={act_title ?? ""}
        // onChange={(e) => setact_title(e.target.value)}
      />
      <TextField
        label="密碼"
        id="login_password"
        variant="outlined"
        required="true"
        // value={act_title ?? ""}
        // onChange={(e) => setact_title(e.target.value)}
      />
      </form>



       <ThemeProvider theme={theme}>
              <Stack
                spacing={2}
                direction="row"
                style={{ display: "flex", "justify-content": "flex-start" }}
              >
                <Button color="neutral" variant="outlined" href="/activity/">
                  取消
                </Button>
                <Button
                  color="neutral"
                  variant="contained"
                  // href="/home/act"
                  onClick={() => {
                    
                  }}
                >
                  送出
                </Button>
              </Stack>
            </ThemeProvider>
    </div>
  );
};

export default Login;
