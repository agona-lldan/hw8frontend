export type AnswerSearchType = {
  time: number;
  response: AnswerItemSearchType[];
};

export type AnswerItemSearchType = {
  id: string;
  name: string;
  emoji: string;
};

export type CityType = {
  id: string;
  name: string;
  alt: string[];
  country: string;
  population: number;
  timezone: string;
  mod: string;
  coor: {
    lon: number;
    lat: number;
  };
};

export type CountryType = {
  id: string;
  name: string;
  code: string;
  population: number | null;
  temp: number | null;
  area: number | null;
  capital: string | null;
  flag: {
    emoji: string;
    unicode: string;
  };
};

export type AnswerWeatherWeatherType = {
  id: number;
  main: string;
  description: string;
  icon: string;
  temp: number;
  feels_like: number;
  temp_min?: number;
  temp_max?: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  clouds: number;
  rain?: number;
  snow?: number;
  sunrise: number;
  sunset: number;
};

export type AnswerWeatherItemType = {
  city: CityType;
  country: CountryType;
  weather: AnswerWeatherWeatherType;
};

export type AnswerWeatherType = {
  time: number;
  response: AnswerWeatherItemType;
};
