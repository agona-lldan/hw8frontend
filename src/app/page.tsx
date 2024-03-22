"use client";
import Header from "@/components/Header/Header";
import React from "react";
import { AnswerWeatherType } from "@/types/api";
import ky from "ky";
import { lineWobble } from "ldrs";
import WeatherInfo from "@/components/WeatherInfo/WeatherInfo";
import { Star } from "lucide-react";
import styles from "./page.module.scss";
lineWobble.register();
export default function Home() {
  const [data, setData] = React.useState<AnswerWeatherType | null>(null);
  const [star, setStar] = React.useState("");

  const getWeather = async () => {
    const d: AnswerWeatherType = await ky
      .get("http://localhost:5252/weather/" + star)
      .json();
    setData(d);
  };

  React.useEffect(() => {
    const l = localStorage.getItem("hw8");
    if (l) setStar(l);
  }, []);

  React.useEffect(() => {
    if (star) {
      getWeather();
    }
  }, [star]);
  return (
    <div className={styles.wrapper}>
      <Header />
      {star ? (
        <>
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
        </>
      ) : (
        <div className={styles.off}>
          Please Star The City <Star size={26} />
        </div>
      )}
    </div>
  );
}
