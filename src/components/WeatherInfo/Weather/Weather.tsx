import React from "react";
import styles from "./Weather.module.scss";
import { AnswerWeatherWeatherType } from "@/types/api";

export default function Weather({ data }: { data: AnswerWeatherWeatherType }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Weather</h2>
      <div className={styles.main}>
        <div className={styles.main__temp}>{data.temp} °C</div>
        <div className={styles.main__value}>
          <span>{data.main}</span>
          <span>{data.description}</span>
        </div>
      </div>
      <div className={styles.other}>
        <div className={styles.item}>
          <span>Feels Like</span>
          <span>{data.feels_like} °C</span>
        </div>
        {data.temp_max && data.temp_min && (
          <div className={styles.join}>
            <div className={styles.item}>
              <span>Temperature Max</span>
              <span>{data.temp_max} °C</span>
            </div>
            <div className={styles.item}>
              <span>Temperature Min</span>
              <span>{data.temp_min} °C</span>
            </div>
          </div>
        )}

        <div className={styles.item}>
          <span>Humidity</span>
          <span>{data.humidity} %</span>
        </div>
        <div className={styles.item}>
          <span>Visibility</span>
          <span>{data.visibility} meter</span>
        </div>
        <div className={styles.join}>
          <div className={styles.item}>
            <span>Wind Speed</span>
            <span>{data.wind_speed} m/s</span>
          </div>
          <div className={styles.item}>
            <span>Wind Deg</span>
            <span>{data.wind_speed} °</span>
          </div>
        </div>

        <div className={styles.item}>
          <span>Clouds</span>
          <span>{data.clouds} %</span>
        </div>

        <div className={styles.join}>
          <div className={styles.item}>
            <span>Sunrise</span>
            <span>
              {new Date(data.sunrise).toLocaleString("EN-en", {
                minute: "numeric",
                hour: "numeric",
              })}
            </span>
          </div>
          <div className={styles.item}>
            <span>Sunset</span>
            <span>
              {new Date(data.sunset).toLocaleString("EN-en", {
                minute: "numeric",
                hour: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
