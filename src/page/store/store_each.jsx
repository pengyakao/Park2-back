import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LayOut from "../../components/Crystal/LayOut";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "./TextareaAutosize";
import Checkbox from "@mui/material/Checkbox";
import UploadButtons from "./UploadButtons";
// import ComboBox from "./ComboBox";
import UploadMore from "./UploadMore";
import TimeOption from "./TimeOption";
import "./store_each.css";

// api
import { getStore, putStore } from "../../api/store/storeApi";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#000",
      contrastText: "#fff",
    },
  },
});

const Store_each = () => {
  // 宣告變數
  const [data, setData] = useState({});
  const [sto_name, setsto_name] = useState();
  const [sto_location, setsto_location] = useState();
  const [sto_tel, setsto_tel] = useState();
  const [sto_weekdayStart, setsto_weekdayStart] = useState("");
  const [sto_weekdayEnd, setsto_weekdayEnd] = useState("");
  const [sto_holidayStart, setsto_holidayStart] = useState("");
  const [sto_holidayEnd, setsto_holidayEnd] = useState("");
  const [sto_pay1, setsto_pay1] = useState();
  const [sto_pay2, setsto_pay2] = useState();
  const [sto_pay3, setsto_pay3] = useState();
  const [sto_pay4, setsto_pay4] = useState();
  const [sto_pay5, setsto_pay5] = useState();
  const [sto_pay6, setsto_pay6] = useState();
  const [sto_pay7, setsto_pay7] = useState();
  const [sto_fb, setsto_fb] = useState();
  const [sto_ins, setsto_ins] = useState();
  const [sto_line, setsto_line] = useState();
  const [sto_info, setsto_info] = useState();

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
    getStore(i).then((result) => {
      setData(result[0]);
    });
  }, []);

  //   input初始化
  useEffect(() => {
    setsto_name(data.sto_name);
    setsto_location(data.sto_location);
    setsto_tel(data.sto_tel);
    setsto_weekdayStart(data.sto_thu);
    setsto_weekdayEnd(data.sto_fri);
    setsto_holidayStart(data.sto_sat);
    setsto_holidayEnd(data.sto_sun);
    setsto_ins(data.sto_ins);
    setsto_line(data.sto_line);
    setsto_fb(data.sto_fb);
    setsto_pay1(data.sto_pay1);
    setsto_pay2(data.sto_pay2);
    setsto_pay3(data.sto_pay3);
    setsto_pay4(data.sto_pay4);
    setsto_pay5(data.sto_pay5);
    setsto_pay6(data.sto_pay6);
    setsto_pay7(data.sto_pay7);
    setsto_info(data.sto_info);
  }, [data]);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  // 開發用
  // console.log(data.sto_thu);
  // console.log(data.sto_fri);
  // console.log(data.sto_sat);
  // console.log(data.sto_sun);
  // console.log(sto_img);
  // console.log(document.getElementById('contained-button-file'));

  return (
    <div>
      <div>
        <LayOut />
        <div className="bs_article">
          <div style={{ width: "80%" }}>
            <h1>新增店家資訊</h1>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
              direction="row"
            >
              <div className="storeMainImg">
                <h3>封面圖片</h3>
                <UploadButtons width={300}></UploadButtons>
              </div>
              <div className="storeName">
                <h3>店家名稱</h3>
                <TextField
                  id={Store_each.sto_name}
                  label="店家名稱"
                  variant="outlined"
                  required="true"
                  value={sto_name ?? ""}
                  onChange={(e) => setsto_name(e.target.value)}
                />
              </div>
              <div className="storeSet">
                <h3>店家位置</h3>
                <TextField
                  id={Store_each.sto_location}
                  label="店家位置"
                  variant="outlined"
                  disabled
                  value={sto_location ?? ""}
                  onChange={(e) => setsto_location(e.target.value)}
                />
              </div>
              <div className="storePhone">
                <h3>聯絡電話</h3>
                <TextField
                  id="outlined-basic"
                  label="聯絡電話"
                  placeholder="0912-345-678"
                  variant="outlined"
                  required="true"
                  value={sto_tel ?? ""}
                  onChange={(e) => setsto_tel(e.target.value)}
                />
              </div>
              {/* <div>
                <div className="storeMoreImg">
                  <h3>
                    店家圖片
                    <span style={{ fontSize: "12px", fontWeight: "400" }}>
                      （至少五張，最多八張）
                    </span>
                  </h3>
                  <UploadMore></UploadMore>
                </div>
              </div> */}
              <div className="storetime">
                <h3>營業時間</h3>
                <div className="storetime_container">
                  <div>
                    <div>平日：</div>
                    <TimeOption
                      data={sto_weekdayStart ?? ""}
                      id={'sto_weekdayStart'}
                    ></TimeOption>
                    <div>～</div>
                    <TimeOption data={sto_weekdayEnd ?? ""}></TimeOption>
                  </div>
                  <div>
                    <div>假日：</div>
                    <TimeOption data={sto_holidayStart ?? ""}></TimeOption>
                    <div>～</div>
                    <TimeOption data={sto_holidayEnd ?? ""}></TimeOption>
                  </div>
                </div>
              </div>
              <div className="storepay">
                <h3>支付方式</h3>
                <div className="storepay_container">
                  <div className="storepay1">
                    <Checkbox
                      // {...label}
                      checked={sto_pay1 ?? 0}
                      onChange={(e) => setsto_pay1(e.target.checked)}
                      id="sto_pay1"
                    />
                    <label htmlFor="sto_pay1">
                      <img src="/img/icon/cash.svg" alt="現金支付" />
                    </label>
                  </div>
                  <div className="storepay2">
                    <Checkbox
                      {...label}
                      defaultChecked="false"
                      checked={sto_pay2 ?? 0}
                      onChange={(e) => setsto_pay2(e.target.checked)}
                      id="sto_pay2"
                    />
                    <label htmlFor="sto_pay2">
                      <img src="/img/icon/card.svg" alt="信用卡" />
                    </label>
                  </div>
                  <div className="storepay3">
                    <Checkbox
                      {...label}
                      checked={sto_pay3 ?? 0}
                      onChange={(e) => setsto_pay3(e.target.checked)}
                      id="sto_pay3"
                    />
                    <label htmlFor="sto_pay3">
                      <img src="/img/icon/linepay.png" alt="Linepay" />
                    </label>
                  </div>
                  <div className="storepay4">
                    <Checkbox
                      {...label}
                      // defaultChecked="true"
                      checked={sto_pay4 ?? 0}
                      onChange={(e) => setsto_pay4(e.target.checked)}
                      id="sto_pay4"
                    />
                    <label htmlFor="sto_pay4">
                      <img src="/img/icon/street.png" alt="街口" />
                    </label>
                  </div>

                  <div className="storepay5">
                    <Checkbox
                      {...label}
                      checked={sto_pay5 ?? 0}
                      onChange={(e) => setsto_pay5(e.target.checked)}
                      id="sto_pay5"
                    />
                    <label htmlFor="sto_pay5">
                      <img src="/img/icon/icash.png" alt="悠遊卡" />
                    </label>
                  </div>

                  <div className="storepay6">
                    <Checkbox
                      {...label}
                      checked={sto_pay6 ?? 0}
                      onChange={(e) => setsto_pay6(e.target.checked)}
                      id="sto_pay6"
                    />
                    <label htmlFor="sto_pay6">
                      <img src="/img/icon/Apple_Pay_logo.svg" alt="ApplePay" />
                    </label>
                  </div>
                  <div className="storepay7">
                    <Checkbox
                      {...label}
                      checked={sto_pay7 ?? 0}
                      onChange={(e) => setsto_pay7(e.target.checked)}
                      id="sto_pay7"
                    />
                    <label htmlFor="sto_pay7">
                      <img src="/img/icon/taobao.png" alt="支付寶" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="fanspage">
                <h3>粉絲專頁</h3>
                <div className="fanspage-container">
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Facebook"
                      placeholder="https://www.facebook.com/cmppark2/"
                      variant="outlined"
                      required="true"
                      value={sto_fb ?? ""}
                      onChange={(e) => setsto_fb(e.target.value)}
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Instargam"
                      placeholder="https://www.Instargam.com/cmppark2/"
                      variant="outlined"
                      required="true"
                      value={sto_ins ?? ""}
                      onChange={(e) => setsto_ins(e.target.value)}
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Line"
                      placeholder="https://line.me/ti/p/~@Park2"
                      variant="outlined"
                      required="true"
                      value={sto_line ?? ""}
                      onChange={(e) => setsto_line(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="storeintro">
                <h3>店家介紹</h3>
                <TextField
                  label=""
                  id="outlined-basic"
                  variant="outlined"
                  required="true"
                  multiline
                  rows={10}
                  fullWidth
                  inputProps={{ step: 1, min: 0, max: 10, type: "number" }}
                  value={sto_info ?? ""}
                  onChange={(e) => setsto_info(e.target.value)}
                />
              </div>
            </Box>
            <ThemeProvider theme={theme}>
              <div className="StoreBtn">
                <Stack
                  spacing={2}
                  direction="row"
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Button color="neutral" variant="outlined" href="/store">
                    取消
                  </Button>
                  <Button
                    color="neutral"
                    variant="contained"
                    href="/store"
                    onClick={() => {
                      alert("資料已上傳");
                      var myData = {
                        img: "sto_img",
                        tel: sto_tel,
                        location: data.sto_location,
                        pay1: data.sto_pay1,
                        pay2: data.sto_pay2,
                        pay3: data.sto_pay3,
                        pay4: data.sto_pay4,
                        pay5: data.sto_pay5,
                        pay6: data.sto_pay6,
                        pay7: data.sto_pay7,
                        mon: data.sto_mon,
                        tue: data.sto_tue,
                        wed: data.sto_wed,
                        thu: sto_weekdayStart,
                        fri: sto_weekdayEnd,
                        sat: sto_holidayStart,
                        sun: sto_holidayEnd,
                        fb: sto_fb,
                        ig: sto_ins,
                        line: sto_line,
                        info: sto_info,
                        state: data.sto_sta,
                        isMain: data.sto_main,
                        id: data.sto_id,
                      };
                      putStore(myData);
                      console.log("資料已上傳");
                    }}
                  >
                    送出
                  </Button>
                </Stack>
              </div>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store_each;
