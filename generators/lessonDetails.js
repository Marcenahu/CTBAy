import { makeImgUrl } from "../generate.js";
import { navbar, footer } from "./components.js";
import fs from "fs";
const relativePaths = {
  styles: "../../styles",
  lib: "../../lib",
  media: "../../media",
  manifest: "../../manifest.json",
};

const generateLessonDetails = (brand, lessons) => {
  const heroImg = makeImgUrl(lessons?.background?.asset?._ref, true);
  const logo = makeImgUrl(brand?.image?.asset?._ref, true);

  lessons.list.forEach((lesson) => {
    const lessonPath = `./generated/cursos-talleres/${lesson.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/,/g, "")}`;
    fs.mkdirSync(lessonPath, { recursive: true });
    fs.writeFileSync(
      `${lessonPath}/index.html`,
      `<!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <title>Compañía Teatral de los Buenos Ayres</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="${relativePaths.manifest}" />
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
        <meta property="og:image" content="${makeImgUrl(
          lesson.portrait.asset._ref
        )}" />
        <!-- Twitter -->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://ctbay.ar/" />
        <meta name="twitter:title" content="Compañía Teatral de los Buenos Ayres" />
        <meta
          name="twitter:description"
          content="Viví la magia de CTBAy: un espacio donde el arte cobra vida, con obras impactantes, talentos inolvidables y una programación que te va a emocionar."
        />
        <meta name="twitter:image" content="${makeImgUrl(
          lesson.portrait.asset._ref
        )}" />
        <!-- styles -->
        <link rel="stylesheet" href="${relativePaths.styles}/root.css" />
      </head>
      <body>
        ${navbar(relativePaths, brand)}
        <main id="swup" class="transition-main">
          <style>
            .hero {
              display: flex;
              align-items: center;
              justify-content: center;
              background-position-y: -100px;
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
                background-position-y: -100px;
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
            .details {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              align-items: flex-start;
              gap: 4rem;
              width: 100%;
              padding: 4rem 0;
            }
            .card {
              display: flex;
              flex-direction: column;
              gap: 1rem;
              background-color: var(--background-tertiary);
              width: 100%;
              max-width: 18rem;
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
            .textContainer {
              display: flex;
              flex-direction: column;
              text-align: left;
              width: 90%;
              max-width: 40rem;
              gap: 1rem;
            }
            .header {
              font-size: var(--xlarge);
            }
            .subheader {
              font-size: var(--large);
            }
            .synopsis {
              font-size: var(--medium);
              text-align: justify;
              white-space: pre-line;
            }
            /* responsive */
            @media only screen and (max-width: 800px) {
              .header {
                font-size: var(--large);
              }
            }
          </style>
          <div class="details">
   <div class="card">
   <h3 class="title">${lesson.title}</h3>
          <div
            class="image"
            style="
              background-image: url(${makeImgUrl(lesson.portrait.asset._ref)});
            "
          ></div>
        </div>
            <article class="textContainer">
              <h2 class="header">${lesson.title}</h2>
              <p class="subheader">Sinposis oficial</p>
              <p class="synopsis">${lesson.description}</p>
            </article>
          </div>
          ${footer(relativePaths, brand)}
        </main>
        <script src="${relativePaths.lib}/swup.js"></script>
        <script src="${relativePaths.lib}/swupConfig.js"></script>
      </body>
    </html>
    `
    );
  });
};
export default generateLessonDetails;
