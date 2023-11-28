"use client";
import { useEffect, useState } from "react";
export default function vercel() {
  const url = "https://api-test-app-iota.vercel.app/api";
  const [ele, setEle] = useState("");

  const data = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((obj) => setEle(obj));
  };

  useEffect(() => {
    data();
  }, [console.log(ele)]);

  return (
    <>
      <h1>This is from varcel get api</h1>

      <ul>
        {[...ele].map((user, i) => (
          <p key={user.data[i]}>
            {user.data}
            <li key={user.message[i]}> {user.message}</li>
            <li key={user.message[i]}> {user.message}</li>
            <li key={user.city[i]}> {user.city}</li>
          </p>
        ))}
      </ul>
    </>
  );
}
