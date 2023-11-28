"use client";
import { useState, useEffect } from "react";

export default function IndexPage() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState("");

  // const getApi = async () => {
  //   await fetch(url)
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));
  // };

  const getApi = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };
  console.log(users);

  useEffect(() => {
    getApi();
  }, []);

  [...users].map((user) => {
    console.log(user.name);
  });

  return (
    <>
      <p>Hello World</p>

      {/* {[...users].map((user, i) => (
        <li key={user + i}>{user.name}</li>
      ))} */}

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
