import { makeImgUrl, paths } from "../generate.js";

export const navbar = (data) => `
    <link rel="stylesheet" href="${paths.files.styles}/navbar.css" />
    <script defer src="${paths.files.lib}/navMobile.js"></script>
    <nav class="navbar" id="navbar">
        <a href="${paths.pages.home}" class="item">Inicio</a>
        <a href="${paths.pages.about}" class="item">Quiénes somos</a>
        <details class="item">
          <summary>Producciones
            <?xml version="1.0" encoding="utf-8"?>
            <svg class="arrow" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="currentColor"/>
            </svg>
          </summary>
          <div>
            <a href="${paths.pages.ownProductions}">Propias</a>
            <a href="${paths.pages.coProductions}">Co producciones</a>
          </div>
        </details>
        <a href="${paths.pages.lessons}" class="item">Cursos y Talleres</a>
        <a href="${paths.pages.club}" class="item moreItem">Club CTBAy</a>
        <a href="${paths.pages.agenda}" class="item moreItem">Agenda</a>
        <a href="${paths.pages.noticias}" class="item moreItem">Noticias</a>
        <a href="${paths.pages.galeria}" class="item moreItem">Galería</a>
        <details class="item moreSubmenu">
          <summary>Más
            <?xml version="1.0" encoding="utf-8"?>
            <svg class="arrow" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="currentColor"/>
            </svg>
          </summary>
          <div>
            <a href="${paths.pages.club}">Club CTBAy</a>
            <a href="${paths.pages.agenda}">Agenda</a>
            <a href="${paths.pages.noticias}">Noticias</a>
            <a href="${paths.pages.galeria}">Galería</a>
          </div>
        </details> 
    </nav>
    <link rel="stylesheet" href="${paths.files.styles}/branding.css" />
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
  paths.files.media
}/whatsapp.svg" alt="" /></a>
            <a href="https://www.instagram.com/${
              data.instagram
            }/" target="_blank" rel="noreferrer noopener"><img src="${
  paths.files.media
}/instagram.svg" alt="" /></a>
            <a href="https://www.facebook.com/${
              data.facebook
            }" target="_blank" rel="noreferrer noopener"><img src="${
  paths.files.media
}/facebook.svg" alt="" /></a>
            <a href="https://www.youtube.com/${
              data.youtube
            }/videos" target="_blank" rel="noreferrer noopener"><img src="${
  paths.files.media
}/youtube.svg" alt="" /></a>
          </div>
          <a class="ticket">
            ¡Conseguí tu ticket!
            <svg width="2rem" height="2rem" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40.4968 11.3263L38.4768 17.2632V17.2421C37.4368 16.8421 36.4168 16.9053 35.4168 17.4105C34.4168 17.9158 33.7168 18.7158 33.3368 19.8105C32.9568 20.9053 33.0168 21.9789 33.4768 23.0316C33.9568 24.0842 34.7168 24.8 35.7768 25.2V25.2211L33.7568 31.1579L3.63683 19.8316L5.61683 13.9579C6.65683 14.3579 7.67683 14.2947 8.67683 13.7895C9.67683 13.3053 10.3568 12.5053 10.7368 11.4105C11.1168 10.3158 11.0568 9.24211 10.5768 8.18947C10.1168 7.15789 9.35683 6.44211 8.31683 6.04211L10.3568 0L40.4968 11.3263ZM30.5568 23.3053L33.2968 15.3895C33.5368 14.7368 33.4968 14.0211 33.2168 13.3895C32.9368 12.7579 32.4368 12.2737 31.8168 12.0211L16.7768 6.27368C15.4968 5.78947 14.0368 6.52632 13.5768 7.83158L10.8368 15.7474C10.3568 17.1158 11.0368 18.6316 12.3168 19.1158L27.3568 24.8842C27.6368 24.9895 27.9168 25.0526 28.2168 25.0526C29.2568 25.0526 30.2168 24.3579 30.5568 23.3053ZM16.4368 7.26316L31.4568 13.0105C31.8368 13.1579 32.1368 13.4526 32.3168 13.8316C32.4768 14.2105 32.4968 14.6316 32.3568 15.0316L29.6168 22.9474C29.3568 23.7474 28.4568 24.1895 27.6968 23.8947L12.6768 18.1263C11.8968 17.8316 11.4968 16.9263 11.7768 16.1053L14.5168 8.18947C14.7168 7.57895 15.2968 7.1579 15.9168 7.1579C16.0968 7.1579 16.2568 7.2 16.4368 7.26316ZM30.0768 32.8211C30.7768 33.3895 31.5768 33.6842 32.4768 33.6842H32.4968V40H0.496826V33.7684C1.59683 33.7684 2.55683 33.3474 3.31683 32.5263C4.09683 31.7263 4.49683 30.7158 4.49683 29.5579C4.49683 28.4 4.09683 27.4105 3.31683 26.5895C2.53683 25.7684 1.59683 25.3474 0.496826 25.3474V18.9474H2.59683L2.03683 20.6316L7.77683 22.7789C6.75683 23.1158 5.99683 24.0842 5.99683 25.2632V33.6842C5.99683 35.1368 7.11683 36.3158 8.49683 36.3158H24.4968C25.8768 36.3158 26.9968 35.1368 26.9968 33.6842V30L28.6568 30.6316C28.8968 31.5368 29.3768 32.2737 30.0768 32.8211ZM6.99683 33.6842V25.2632C6.99683 24.4 7.67683 23.6842 8.49683 23.6842H10.1568L25.9968 29.6421V33.6842C25.9968 34.5474 25.3168 35.2632 24.4968 35.2632H8.49683C7.67683 35.2632 6.99683 34.5474 6.99683 33.6842Z" fill="currentColor"/>
            </svg>
          </a>
        </div>

    </div>
    <nav class="navMobile">
        <div class="menu transition-main" id="menu">
          <a href="${paths.pages.home}" class="item">Inicio</a>
        <a href="${paths.pages.about}" class="item">Quiénes somos</a>
        <details class="item">
        <summary>Producciones
        <?xml version="1.0" encoding="utf-8"?>
        <svg class="arrow" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="currentColor"/>
        </svg>
        </summary>
        <div>
        <a href="${paths.pages.ownProductions}">Propias</a>
        <a href="${paths.pages.coProductions}">Co producciones</a>
        </div>
        </details>
        <a href="${paths.pages.lessons}" class="item">Cursos y Talleres</a>
        <a href="${paths.pages.club}" class="item">Club CTBAy</a>
        <a href="${paths.pages.agenda}" class="item">Agenda</a>
        <a href="${paths.pages.noticias}" class="item">Noticias</a>
        <a href="${paths.pages.galeria}" class="item">Galería</a>
          <a class="ticket">
            ¡Conseguí tu ticket!
            <svg width="2rem" height="2rem" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40.4968 11.3263L38.4768 17.2632V17.2421C37.4368 16.8421 36.4168 16.9053 35.4168 17.4105C34.4168 17.9158 33.7168 18.7158 33.3368 19.8105C32.9568 20.9053 33.0168 21.9789 33.4768 23.0316C33.9568 24.0842 34.7168 24.8 35.7768 25.2V25.2211L33.7568 31.1579L3.63683 19.8316L5.61683 13.9579C6.65683 14.3579 7.67683 14.2947 8.67683 13.7895C9.67683 13.3053 10.3568 12.5053 10.7368 11.4105C11.1168 10.3158 11.0568 9.24211 10.5768 8.18947C10.1168 7.15789 9.35683 6.44211 8.31683 6.04211L10.3568 0L40.4968 11.3263ZM30.5568 23.3053L33.2968 15.3895C33.5368 14.7368 33.4968 14.0211 33.2168 13.3895C32.9368 12.7579 32.4368 12.2737 31.8168 12.0211L16.7768 6.27368C15.4968 5.78947 14.0368 6.52632 13.5768 7.83158L10.8368 15.7474C10.3568 17.1158 11.0368 18.6316 12.3168 19.1158L27.3568 24.8842C27.6368 24.9895 27.9168 25.0526 28.2168 25.0526C29.2568 25.0526 30.2168 24.3579 30.5568 23.3053ZM16.4368 7.26316L31.4568 13.0105C31.8368 13.1579 32.1368 13.4526 32.3168 13.8316C32.4768 14.2105 32.4968 14.6316 32.3568 15.0316L29.6168 22.9474C29.3568 23.7474 28.4568 24.1895 27.6968 23.8947L12.6768 18.1263C11.8968 17.8316 11.4968 16.9263 11.7768 16.1053L14.5168 8.18947C14.7168 7.57895 15.2968 7.1579 15.9168 7.1579C16.0968 7.1579 16.2568 7.2 16.4368 7.26316ZM30.0768 32.8211C30.7768 33.3895 31.5768 33.6842 32.4768 33.6842H32.4968V40H0.496826V33.7684C1.59683 33.7684 2.55683 33.3474 3.31683 32.5263C4.09683 31.7263 4.49683 30.7158 4.49683 29.5579C4.49683 28.4 4.09683 27.4105 3.31683 26.5895C2.53683 25.7684 1.59683 25.3474 0.496826 25.3474V18.9474H2.59683L2.03683 20.6316L7.77683 22.7789C6.75683 23.1158 5.99683 24.0842 5.99683 25.2632V33.6842C5.99683 35.1368 7.11683 36.3158 8.49683 36.3158H24.4968C25.8768 36.3158 26.9968 35.1368 26.9968 33.6842V30L28.6568 30.6316C28.8968 31.5368 29.3768 32.2737 30.0768 32.8211ZM6.99683 33.6842V25.2632C6.99683 24.4 7.67683 23.6842 8.49683 23.6842H10.1568L25.9968 29.6421V33.6842C25.9968 34.5474 25.3168 35.2632 24.4968 35.2632H8.49683C7.67683 35.2632 6.99683 34.5474 6.99683 33.6842Z" fill="currentColor"/>
            </svg>
          </a>
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
  paths.files.media
}/whatsapp.svg" alt="" /></a>
            <a href="https://www.instagram.com/${
              data.instagram
            }/" target="_blank" rel="noreferrer noopener"><img src="${
  paths.files.media
}/instagram.svg" alt="" /></a>
            <a href="https://www.facebook.com/${
              data.facebook
            }" target="_blank" rel="noreferrer noopener"><img src="${
  paths.files.media
}/facebook.svg" alt="" /></a>
            <a href="https://www.youtube.com/${
              data.youtube
            }/videos" target="_blank" rel="noreferrer noopener"><img src="${
  paths.files.media
}/youtube.svg" alt="" /></a>
          </div>
        </div>
        <button class="hamburger" id="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>
    </nav>
      `;

export const footer = (data) => `
    <link rel="stylesheet" href="${paths.files.styles}/footer.css" />
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
