import { makeImgUrl } from "../generate.js";
import { navbar, footer } from "./components.js";
import fs from "fs";
const relativePaths = {
  styles: "../styles",
  lib: "../lib",
  media: "../media",
  manifest: "../manifest.json",
};

const generateClub = (brand, club) => {
  const heroImg = makeImgUrl(club?.background?.asset?._ref, true);
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
            background-position-y: -200px;
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
          <h2>Club CTBAy</h2>
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
          .description {
            text-align: left;
            font-size: var(--medium);
            font-weight: 600;
            text-align: justify;
            width: 90%;
            max-width: 40rem;
            white-space: pre-line;
          }
            .button{
                padding: 1rem 2rem;
                background-color: var(--background-tertiary);
                border-radius: 1rem;
                font-size: var(--medium);
                margin-inline: auto;
                align-items: center;
                gap: 1rem;
            }

            .button svg{
                width: 2rem;
                height: auto;
            }
        </style>
        <div class="details">
            <div class="section">
                <p class="description">${club.description}</p>
                <a href="https://wa.me/${brand.whatsapp.replace(
                  /\s+/g,
                  ""
                )}" target="_blank" rel="noreferrer noopener" class="button">¡Unite a Club CTBAy! <svg width="51" height="49" viewBox="0 0 51 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.25012 24.4999C6.25012 13.5463 15.1298 4.66666 26.0834 4.66666C37.0369 4.66666 45.9167 13.5463 45.9167 24.4999C45.9167 35.4535 37.0369 44.3332 26.0834 44.3332C22.1816 44.3332 18.5497 43.209 15.4853 41.2675C14.9151 40.9063 14.2162 40.8097 13.5693 41.0026L6.85135 43.0077L9.38077 37.089C9.67974 36.3894 9.61891 35.5882 9.21776 34.9418C7.3367 31.9106 6.25012 28.3357 6.25012 24.4999ZM26.0834 0C12.5525 0 1.58346 10.969 1.58346 24.4999C1.58346 28.7888 2.68745 32.826 4.62759 36.3362L0.604514 45.7496C0.248864 46.5819 0.406508 47.5446 1.009 48.2199C1.61149 48.8954 2.55016 49.1614 3.41739 48.9024L13.916 45.7694C17.5024 47.8251 21.6587 48.9999 26.0834 48.9999C39.6143 48.9999 50.5833 38.0309 50.5833 24.4999C50.5833 10.969 39.6143 0 26.0834 0ZM31.4325 29.5922L28.3661 31.7522C26.9299 30.9341 25.3421 29.7922 23.7493 28.1994C22.0936 26.5437 20.8661 24.8343 19.961 23.2663L21.9097 21.6122C22.746 20.9024 22.9749 19.7057 22.4597 18.7373L19.9767 14.0706C19.6423 13.4422 19.0394 13.0008 18.3394 12.8719C17.6394 12.743 16.9188 12.9406 16.3825 13.4087L15.6463 14.0512C13.8759 15.5963 12.8289 18.1353 13.6967 20.7062C14.5963 23.3713 16.5163 27.5659 20.4496 31.4992C24.6813 35.731 28.9797 37.3974 31.4934 38.0447C33.5187 38.5659 35.4353 37.8671 36.7859 36.7667L38.166 35.6421C38.7564 35.1612 39.0749 34.4222 39.0193 33.6627C38.9636 32.9032 38.5408 32.2186 37.8865 31.8287L33.9705 29.4954C33.1795 29.0243 32.1855 29.0621 31.4325 29.5922Z" fill="currentColor"/>
</svg></a>
            </div>
        </div>
        ${footer(relativePaths, brand)}
      </main>
      <script src="${relativePaths.lib}/swup.js"></script>
      <script src="${relativePaths.lib}/swupConfig.js"></script>
    </body>
  </html>
  `;
  fs.mkdirSync("./generated/club-ctbay", { recursive: true });
  fs.writeFileSync(`./generated/club-ctbay/index.html`, htmlContent);
};
export default generateClub;
