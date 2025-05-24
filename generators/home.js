import { makeImgUrl, paths } from "../generate.js";
import { navbar, footer } from "./components.js";
import fs from "fs";

const generateHome = (brand, home) => {
  const heroImg = makeImgUrl(home?.background?.asset?._ref, true);
  const logo = makeImgUrl(brand?.image?.asset?._ref, true);

  const htmlContent = `<!DOCTYPE html>
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
          justify-content: center;
          padding-top: 5rem;
          height: calc(100vh - 2.5rem - 5rem);
          height: calc(100svh - 2.5rem - 5rem);
          background-size: cover;
          background-position: 0 -100px;
          background-repeat: no-repeat;
        }
        .heroTitle {
          font-size: var(--xlarge);
          font-weight: 800;
          text-shadow: 0 5px 5px black;
        }
        /* responsive */
        @media only screen and (max-width: 1200px) {
          .hero {
            padding: 0 1rem;
            padding-top: 10rem;
            align-items: flex-start;
            height: calc(100vh - 10rem);
            height: calc(100svh - 10rem);
            background-position: center;
          }
          .heroTitle {
            font-size: var(--large);
          }
        }
      </style>
      <div
        class="hero"
        style="background-image: url(${heroImg})"
      >
        <h1 class="heroTitle">
          Bienvenidos a CTBAy<br />Compañía Teatral de los Buenos Ayres<br />Espectáculos,
          talleres y actividades.
        </h1>
      </div>
      ${footer(brand)}
    </main>
    <script src="${paths.files.lib}/swup.js"></script>
    <script src="${paths.files.lib}/swupConfig.js"></script>
  </body>
</html>
`;
  fs.mkdirSync("./generated", { recursive: true });
  fs.writeFileSync(`./generated/index.html`, htmlContent);
};

export default generateHome;
