const studioId = "vo1etoba";
const studioDataset = "production";
import generateHome from "./generators/home.js";
import generateAbout from "./generators/about.js";
import generateProductions from "./generators/productions.js";
import generateProductionDetails from "./generators/productionDetails.js";
import generateLessons from "./generators/lessons.js";
import generateLessonDetails from "./generators/lessonDetails.js";
import generateClub from "./generators/club.js";
import generateAgenda from "./generators/agenda.js";
import generateNews from "./generators/news.js";
import generateGallery from "./generators/gallery.js";

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
  "news",
  "gallery",
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

export const paths = {
  files: {
    styles: "/styles",
    lib: "/lib",
    media: "/media",
    manifest: "/manifest.json",
  },
  pages: {
    home: "/",
    about: "/quienes-somos",
    ownProductions: "/producciones/propias",
    coProductions: "/producciones/co-producciones",
    lessons: "/cursos-talleres",
    club: "/club-ctbay",
    agenda: "/agenda",
    noticias: "/noticias",
    galeria: "/gallería",
  },
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
    (colection) => colection._type === "agenda"
  )[0];
  const news = collections?.filter(
    (colection) => colection._type === "news"
  )[0];
  const gallery = collections?.filter(
    (colection) => colection._type === "gallery"
  )[0];
  generateHome(brand, home);
  generateAbout(brand, about);
  generateProductions(brand, productions);
  generateProductionDetails(brand, productions);
  generateLessons(brand, lessons);
  generateLessonDetails(brand, lessons);
  generateClub(brand, club);
  generateAgenda(brand, agenda);
  generateNews(brand, news);
  generateGallery(brand, gallery);
};
generatePages();
