"use client";
import { useState, useEffect } from "react";

export default function Tenki() {
  const url =
    "https://www.jma.go.jp/bosai/forecast/data/overview_forecast/014100.json";

  const [weather, setWeather] = useState("");

  const getWeather = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => setWeather(data));
  };

  useEffect(() => {
    getWeather();
  }, [console.log(weather)]);
  return (
    <>
      <div className="weather-container">
        <h2>気象庁({weather.publishingOffice})</h2>
        <div className="text-container">
          <h3>{weather.targetArea}</h3>
          <p>{weather.reportDatetime}</p>
          <p>{weather.text}</p>
        </div>
      </div>
    </>
  );
}
