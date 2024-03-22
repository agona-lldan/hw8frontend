"use client";
import Header from "@/components/Header/Header";
import React from "react";
import { AnswerWeatherType } from "@/types/api";
import ky from "ky";
import styles from "./page.module.scss";
import WeatherInfo from "@/components/WeatherInfo/WeatherInfo";
import { lineWobble } from "ldrs";

lineWobble.register();
export default function Page({ params }: { params: { id: string } }) {
  const [data, setData] = React.useState<AnswerWeatherType | null>(null);

  const getWeather = async () => {
    const d: AnswerWeatherType = await ky
      .get("http://localhost:5252/weather/" + params.id)
      .json();
    setData(d);
  };

  React.useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Header city={data ? data.response.city.id : undefined} />
      {data ? (
        <WeatherInfo data={data} />
      ) : (
        <div className={styles.loading}>
          <l-line-wobble
            size="80"
            stroke="5"
            bg-opacity="0.1"
            speed="1.75"
            color="white"
          ></l-line-wobble>
        </div>
      )}
    </div>
  );
}
