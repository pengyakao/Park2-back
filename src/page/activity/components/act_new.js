import React, { Component, useEffect, useState } from "react";
import LayOutAct from "../../../components/layout/LayOut_activity";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import UploadButtons from "./UploadButtons";
import Select from "./Select";

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

// One time slot every 30 minutes.
const timeSlots = Array.from(new Array(24 * 2)).map(
  (_, index) =>
    `${index < 20 ? 0 : ""}${Math.floor(index / 2)}:${
      index % 2 === 0 ? "00" : "30"
    }`
);

const Act_new = ({ add }) => {
  const [act_img, setact_img] = useState([]);
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

  // console.log(act_class);

  return (
    <div>
      <div>
        <LayOutAct />
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
              <UploadButtons
                setact_img={setact_img}
                label="封面圖片"
                width={300}
              ></UploadButtons>

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
              <Select act_class={act_class} setact_class={setact_class} />
              {/* 分隔線 */}

              <TextField
                label="活動日期(起)"
                id="act_Sdate"
                type="date"
                required="true"
                defaultValue="2022-01-01"
                value={act_Sdate || "2022-01-01"}
                onChange={(e) => setact_Sdate(e.target.value)}
              />

              <TextField
                label="活動日期(迄)"
                id="act_Edate"
                type="date"
                required="true"
                defaultValue=""
                value={act_Edate || "2022-01-01"}
                onChange={(e) => setact_Edate(e.target.value)}
                renderInput={(params) => <TextField {...params} />}
              />
              {/* 活動時間 */}
              <Autocomplete
                id="act_Stime"
                value={act_Stime}
                onChange={(e) => setact_Stime(e.target.innerText)}
                options={timeSlots}
                required="true"
                // getOptionDisabled={(option) =>
                //   option === timeSlots[0] || option === timeSlots[2]
                // }
                sx={{ width: 100 }}
                renderInput={(params) => (
                  <TextField {...params} label="活動時間(起)" />
                )}
              />
              <Autocomplete
                id="act_Etime"
                value={act_Etime}
                onChange={(e) => setact_Etime(e.target.innerText)}
                options={timeSlots}
                required="true"
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
            
            </Box>
            <ThemeProvider theme={theme}>
              <Stack
                spacing={2}
                direction="row"
                style={{ display: "flex", "justify-content": "flex-end" }}
              >
                <Button color="neutral" variant="outlined" onClick={() => {
                  setact_title("PARA✦開幕主題派對");
                  setact_class("2")
                  setact_Sdate("2022-07-15");
                  setact_Edate("2022-07-15");
                  setact_Stime("19:00");
                  setact_Etime("21:00");
                  setact_location("PARK 1F");
                  setact_guests("PARA Coffee");
                  setacr_org("PARK2");
                  setact_info("一杯咖啡要等多久?! \n 一種直覺式選擇方式! \n 『新品牌降落PARK2』 \n #PARA Coffee 來了 ! ! ! \n PARA 源自希臘字根，代表「超越」， \n 超越想像的限制、超越現實的認知。 \n 108 秒的時間，搭配 iDrip AiOT技術， \n 從淺培到深培共6種品項選擇所喜好的風味口感， \n 讓選擇障礙不復存在， \n 以輕鬆低門檻的方式享受一杯簡單卻不妥協品質的好咖啡。")
                }}>
                  Demo
                </Button>
                <Button color="neutral" variant="outlined" href="/activity/">
                  取消
                </Button>
                <Button
                  color="neutral"
                  variant="contained"
                  href="/activity/"
                  onClick={() => {
                    // 宣告並新增物件內容
                    let formData = new FormData();
                    formData.append("title", act_title);
                    formData.append("type", act_class);
                    formData.append("startDate", act_Sdate);
                    formData.append("endDate", act_Edate);
                    formData.append("startTime", act_Stime);
                    formData.append("endTime", act_Etime);
                    formData.append("location", act_location);
                    formData.append("guests", act_guests);
                    formData.append("organizer", acr_org);
                    formData.append("info", act_info);
                    formData.append("organizerImg", "temp");
                    formData.append("isShow", 0);
                    formData.append("isSlider", 0);
                    formData.append("file", act_img);

                    postActivity(formData).then((result)=>{
                      console.log(result)
                    })
                    alert("新增成功");
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
