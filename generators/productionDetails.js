import { makeImgUrl, paths } from "../generate.js";
import { navbar, footer } from "./components.js";
import fs from "fs";

const generateProductionDetails = (brand, productions) => {
  const heroImg = makeImgUrl(productions?.background?.asset?._ref, true);
  const logo = makeImgUrl(brand?.image?.asset?._ref, true);

  productions.productions.forEach((production) => {
    const productionPath = `./generated/producciones/${
      production.type === "own" ? "propias" : "co-producciones"
    }/${production.title.toLowerCase().replace(/\s+/g, "-").replace(/,/g, "")}`;
    fs.mkdirSync(productionPath, { recursive: true });
    fs.writeFileSync(
      `${productionPath}/index.html`,
      `<!DOCTYPE html>
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
        <meta property="og:image" content="${makeImgUrl(
          production.portrait.asset._ref
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
          production.portrait.asset._ref
        )}" />
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
            <h2>${
              production.type === "own"
                ? "Producciones propias"
                : "Co producciones"
            }</h2>
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
              aspect-ratio: 1/1;
              background-position: center;
              background-size: contain;
              background-repeat: no-repeat;
            }
            .share {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 0.5rem;
              font-size: var(--medium);
              font-weight: 700;
              background-color: var(--background);
              border-radius: 0.5rem;
              width: 100%;
              padding: 1rem 0;
              color: var(--font);
              border: none;
              cursor: pointer;
            }
            .icon {
              height: 1.5rem;
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
              <div
                class="image"
                style="
                  background-image: url(${makeImgUrl(
                    production.portrait.asset._ref
                  )});
                "
              ></div>
              <button class="share" onclick="
                  if (navigator.share) {
                    navigator
                    .share({
                      url: window.location.href,
                    })
                    .catch(console.error);
                  }
                ">
                Compartir
                <svg
                  class="icon"
                  width="36"
                  height="40"
                  viewBox="0 0 36 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28 15C32.1423 15 35.5 11.6421 35.5 7.5C35.5 3.35788 32.1423 0 28 0C23.8579 0 20.5 3.35788 20.5 7.5C20.5 8.05927 20.5612 8.60423 20.6773 9.12857L12.6715 14.1322C11.39 13.1106 9.7663 12.5 8 12.5C3.85788 12.5 0.5 15.8579 0.5 20C0.5 24.1421 3.85788 27.5 8 27.5C9.7663 27.5 11.39 26.8895 12.6715 25.8678L20.6773 30.8715C20.5612 31.3958 20.5 31.9408 20.5 32.5C20.5 36.6423 23.8579 40 28 40C32.1423 40 35.5 36.6423 35.5 32.5C35.5 28.3577 32.1423 25 28 25C26.2337 25 24.61 25.6105 23.3285 26.6322L15.3227 21.6286C15.4388 21.1042 15.5 20.5593 15.5 20C15.5 19.4407 15.4388 18.8958 15.3227 18.3714L23.3285 13.3678C24.61 14.3894 26.2337 15 28 15Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <article class="textContainer">
              <h2 class="header">${production.title}</h2>
              <p class="subheader">Sinposis oficial</p>
              <p class="synopsis">${production.synopsis}</p>
            </article>
          </div>
          ${footer(brand)}
        </main>
        <script src="${paths.files.lib}/swup.js"></script>
        <script src="${paths.files.lib}/swupConfig.js"></script>
      </body>
    </html>
    `
    );
  });
};
export default generateProductionDetails;
