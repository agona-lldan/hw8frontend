import React from "react";
import styles from "./City.module.scss";
import { CountryType } from "@/types/api";
import { PersonStanding } from "lucide-react";

export default function Country({ data }: { data: CountryType }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        {data.name} {data.flag.emoji}
      </h2>
      {data.population && (
        <div className={styles.row}>
          <span>
            Population <PersonStanding size={16} />
          </span>
          <span>{data.population}</span>
        </div>
      )}
      {data.area && (
        <div className={styles.row}>
          <span>Area</span>
          <span>{data.area} km²</span>
        </div>
      )}
      {data.capital && (
        <div className={styles.row}>
          <span>Capital City</span>
          <span>{data.capital}</span>
        </div>
      )}
      {data.temp && (
        <div className={styles.row}>
          <span>Average Temperature</span>
          <span>{data.temp} °C</span>
        </div>
      )}
    </div>
  );
}
