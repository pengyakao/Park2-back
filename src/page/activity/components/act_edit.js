import React, { Component, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LayOutAct from "../../../components/layout/LayOut_activity";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import UploadButtons from "./UploadButtons";
import Select from "./Select";
import UploadMore from "./UploadMore";

import TextareaAutosize from "@mui/material/TextareaAutosize";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

// api
import { putActivity } from "../../../api/activity/putActivity";
import { getActivity } from "../../../api/activity/getActivity";

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

const Act_edit = () => {
  // 宣告變數
  const [data, setdata] = useState({});
  const [act_title, setact_title] = useState();
  const [act_class, setact_class] = useState();
  const [act_Sdate, setact_Sdate] = useState("");
  const [act_Edate, setact_Edate] = useState("");
  const [act_Stime, setact_Stime] = useState("");
  const [act_Etime, setact_Etime] = useState("");
  const [act_location, setact_location] = useState();
  const [act_guests, setact_guests] = useState();
  const [acr_org, setacr_org] = useState();
  const [act_info, setact_info] = useState();

  //抓網址來讀取資料
  var i;
  const url = useLocation();
  var arr = Array.from(url.pathname);
  var urlSlice = arr.length - arr.lastIndexOf("/") - 1;

  if (urlSlice === 1) {
    i = Number(arr.slice(-urlSlice, arr.length)[0]);
  } else if (urlSlice === 2) {
    i = Number(
      arr.slice(-urlSlice, arr.length)[0] + arr.slice(-urlSlice, arr.length)[1]
    );
  }

  //   載入資料
  useEffect(() => {
    getActivity(i).then((result) => {
      setdata(result[0]);
    });
  }, []);

  //   欄位初始化
  useEffect(() => {
    setact_title(data.act_title);
    // setact_Sdate(data.act_Sdate)
    setact_Stime(data.act_Stime);
    setact_Etime(data.act_Etime);
    setact_location(data.act_location);
    setact_guests(data.act_guests);
    setacr_org(data.acr_org);
    setact_info(data.act_info);

    console.log(data);
  }, [data]);

  //開發用
  //   console.log(data.act_Sdate);

  // One time slot every 30 minutes.
  const timeSlots = Array.from(new Array(24 * 2)).map(
    (_, index) =>
      `${index < 20 ? "0" : ""}${Math.floor(index / 2)}:${
        index % 2 === 0 ? "00" : "30"
      }`
  );

  return (
    <div>
      <div>
        <LayOutAct />
        <div className="bs_article">
          <div style={{ width: "80%", paddingBottom: "50px" }}>
            <h1>編輯活動資訊</h1>
            <Box
              component="form"
              sx={{ "& > :not(style)": { m: 1, width: "100%" } }}
              noValidate
              autoComplete="off"
              direction="row"
            >
              {/* <h3>活動封面圖</h3> */}
              {/* <UploadButtons label="封面圖片" width={300}></UploadButtons> */}

              <h3>活動資訊</h3>
              <TextField
                label="活動名稱"
                id="act_title"
                variant="outlined"
                required="true"
                value={act_title ?? ""}
                onChange={(e) => setact_title(e.target.value)}
              />
              {/* 活動類別 */}
              <Select />
              <TextField
                label="活動日期(起)"
                id="act_Sdate"
                type="date"
                required="true"
                defaultValue="2022-01-01"
                // value={act_Sdate ?? ""}
                // onChange={(e) => setact_Sdate(e.target.value)}
              />
              <TextField
                label="活動日期(迄)"
                id="act_Edate"
                type="date"
                required="true"
                defaultValue="2022-01-01"
              />
              {/* 活動時間 */}
              <Autocomplete
                id="act_Stime"
                value={act_Stime ?? ""}
                options={timeSlots}
                getOptionDisabled={(option) =>
                  option === timeSlots[0] || option === timeSlots[2]
                }
                sx={{ width: 100 }}
                renderInput={(params) => (
                  <TextField {...params} label="活動時間(起)" />
                )}
              />
              <Autocomplete
                id="act_Etime"
                value={act_Etime ?? ""}
                options={timeSlots}
                getOptionDisabled={(option) =>
                  option === timeSlots[0] || option === timeSlots[2]
                }
                sx={{ width: 100 }}
                renderInput={(params) => (
                  <TextField {...params} label="活動時間(迄)" />
                )}
              />
              <TextField
                label="活動地點"
                id="act_location"
                variant="outlined"
                required="true"
                value={act_location ?? ""}
                onChange={(e) => setact_location(e.target.value)}
              />
              <TextField
                label="活動嘉賓"
                id="act_guests"
                variant="outlined"
                multiline
                value={act_guests ?? ""}
                onChange={(e) => setact_guests(e.target.value)}
              />
              <TextField
                label="主辦單位"
                id="acr_org"
                variant="outlined"
                required="true"
                value={acr_org ?? ""}
                onChange={(e) => setacr_org(e.target.value)}
              />
              <TextField
                label="活動介紹"
                id="act_info"
                variant="outlined"
                required="true"
                multiline
                rows={10}
                inputProps={{ step: 1, min: 0, max: 10, type: "number" }}
                value={act_info ?? ""}
                onChange={(e) => setact_info(e.target.value)}
              />
              {/* <h3>活動照片</h3>
              <UploadMore /> */}
            </Box>
            <ThemeProvider theme={theme}>
              <Stack
                spacing={2}
                direction="row"
                style={{ display: "flex", "justify-content": "flex-end" }}
              >
                <Button color="neutral" variant="outlined" href="/activity/">
                  取消
                </Button>
                <Button
                  color="neutral"
                  variant="contained"
                  href="/activity/"
                  onClick={() => {
                    const formData = {
                      title: act_title,
                      startDate: data.startDate,
                      endDate: data.endDate,
                      startTime:act_Stime,
                      endTime:act_Etime,
                      organizer:acr_org,
                      organizerImg:"organizerImg",
                      location:act_location,
                      type:data.act_class,
                      guests:act_guests,
                      info:act_info,
                      file:"file",
                      isShow:"isShow",
                      isSlider:"isSlider"
                    };
                    putActivity(formData);
                    alert("編輯成功");
                  }}
                >
                  送出
                </Button>
              </Stack>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Act_edit;
