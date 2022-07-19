import React, { Component, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useLocation, Redirect } from "react-router-dom";

// api
import { putUser } from "../../api/user/userData";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 757,
  // height: 405,
  display: "flex",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};
const theme = createTheme({
  palette: {
    neutral: {
      main: "#000",
      contrastText: "#fff",
    },
  },
});

const User_editTable = ({ listData }) => {
  //抓取網址來讀取資料
  let i = "";
  const url = useLocation();
  let arr = Array.from(url.pathname);
  let urlLength = arr.length - arr.lastIndexOf("/") - 1;
  for (let j = 0; j < urlLength; j++) {
    i = i + arr.slice(-urlLength, arr.length)[j];
    if (j === urlLength - 1) {
      i = Number(i);
    }
  }

  // 權限驗證
  const sto_id = JSON.parse(localStorage.getItem("UserInfo")).sto_id;
  function uShouldNotPass() {
    window.location.href = `/user/${sto_id}`;
  }

  if (sto_id !== 0 && sto_id !== i) {
    uShouldNotPass();
  } else {
    // console.log("Welcome!");
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [userName, setuserName] = React.useState([]);
  const [userLevel, setuserLevel] = React.useState([]);
  const [userAccount, setUserAccount] = React.useState([]);
  const [userPassword, setUserPassword] = React.useState([]);
  var myData

  React.useEffect(() => {
    if (listData[0]) {

      let arr = listData.filter((e)=>e.sto_id == i)
      myData = arr[0]
      console.log(myData)
      setuserName(myData.user_name)
      setuserLevel(myData.user_level)
      setUserAccount(myData.user_account);
      setUserPassword(myData.user_password);


    }
  }, [listData]);

  console.log(listData);
  console.log(userAccount)

  // if (myData[0] != undefined) {
    return (
      <div>
        <div className="bs_article">
          <div style={{ width: "80%" }}>
            <h1>編輯帳號</h1>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                disabled
                label="店家名稱"
                variant="outlined"
                required="true"
                // defaultValue={lis}
                value={userName ?? ""}
                onChange={(e) => setuserName(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                // disabled
                label="帳號"
                variant="outlined"
                required="true"
                value={userAccount ?? ""}
                onChange={(e) => setUserAccount(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="密碼"
                variant="outlined"
                required="true"
                value={userPassword ?? ""}
                onChange={(e) => setUserPassword(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                disabled
                label="帳號權限(請至店家管理頁修改)"
                variant="outlined"
                required="true"
                // defaultValue={myData.user_level}
                value={userLevel ?? ""}
                onChange={(e) => setuserLevel(e.target.value)}
              />
              {/* <TextField
                id="outlined-basic"
                disabled
                label="進駐狀態(請至店家管理頁修改)"
                variant="outlined"
                required="true"
                defaultValue={listData[i].sto_sta}
              /> */}
            </Box>
            <ThemeProvider theme={theme}>
              <Stack
                spacing={2}
                direction="row"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Button color="neutral" variant="outlined" href="/user">
                  取消
                </Button>
                <div>
                  <Button
                    onClick={handleOpen}
                    color="neutral"
                    variant="contained"
                    href="#"
                  >
                    修改密碼
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    sx={{
                      backgroundColor: "rgba(0, 0, 0, .3)",
                    }}
                  >
                    <Box id="modelBox" sx={style}>
                      <Box
                        id="modelBox-content"
                        sx={{ mt: 2 }}
                        style={{ "background-color": "white" }}
                      ></Box>
                      <Stack spacing={2} direction="row">
                        <Button
                          color="neutral"
                          variant="outlined"
                          onClick={() => {
                            setOpen(false);
                          }}
                        >
                          取消
                        </Button>
                        <Button
                          color="neutral"
                          variant="contained"
                          // href="/user"
                          onClick={() => {
                            const myData = {
                              id: i + 1,
                              account: userAccount,
                              password: userPassword,
                            };
                            console.log(myData);
                            putUser(myData).then((result) => {
                              console.log(result);
                            });
                            setOpen(false);
                            // alert("密碼已修改");
                          }}
                        >
                          確定修改
                        </Button>
                      </Stack>
                    </Box>
                  </Modal>
                </div>
              </Stack>
            </ThemeProvider>
          </div>
        </div>
      </div>
    );
  // }
};
export { User_editTable };
