import "server-only";

const dictionaries = {
  en: () => import("./dictionary/en.json").then((module) => module.default),
  bn: () => import("./dictionary/bn.json").then((module) => module.default),
};

export const getDictionary = async (locale) => dictionaries[locale]();
