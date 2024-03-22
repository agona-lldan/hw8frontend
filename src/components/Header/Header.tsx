"use client";
import React from "react";
import styles from "./Header.module.scss";
import { Search, Star } from "lucide-react";
import ky from "ky";
import { AnswerSearchType } from "@/types/api";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";
import Link from "next/link";
import { lineWobble } from "ldrs";

lineWobble.register();
export default function Header({ city }: { city?: string }) {
  const [focus, setFocus] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [resultSearch, setResultSearch] = React.useState<AnswerSearchType | null>(null);
  const [loading, setLoading] = React.useState(false);
  const debouncedSearch = useDebouncedValue(searchValue, 500);

  const [starred, setStarred] = React.useState(false);

  React.useEffect(() => {
    const item = localStorage.getItem("hw8");
    if (item === city) {
      setStarred(true);
    }
  }, []);

  async function search() {
    const data: AnswerSearchType = await ky
      .get("http://localhost:5252/search/" + debouncedSearch)
      .json();
    setResultSearch(data);
  }

  React.useEffect(() => {
    if (debouncedSearch.length > 0) {
      setLoading(true);
      search().then(() => {
        setLoading(false);
      });
    }
  }, [debouncedSearch]);

  return (
    <header className={styles.wrapper}>
      <div className={styles.top}>
        <Link href="/" className={styles.link}>
          hw8
        </Link>
        <div className={styles.search__block}>
          <div className={focus ? styles.search + " " + styles.active : styles.search}>
            <label htmlFor="search">
              <Search size={16} color="#7a828c" />
            </label>
            <input
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
                setResultSearch(null);
              }}
              type="text"
              placeholder="Search"
              className={styles.input}
              id="search"
              autoComplete="off"
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
            />
            {loading && (
              <l-line-wobble
                size="20"
                stroke="5"
                bg-opacity="0.1"
                speed="1.75"
                color="white"
              ></l-line-wobble>
            )}
          </div>
        </div>
        {city && (
          <button
            className={styles.link}
            disabled={starred}
            onClick={() => {
              localStorage.setItem("hw8", city);
              setStarred(true);
            }}
          >
            <Star size={16} />
          </button>
        )}
      </div>
      {resultSearch && (
        <div className={styles.bottom}>
          {resultSearch.response.map((e) => {
            return (
              <Link href={"/weather/" + e.id} key={e.id} className={styles.link}>
                <span>{e.name}</span>
                <span>{e.emoji}</span>
              </Link>
            );
          })}
          <span className={styles.time}>
            {(resultSearch.time / 1000).toFixed(2)} seconds
          </span>
        </div>
      )}
    </header>
  );
}
