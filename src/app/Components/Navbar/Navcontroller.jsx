"use client"
import React, { useEffect, useState } from "react";
import LoginNav from "./LoginNav";

function Navcontroller({ login }) {
  const [data, setdata] = useState({});
  useEffect(() => {
    const glog = async () => {
      let res = await fetch(
        `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getlogin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: login }),
        }
      );
      const resdata = await res.json();
      setdata(resdata);
    };
    glog();
  }, []);

  return <LoginNav data={data} />;
}

export default Navcontroller;
