import { makeImgUrl, paths } from "../generate.js";
import { navbar, footer } from "./components.js";
import fs from "fs";

const generateLessons = (brand, lessons) => {
  const heroImg = makeImgUrl(lessons?.background?.asset?._ref, true);
  const logo = makeImgUrl(brand?.image?.asset?._ref, true);

  const HTMLContent = `<!DOCTYPE html>
        <html lang="es">
          <head>
            <meta charset="UTF-8" />
            <title>Compañía Teatral de los Buenos Ayres</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="manifest" href="${paths.files.manifest}" />
            <link rel="apple-touch-icon" href="${logo}" />
            <link rel="icon" href="${logo}" />
            <link rel="icon" type="image/x-icon" href="${logo}" />
            <meta
              name="description"
              content="Viví la magia de CTBAy: un espacio donde el arte cobra vida, con obras impactantes, talentos inolvidables y una programación que te va a emocionar."
            />
            <link rel="canonical" href="https://ctbay.ar/" />
            <!-- Open Graph / Facebook -->
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://ctbay.ar/" />
            <meta property="og:title" content="Compañía Teatral de los Buenos Ayres" />
            <meta
              property="og:description"
              content="Viví la magia de CTBAy: un espacio donde el arte cobra vida, con obras impactantes, talentos inolvidables y una programación que te va a emocionar."
            />
            <meta property="og:image" content="${logo}" />
            <!-- Twitter -->
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content="https://ctbay.ar/" />
            <meta name="twitter:title" content="Compañía Teatral de los Buenos Ayres" />
            <meta
              name="twitter:description"
              content="Viví la magia de CTBAy: un espacio donde el arte cobra vida, con obras impactantes, talentos inolvidables y una programación que te va a emocionar."
            />
            <meta name="twitter:image" content="${logo}" />
            <!-- styles -->
            <link rel="stylesheet" href="${paths.files.styles}/root.css" />
          </head>
          <body>
            ${navbar(brand)}
            <main id="swup" class="transition-main">
              <style>
                .hero {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background-position-y: -150px;
                  background-size: cover;
                  height: 18rem;
                  font-size: var(--large);
                  text-shadow: var(--shadow);
                }
                /* responsive */
                @media only screen and (max-width: 800px) {
                  .hero {
                    height: 13rem;
                    padding-bottom: 5rem;
                    align-items: flex-end;
                    background-position-y: center;
                  }
                  .heroTitle {
                    font-size: var(--large);
                  }
                }
              </style>
              <div class="hero" style="background-image: url(${heroImg})">
                <h2>Cursos y Talleres</h2>
              </div>
             <style>
        .cards {
          display: flex;
          flex-wrap: wrap;
          align-content: center;
          justify-content: space-evenly;
          padding: 4rem 4rem;
          gap: 4rem;
          width: calc(100% - 8rem);
        }
        .card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          background-color: var(--background-tertiary);
          width: 100%;
          max-width: 20rem;
          gap: 2rem;
          border-radius: 1rem;
          overflow: hidden;
          border: 1rem solid var(--background-tertiary);
        }
        .image {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          aspect-ratio: 2/1;
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
        }
        .content {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          height: 10rem;
          padding-top: 2rem;
          width: 90%;
        }
        .title {
          font-size: var(--large);
          text-align: center;
        }
        .seeMore {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          gap: 0.5rem;
          font-size: var(--small);
          font-weight: 600;
          background-color: var(--background);
          border-radius: 0.5rem;
          padding: 0.4rem 0;
          border: none;
        }
        .icon {
          height: 2rem;
          width: 2rem;
          transform: rotate(90deg);
        }
      </style>
      <div class="cards">
      ${lessons.list.map(
        (lesson) => `<div class="card">
          <div
            class="image"
            style="
              background-image: url(${makeImgUrl(lesson.portrait.asset._ref)});
            "
          ></div>
          <div class="content">
            <h3 class="title">${lesson.title}</h3>
            <a
              class="seeMore"
              href="/cursos-talleres/${lesson.title
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/,/g, "")}"
            >
              Ver más
              <?xml version="1.0" encoding="utf-8"?>
              <svg
                class="icon"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Arrow / Arrow_Up_SM">
                  <path
                    id="Vector"
                    d="M12 17V7M12 7L8 11M12 7L16 11"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </a>
          </div>
          </div>
        </div>`
      )}
              ${footer(brand)}
            </main>
            <script src="${paths.files.lib}/swup.js"></script>
            <script src="${paths.files.lib}/swupConfig.js"></script>
          </body>
        </html>
    `;
  fs.mkdirSync("./generated/cursos-talleres", { recursive: true });
  fs.writeFileSync(`./generated/cursos-talleres/index.html`, HTMLContent);
};
export default generateLessons;
