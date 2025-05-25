import { makeImgUrl, paths } from "../generate.js";
import { navbar, footer } from "./components.js";
import fs from "fs";

const generateAgenda = (brand, agenda) => {
  const heroImg = makeImgUrl(agenda?.background?.asset?._ref, true);
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
        <h2>Agenda</h2>
      </div>
<style>
  #calendar {
    padding: 2rem 1rem;
  }

  dialog::backdrop {
    background: rgba(0, 0, 0, 0.7);
  }

  dialog {
    border: none;
    border-radius: 1rem;
    padding: 0;
    max-width: 500px;
    width: 80%;
    font-size: var(--large);
    color: var(--font);
    background: var(--background);
  }

  .modal-container {
    padding: 20px;
    position: relative;
  }

  .modal-container button {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background: none;
    cursor: pointer;
    color: var(--font);
    font-size: var(--xlarge);
  }

  .modal-container img {
    width: 100%;
    max-width: 10rem;
    height: auto;
  }
  
  .modal-content{
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .fc-theme-standard .fc-list-day-cushion {
    background-color: black;
  }
</style>

      <dialog id="modal-event">
        <div class="modal-container">
        <button onclick="document.getElementById('modal-event').close()">&times;</button>
        <div id="modal-content"></div>
        </div>
      </dialog>
      <div id="calendar"></div>
      <script src="/lib/fullcalendar/dist/index.global.min.js"></script>
      <script src="/lib/fullcalendar/packages/core/locales/es.global.js"></script>
      <script src="/lib/calendarInit.js"></script>
      ${footer(brand)}
    </main>
    <script src="${paths.files.lib}/swup.js"></script>
    <script src="${paths.files.lib}/swupConfig.js"></script>
  </body>
</html>
`;
  fs.mkdirSync("./generated/agenda", { recursive: true });
  fs.writeFileSync(`./generated/agenda/index.html`, htmlContent);
};

export default generateAgenda;
