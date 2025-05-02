import { makeImgUrl } from "../generate.js";
const absolutePaths = {
  home: `/`,
  about: `/quienes-somos`,
  ownProductions: `/producciones/propias`,
  coProductions: `/producciones/co-producciones`,
};
export const navbar = (relativePaths, data) => `
    <link rel="stylesheet" href="${relativePaths.styles}/navbar.css" />
    <script defer src="${relativePaths.lib}/navMobile.js"></script>
    <nav class="navbar" id="navbar">
        <a href="${absolutePaths.home}" class="item">Inicio</a>
        <a href="${absolutePaths.about}" class="item">Quiénes somos</a>
        <details class="item">
          <summary>Producciones
            <?xml version="1.0" encoding="utf-8"?>
            <svg class="arrow" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="currentColor"/>
            </svg>
          </summary>
          <div>
            <a href="${absolutePaths.ownProductions}">Propias</a>
            <a href="${absolutePaths.coProductions}">Co producciones</a>
          </div>
        </details>
        <details class="item" style="display:none">
          <summary>Más
            <?xml version="1.0" encoding="utf-8"?>
            <svg class="arrow" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="currentColor"/>
            </svg>
          </summary>
          <div>
            <a href="/" class="item">Cursos y talleres</a>
            <a href="/" >Club CTBAy</a>
            <a href="/" >Teatro para Empresas</a>
          </div>
        </details> 
    </nav>
    <link rel="stylesheet" href="${relativePaths.styles}/branding.css" />
    <div class="branding">
        <img
          class="logo"
          src="${makeImgUrl(data?.image?.asset?._ref, true)}"
          alt="Compañía Teatral de los Buenos Ayres"
        />
        <div class="banners">
                   
          <a class="email" href="mailto:${
            data.email
          }" target="_blank" rel="noreferrer noopener">
            Querés pertenecer a CTBAy??. Escribinos.
<img src="${relativePaths.media}/email.svg" alt="" />
          </a>
          <div class="social">
            <a href="https://wa.me/${data.whatsapp.replace(
              /\s+/g,
              ""
            )}" target="_blank" rel="noreferrer noopener"><img src="${
  relativePaths.media
}/whatsapp.svg" alt="" /></a>
            <a href="https://www.instagram.com/${
              data.instagram
            }/" target="_blank" rel="noreferrer noopener"><img src="${
  relativePaths.media
}/instagram.svg" alt="" /></a>
            <a href="https://www.facebook.com/${
              data.facebook
            }" target="_blank" rel="noreferrer noopener"><img src="${
  relativePaths.media
}/facebook.svg" alt="" /></a>
            <a href="https://www.youtube.com/${
              data.youtube
            }/videos" target="_blank" rel="noreferrer noopener"><img src="${
  relativePaths.media
}/youtube.svg" alt="" /></a>
          </div>
        </div>
    </div>
    <nav class="navMobile">
        <div class="menu" id="menu">
          <a href="${absolutePaths.home}" class="item">Inicio</a>
        <a href="${absolutePaths.about}" class="item">Quiénes somos</a>
        <details class="item">
          <summary>Producciones
            <?xml version="1.0" encoding="utf-8"?>
            <svg class="arrow" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="currentColor"/>
            </svg>
          </summary>
          <div>
            <a href="${absolutePaths.ownProductions}">Propias</a>
            <a href="${absolutePaths.coProductions}">Co producciones</a>
          </div>
        </details>
        
       <details class="item" style="display:none">
          <summary>Más
            <?xml version="1.0" encoding="utf-8"?>
            <svg class="arrow" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="currentColor"/>
            </svg>
          </summary>
          <div>
            <a href="/" class="item">Cursos y talleres</a>
            <a href="/" >Club CTBAy</a>
            <a href="/" >Teatro para Empresas</a>
          </div>
        </details> 
        </div>
        <button class="hamburger" id="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>
    </nav>
    <script defer src="${relativePaths.lib}/githubNavPatch,js"></script>
      `;

export const footer = (relativePaths, data) => `
    <link rel="stylesheet" href="${relativePaths.styles}/footer.css" />
    <footer>
    <div class="list">
    <img
    class="logo"
    src="${makeImgUrl(data?.image?.asset?._ref, true)}"
    alt="Compañía Teatral de los Buenos Ayres"
    />
    </div>
    <div class="list">
            <p>Compañia teatral de los Buenos Ayres</p>
            <p>${data.location}</p>
            <p>Whatsapp: <a href="https://wa.me/${data.whatsapp.replace(
              /\s+/g,
              ""
            )}" target="_blank" rel="noreferrer noopener">${
  data.whatsapp
}</a></p>
            <p>Email: <a href="mailto:${
              data.email
            }" target="_blank" rel="noreferrer noopener">${data.email}</a></p>
            <p>Sitio web creado por: <a href="https://wdiseñoweb.com" rel="noopener noreferrer" target="_blank">W Diseño Web</a></p>
        </div>
      </footer>`;
