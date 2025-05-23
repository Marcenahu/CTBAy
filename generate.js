const studioId = "vo1etoba";
const studioDataset = "production";
import generateIndex from "./generators/home.js";
import generateAbout from "./generators/about.js";
import generateProductions from "./generators/productions.js";
import generateProductionDetails from "./generators/productionDetails.js";
import generateLessons from "./generators/lessons.js";
import generateLessonDetails from "./generators/lessonDetails.js";
import generateClub from "./generators/club.js";
import generateAgenda from "./generators/agenda.js";

export function makeImgUrl(ref, maxquality) {
  const parts = ref?.split("-");
  const id = parts[1];
  const dimentions = parts[2];
  const format = parts[3];
  const optimizedSize = maxquality ? "" : "&w=600";
  return `https://cdn.sanity.io/images/${studioId}/${studioDataset}/${id}-${dimentions}.${format}?fm=webp${optimizedSize}`;
}
const types = [
  "brand",
  "home",
  "about",
  "productions",
  "lessons",
  "club",
  "agenda",
];
const fetchData = async () => {
  try {
    const response = await fetch(
      `https://${studioId}.api.sanity.io/v2021-10-21/data/query/${studioDataset}?query=${encodeURIComponent(
        `*[${types
          .map(
            (type, index) => `${index === 0 ? "" : " || "}_type == "${type}"`
          )
          .join("")}] | order(_createdAt asc)`
      )}`
    );
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    return;
  }
};

const generatePages = async () => {
  const collections = await fetchData();
  const home = collections?.filter(
    (colection) => colection._type === "home"
  )[0];
  const brand = collections?.filter(
    (colection) => colection._type === "brand"
  )[0];
  const about = collections?.filter(
    (colection) => colection._type === "about"
  )[0];
  const productions = collections?.filter(
    (colection) => colection._type === "productions"
  )[0];
  const lessons = collections?.filter(
    (colection) => colection._type === "lessons"
  )[0];
  const club = collections?.filter(
    (colection) => colection._type === "club"
  )[0];
  const agenda = collections?.filter(
    (collection) => collection._type === "agenda"
  )[0];
  generateIndex(brand, home);
  generateAbout(brand, about);
  generateProductions(brand, productions);
  generateProductionDetails(brand, productions);
  generateLessons(brand, lessons);
  generateLessonDetails(brand, lessons);
  generateClub(brand, club);
  generateAgenda(brand, agenda);
};
generatePages();
