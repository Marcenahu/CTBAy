import { makeImgUrl, paths } from "../generate.js";
import { navbar, footer } from "./components.js";
import fs from "fs";

const generateGallery = (brand, gallery) => {
  const heroImg = makeImgUrl(gallery.background?.asset?._ref, true);
  const logo = makeImgUrl(brand?.image?.asset?._ref, true);
  const innerHTML = `<!DOCTYPE html>
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
        <h2>Galería<h2>
      </div>
      <style>
        .cards {
          display: flex;
          flex-wrap: wrap;
          align-content: center;
          justify-content: space-evenly;
          padding: 1rem;
          gap: 4rem;
          width: calc(100% - 2rem);
          min-height: 15rem;
          }
          .card {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            background-color: var(--background-tertiary);
            width: 100%;
            max-width: 15rem;
            border-radius: 1rem;
            overflow: hidden;
            border: 1rem solid var(--background-tertiary);
            gap: 1rem;
            cursor: pointer;
            height: fit-content;
        }
        .card img {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }
        .title {
          font-size: var(--large);
          text-align: left;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 100%;
        }
        .description{
            text-align: justify;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 100%;
        }
        dialog::backdrop{
          background: rgba(0, 0, 0, 0.7);
        }
        dialog{
          border: none;
          border-radius: 1rem;
          padding: 1rem;
          width: 90%;
          max-width: 50rem;
          background-color: var(--background);
          color: var(--font);
        }
        .btnClose{
          align-self: flex-end;
          background: transparent;
          border: none;
          color: var(--font);
          font-size: var(--medium);
          cursor: pointer;
          padding: 0 0.5rem;
          border-radius: 0.2rem;
          margin-bottom: 0.5rem;
          position: absolute;
          right: 1rem;
        }
        dialog img{
          width: 100%;
          max-width: 15rem;
          margin-bottom: 0.5rem;
        }
        dialog .title{
          margin-bottom: 0.5rem;
        }
        .dialogDescription{
          text-align: justify;
        }
      </style>
      <div class="cards">
      ${
        gallery?.list
          ? gallery?.list
              ?.map(
                (item, index) =>
                  `<div class="card" onclick="document.getElementById('detail${index}').showModal()">
                        <img src="${makeImgUrl(item.image.asset._ref)}"/>
                    </div>
                    <dialog id="detail${index}">
                        <button class="btnClose" onclick="document.getElementById('detail${index}').close()">x</button>
                        <br>
                        <img src="${makeImgUrl(item?.image?.asset?._ref)}"/> 
                        <p class="dialogDescription">
                        ${item?.description}
                        </p>
                    </dialog>
                    `
              )
              .join("")
          : "<p><i>No hay imágenes en galería actualmente</i></p>"
      }
      </div>
      ${footer(brand)}
    </main>
    <script src="${paths.files.lib}/swup.js"></script>
    <script src="${paths.files.lib}/swupConfig.js"></script>
  </body>
</html>
`;
  fs.mkdirSync("./generated/galería", { recursive: true });
  fs.writeFileSync(`./generated/galería/index.html`, innerHTML);
};

export default generateGallery;
