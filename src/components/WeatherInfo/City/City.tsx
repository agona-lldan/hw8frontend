import React from "react";
import styles from "./City.module.scss";
import { CityType } from "@/types/api";
import { PersonStanding } from "lucide-react";

export default function City({ data }: { data: CityType }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{data.name}</h2>
      <div className={styles.row}>
        <span>Latitude</span>
        <span>{data.coor.lat}</span>
      </div>
      <div className={styles.row}>
        <span>Longitude</span>
        <span>{data.coor.lon}</span>
      </div>
      <div className={styles.row}>
        <span>
          Population <PersonStanding size={16} />
        </span>
        <span>{data.population}</span>
      </div>
      <div className={styles.row}>
        <span>Timezone</span>
        <span>{data.timezone}</span>
      </div>
      <div className={styles.row}>
        <span>Alternative Names</span>
        <div className={styles.alt}>
          {data.alt.map((e) => {
            return <span key={e}>{e}</span>;
          })}
        </div>
      </div>
    </div>
  );
}
