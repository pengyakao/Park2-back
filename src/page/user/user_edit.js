import React, { Component, useState } from "react";
import LayOutUser from "../../components/layout/LayOut_user";
import { User_editTable } from "./user_editTable";
import { useEffect } from "react";

// api
import { checkLogin } from "../../api/login/isLogin";
import { getUser } from "../../api/user/userData";

export default function User_edit() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUser().then((result) => {
      setData(result);
    });

    checkLogin().then((result) => {
      console.log(result);
    });
  }, []);

  return (
    <div>
      <LayOutUser />
      <User_editTable listData={data} />
    </div>
  );
}
