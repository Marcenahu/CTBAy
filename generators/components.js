import { makeImgUrl } from "../generate.js";
const absolutePaths = {
  home: `/`,
  about: `/quienes-somos`,
  ownProductions: `/producciones/propias`,
  coProductions: `/producciones/co-producciones`,
  lessons: `/cursos-talleres`,
  club: `/club-ctbay`,
  agenda: "/agenda",
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
        <a href="${absolutePaths.lessons}" class="item">Cursos y Talleres</a>
        <details class="item">
          <summary>Más
            <?xml version="1.0" encoding="utf-8"?>
            <svg class="arrow" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="currentColor"/>
            </svg>
          </summary>
          <div>
            <a href="${absolutePaths.club}">Club CTBAy</a>
            <a href="${absolutePaths.agenda}">Agenda</a>
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
            <svg width="55" height="40" viewBox="0 0 55 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M47.4409 0H8.11259C3.93809 0 0.553589 3.3845 0.553589 7.559V32.441C0.553589 36.6155 3.93809 40 8.11259 40H47.4409C51.6153 40 54.9999 36.6155 54.9999 32.441V7.559C54.9999 3.3845 51.6153 0 47.4409 0ZM19.4999 26.9887L8.91472 36.0191C8.1681 36.6563 7.04568 36.5678 6.40859 35.8204C5.7714 35.0738 5.85998 33.9513 6.60745 33.3143L17.1926 24.2838C17.9391 23.6466 19.0614 23.7352 19.6986 24.4827C20.3358 25.2292 20.2472 26.3516 19.4999 26.9887ZM27.7768 23.5556C26.361 23.5521 24.9885 23.0816 23.9155 22.1537L23.9164 22.1546L23.913 22.152C23.9138 22.1529 23.9148 22.1529 23.9155 22.1537L7.67436 8.05732C6.93211 7.41311 6.8531 6.29079 7.49635 5.54949C8.14046 4.80723 9.26288 4.72822 10.0041 5.37147L26.2498 19.4714C26.597 19.7804 27.1691 20.0035 27.7768 20C28.3835 20.0018 28.946 19.7848 29.3123 19.4653L29.3202 19.4584L45.5494 5.37158C46.2907 4.72833 47.4131 4.80734 48.0572 5.54959C48.7003 6.29079 48.6214 7.41321 47.8792 8.05742L31.6335 22.1581C30.5641 23.0763 29.1934 23.5538 27.7768 23.5556ZM49.1457 35.8204C48.5085 36.5678 47.3861 36.6563 46.6397 36.0191L36.0545 26.9887C35.3072 26.3515 35.2186 25.2292 35.8558 24.4827C36.4929 23.7352 37.6153 23.6467 38.3618 24.2838L48.9469 33.3143C49.6943 33.9513 49.7829 35.0738 49.1457 35.8204Z" fill="currentColor"/>
            </svg>
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
        <div class="menu transition-main" id="menu">
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
        <a href="${absolutePaths.lessons}" class="item">Cursos y Talleres</a>
        <a href="${absolutePaths.club}" class="item">Club CTBAy</a>
        <a href="${absolutePaths.agenda}" class="item">Agenda</a>
        </div>
        <button class="hamburger" id="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>
    </nav>
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
      </footer>
      `;
