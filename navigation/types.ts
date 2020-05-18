export type HomeStackParamList = {
  Home: undefined;
  RunningHorse: { raceName: string; raceDay: string };
  Race: { raceName: string };
};

export type BlogStackParamList = {
  Blog: undefined;
  BlogWeb: { uri: string };
};

export type HorseStackParamList = {
  Horse: undefined;
};

export type RaceStackParamList = {
  Race: undefined;
};
