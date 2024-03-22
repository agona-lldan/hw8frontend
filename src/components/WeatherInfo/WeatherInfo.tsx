import React from "react";
import styles from "./WeatherInfo.module.scss";
import { AnswerWeatherType } from "@/types/api";
import Country from "@/components/WeatherInfo/City/Country";
import City from "@/components/WeatherInfo/City/City";
import Weather from "@/components/WeatherInfo/Weather/Weather";

export default function WeatherInfo({ data }: { data: AnswerWeatherType }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <div className={styles.table}>
          <City data={data.response.city} />
          <Weather data={data.response.weather} />
          <Country data={data.response.country} />
        </div>
      </div>
      <span className={styles.time}>{(data.time / 1000).toFixed(2)} seconds</span>
    </div>
  );
}
