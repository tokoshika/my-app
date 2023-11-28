"use client";
import { useState, useEffect } from "react";

export default function IndexPage() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState("");

  const getApi = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <h3>API fetch useStateを使う場合</h3>

      {[...users].map((user, i) => (
        <p key={user.id}>
          {user.name}
          <li key={user.email[i]}>e-mail: {user.email}</li>
          <li key={user.website[i]}>website: {user.website}</li>
        </p>
      ))}
    </>
  );
}
