import React, { Component, useEffect, useState } from "react";
import LayOut from "../../../components/Crystal/LayOut";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import UploadButtons from "./UploadButtons";
import Select from "./Select";
import UploadMore from "./UploadMore";

// api
import { postActivity } from "../../../api/activity/postActivity";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#000",
      contrastText: "#fff",
    },
  },
});

// const style1 = {
//   color: "#000",
//   "font-family": "Noto Sans TC",
//   "font-weight": 500,
//   "letter-spacing": "1px",
//   "font-size": "20px",
// };

// const data = [
//   {
//     label: "活動名稱A",
//     act_Sdate: "05/06",
//     act_Edate: "05/21",
//     act_Stime: "21:00",
//     act_Etime: "21:30",
//   },
//   {
//     label: "活動名稱B",
//     act_Sdate: "05/01",
//     act_Edate: "05/02",
//     act_Stime: "20:00",
//     act_Etime: "20:30",
//   },
//   {
//     label: "活動名稱C",
//     act_Sdate: "04/28",
//     act_Edate: "04/29",
//     act_Stime: "09:00",
//     act_Etime: "09:30",
//   },
//   {
//     label: "活動名稱D",
//     act_Sdate: "05/16",
//     act_Edate: "05/17",
//     act_Stime: "21:00",
//     act_Etime: "21:30",
//   },
// ];

// One time slot every 30 minutes.
const timeSlots = Array.from(new Array(24 * 2)).map(
  (_, index) =>
    `${index < 20 ? 0 : ""}${Math.floor(index / 2)}:${
      index % 2 === 0  ? '00' : '30'
    }`
);

const Act_new = ({ add }) => {
  // 宣告變數
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

  console.log(act_Stime);

  return (
    <div>
      <div>
        <LayOut />
        <div className="bs_article">
          <div style={{ width: "80%", paddingBottom: "50px" }}>
            <h1>新增活動</h1>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <h3>活動封面圖</h3>
              <UploadButtons label="封面圖片" width={300}></UploadButtons>

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
                onChange={(e) => setact_Sdate(e.target.value)}
              />
              <TextField
                label="活動日期(迄)"
                id="act_Edate"
                type="date"
                required="true"
                defaultValue="2022-01-01"
                onChange={(e) => setact_Edate(e.target.value)}
              />
              {/* 活動時間 */}
              <Autocomplete
                id="act_Stime"
                options={timeSlots}
                // getOptionDisabled={(option) =>
                //   option === timeSlots[0] || option === timeSlots[2]
                // }
                sx={{ width: 100 }}
                renderInput={(params) => (
                  <TextField {...params} label="活動時間(起)" />
                )}
                value={act_Stime}
                onChange={(e) => setact_Stime(e.target.value)}
              />
              <Autocomplete
                id="act_Etime"
                options={timeSlots}
                // getOptionDisabled={(option) =>
                //   option === timeSlots[0] || option === timeSlots[2]
                // }
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
                    const formData = new FormData();
                    formData.append("title", act_title);
                    formData.append("startDate", act_Sdate);
                    formData.append("endDate", act_Edate);
                    formData.append("startTime", act_Stime);
                    formData.append("endTime", act_Etime);
                    formData.append("organizer", acr_org);
                    formData.append("organizerImg", "organizerImg");
                    formData.append("location", act_location);
                    formData.append("type", 3);
                    formData.append("guests", act_guests);
                    formData.append("info", act_info);
                    formData.append("file", "file");
                    formData.append("isShow", "isShow");
                    formData.append("isSlider", "isSlider");
                    postActivity(formData);
                    alert("送出");
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

export default Act_new;
