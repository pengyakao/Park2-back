import React from "react";
import { useLocation } from "react-router-dom";
import LayOutStore from "../../components/layout/LayOut_store";
import { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import UploadButtons from "./UploadButtons";
import UploadMore from "./UploadMore.jsx";
import TimeOption from "./TimeOption";
import "./store_each.css";

// api
import {
  getStore,
  postStore,
  putStore,
  putStoreWithoutFile,
  putStoreNoDelete
} from "../../api/store/storeApi";

import { putLogo } from "../../api/store/storeApi";
import { getStoreImgs, editStoreImgs, postStoreImgs } from "../../api/test/uploadImgApi";
import { checkLogin } from "../../api/login/isLogin";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#000",
      contrastText: "#fff",
    },
  },
});

const Store_each = () => {
  //抓網址來讀取資料
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
    window.location.href = `/store/store_edit/${sto_id}`;
  }

  if (sto_id !== 0 && sto_id !== i) {
    uShouldNotPass();
  } else {
    // console.log("Welcome!");
  }

  // 宣告變數
  const [data, setData] = useState({});
  const [sto_name, setsto_name] = useState();
  const [sto_img, setsto_img] = useState();
  const [sto_logo, setsto_logo] = useState();
  const [sto_moreImgFormData, setmoreImgFormData] = useState(new FormData());
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

  //   載入資料
  useEffect(() => {
    checkLogin().then((result) => {
      console.log("login", result);
    });
    getStore(i).then((result) => {
      setData(result[0]);
    });
  }, []);

  //   input初始化
  useEffect(() => {
    setsto_img(data.sto_first_img);
    setsto_name(data.sto_name);
    setsto_logo(data.sto_img);
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
  console.log(data);
  // console.log(data.sto_fri);
  // console.log(data.sto_sat);
  // console.log(data.sto_sun);
  // console.log(document.getElementById('contained-button-file'));


  return (
    <div>
      <div>
        <LayOutStore />
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
              <div className="reMainImg">
                <h3>封面圖片</h3>
                <UploadButtons
                  sto_img={sto_img}
                  setsto_img={setsto_img}
                  id={"firstImg"}
                  width={300}
                ></UploadButtons>
              </div>

              <div className="reMainImg">
                <h3>Logo圖片</h3>
                <UploadButtons
                  sto_img={sto_logo}
                  setsto_img={setsto_logo}
                  id={"logo"}
                  width={300}
                ></UploadButtons>
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
              <div>
                <div className="storeMoreImg">
                  <h3>
                    店家圖片
                    <span
                      style={{ fontSize: "12px", fontWeight: "400" }}
                    ></span>
                  </h3>
                  <UploadMore
                    i={i}
                    // sto_moreImgFormData={sto_moreImgFormData}
                    setmoreImgFormData={setmoreImgFormData}

                  ></UploadMore>
                </div>
              </div>
              <div className="storetime">
                <h3>營業時間</h3>
                <div className="storetime_container">
                  <div>
                    <div>平日：</div>
                    <TimeOption
                      data={sto_weekdayStart}
                      setdata={setsto_weekdayStart}
                    ></TimeOption>
                    <div>～</div>
                    <TimeOption
                      data={sto_weekdayEnd}
                      setdata={setsto_weekdayEnd}
                    ></TimeOption>
                  </div>
                  <div>
                    <div>假日：</div>
                    <TimeOption
                      data={sto_holidayStart}
                      setdata={setsto_holidayStart}
                    ></TimeOption>
                    <div>～</div>
                    <TimeOption
                      data={sto_holidayEnd}
                      setdata={setsto_holidayEnd}
                    ></TimeOption>
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
                  <Button
                    color="neutral"
                    variant="contained"
                    onClick={() => {
                      setsto_weekdayStart("11:00");
                      setsto_weekdayEnd("20:00");
                      setsto_holidayStart("11:00");
                      setsto_holidayEnd("20:00");
                      setsto_fb("http://www.facebook.com/para.coffee");
                      setsto_ins("http://www.instagram.com/para_coffee");
                      setsto_pay1(1);
                      setsto_pay2(1);
                      setsto_pay3(1);
                      setsto_pay4(1);
                      setsto_pay5(1);
                      setsto_pay6(1);
                      setsto_info(
                        "簡單點一杯 不簡單的咖啡\n _\n用喜歡風味探索0-6\n簡單選擇，滿足你不簡單的味蕾\n今天，PARA幾號？\n 1 淺焙 甜桃 柑橘 白花 檸檬紅茶\n 2 淺中焙 熟桃 香蕉 菊花 高山茶\n 3 中焙 李子 楓糖 茶梅 奶油\n 4 中深焙 巧克力 煙燻 焦糖 松木\n 5 中焙 百香果 熟橘 甜橙\n 6 中焙 烏梅 黑醋栗 果茶\n 0 歐蕾 冷萃與燕麥奶的交織平衡\n #paracoffee"
                      );
                    }}
                  >
                    Demo Button
                  </Button>
                  <Button color="neutral" variant="outlined" href="/store">
                    取消
                  </Button>
                  <Button
                    color="neutral"
                    variant="contained"
                    // href="/store"
                    onClick={() => {
                      // 資料更新物件
                      const formData = new FormData();
                      formData.append("id", i);
                      formData.append("name", sto_name);
                      formData.append("location", sto_location);
                      formData.append("tel", sto_tel);
                      formData.append("type", data.sto_class);
                      formData.append("thu", sto_weekdayStart);
                      formData.append("fri", sto_weekdayEnd);
                      formData.append("sat", sto_holidayStart);
                      formData.append("sun", sto_holidayEnd);
                      formData.append("pay1", sto_pay1);
                      formData.append("pay2", sto_pay2);
                      formData.append("pay3", sto_pay3);
                      formData.append("pay4", sto_pay4);
                      formData.append("pay5", sto_pay5);
                      formData.append("pay6", sto_pay6);
                      formData.append("pay7", sto_pay7);
                      formData.append("fb", sto_fb);
                      formData.append("ig", sto_ins);
                      formData.append("line", sto_line);
                      formData.append("info", sto_info);
                      formData.append("state", "1");
                      formData.append("isMain", data.sto_main);
                      formData.append("file", sto_img);
                      // logo更新物件
                      const logoData = new FormData();
                      logoData.append("id", i);
                      logoData.append("file", sto_logo);
                      console.log(sto_logo);


                      // 根據是否有更新首圖來決定使用的api
                      console.log(data.sto_first_img)
                      console.log(sto_img)
                      
                      if(sto_img == data.sto_first_img){
                        // 不傳圖不刪圖
                        let myData = {
                          id: i,
                          name: sto_name,
                          tel: sto_tel,
                          thu: sto_weekdayStart,
                          fri: sto_weekdayEnd,
                          sat: sto_holidayStart,
                          sun: sto_holidayEnd,
                          pay1: sto_pay1,
                          pay2: sto_pay2,
                          pay3: sto_pay3,
                          pay4: sto_pay4,
                          pay5: sto_pay5,
                          pay6: sto_pay6,
                          pay7: sto_pay7,
                          fb: sto_fb,
                          ig: sto_ins,
                          line: sto_line,
                          info: sto_info,
                          state: 1
                        }
                        putStoreWithoutFile(myData).then((result) => {
                          console.log(result);
                          // logo更新
                          if(sto_logo != data.sto_img){
                            putLogo(logoData).then((result) => {
                              console.log(result);
                              window.location.href = `/store/${data.sto_id}`;
                            });
                          }
                        });

                      }else if (sto_img !== data.sto_first_img && data.sto_first_img == null) {
                         // 傳圖不刪圖
                        putStoreNoDelete(formData).then((result)=>{
                          console.log(result);
                          // logo更新
                          if(sto_logo != data.sto_img){
                            putLogo(logoData).then((result) => {
                              console.log(result);
                              window.location.href = `/store/${data.sto_id}`;
                            });
                          }
                        })
                        
                      } else{
                       // 傳圖也刪圖
                        // formData.append("logo", data.sto_img);
                        formData.append("delete", data.sto_first_img);
                        putStore(formData).then((result) => {
                          console.log(result);
                          // logo更新
                          if(sto_logo != data.sto_img){
                            putLogo(logoData).then((result) => {
                              console.log(result);
                              window.location.href = `/store/${data.sto_id}`;
                            });
                          }
                        });
                      }

                      
                      // 多圖更新
                      editStoreImgs(sto_moreImgFormData).then((result) => {
                        console.log(result);
                      });

                      // postStoreImgs()

                      // 1秒後重新整理
                      // setTimeout(() => {
                      //   window.location.href = `/store/${data.sto_id}`;
                      // }, 1000);
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
