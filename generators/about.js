import { makeImgUrl } from "../generate.js";
import { navbar, footer } from "./components.js";
import fs from "fs";
const relativePaths = {
  styles: "../styles",
  lib: "../lib",
  media: "../media",
  manifest: "../manifest.json",
};

const generateAbout = (brand, about) => {
  const heroImg = makeImgUrl(about?.background?.asset?._ref, true);
  const logo = makeImgUrl(brand?.image?.asset?._ref, true);

  const htmlContent = `<!DOCTYPE html>
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
          background-position: center;
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
            background-position: center;
          }
          .heroTitle {
            font-size: var(--large);
          }
        }
      </style>
      <div class="hero" style="background-image: url(${heroImg})">
        <h2>Quiénes somos</h2>
      </div>
      <style>
        .section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
          padding: 2.5rem 0;
          gap: 2.5rem;
        }
        .titleContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 100%;
          max-width: 80rem;
          background-color: var(--background-tertiary);
          gap: 1rem;
          padding: 1rem 0;
        }
        .title {
          font-size: var(--large);
        }
        .section .description {
          text-align: left;
          font-size: var(--medium);
          font-weight: 600;
          text-align: justify;
          width: 90%;
          max-width: 40rem;
          white-space: pre-line;
        }
        .photo {
          width: 100%;
          max-width: 15rem;
          height: auto;
          border-radius: 1rem;
        }
      </style>
      <div class="aboutDetails">
      ${about.sections
        .map(
          (section) =>
            `<div class="section">
        <div class="titleContainer">
          <h3 class="title">${section.title}</h3>
          <img class="${
            section.title == "Sobre Marcelo Marchese" ? "photo" : "logo"
          }" src="${makeImgUrl(section.image.asset._ref, true)}" alt="${
              section.title
            }" />
        </div>
        <p class="description">${section.description}</p>
      </div>`
        )
        .join("")}
        </div>
      </div>
      ${footer(relativePaths, brand)}
    </main>
    <script src="${relativePaths.lib}/swup.js"></script>
    <script src="${relativePaths.lib}/swupConfig.js"></script>
  </body>
</html>
`;
  fs.writeFileSync(`./generated/quienes-somos/index.html`, htmlContent);
};

export default generateAbout;
