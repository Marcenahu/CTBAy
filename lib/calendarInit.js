function showModal(html) {
  const modal = document.getElementById("modal-event");
  document.getElementById("modal-content").innerHTML = html;
  modal.showModal();
}

function makeImgUrl(ref, maxquality) {
  const studioId = "vo1etoba";
  const studioDataset = "production";
  const parts = ref?.split("-");
  const id = parts[1];
  const dimentions = parts[2];
  const format = parts[3];
  const optimizedSize = maxquality ? "" : "&w=600";
  return `https://cdn.sanity.io/images/${studioId}/${studioDataset}/${id}-${dimentions}.${format}?fm=webp${optimizedSize}`;
}

async function fetchData(type) {
  const studioId = "vo1etoba";
  const studioDataset = "production";
  try {
    const response = await fetch(
      `https://${studioId}.api.sanity.io/v2021-10-21/data/query/${studioDataset}?query=${encodeURIComponent(
        `*[_type == "${type}"] | order(_createdAt asc)`
      )}`
    );
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    return;
  }
}

async function calendarInit() {
  const collections = await fetchData("agenda");
  const agenda = collections?.filter(
    (collection) => collection._type === "agenda"
  )[0];
  const events = agenda.List.map((item) => ({
    ...item,
    image: makeImgUrl(item.image.asset._ref) || "",
  }));
  console.log(events);

  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: window.innerWidth < 768 ? "listMonth" : "dayGridMonth",
    locale: "es",
    events: JSON.stringify(events),
  });

  calendar.render();
}
calendarInit();
