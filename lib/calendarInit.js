function showModal(html) {
  const modal = document.getElementById("modal-event");
  document.getElementById("modal-content").innerHTML = html;
  modal.showModal();
}

document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: window.innerWidth < 768 ? "listMonth" : "dayGridMonth",
    locale: "es",
    events: JSON.stringify(events),
    eventClick: function (info) {
      const props = info.event.extendedProps;

      const content = `
          <h3>\${info.event.title}</h3>
          \${props?.image ? \`<img src="\${props.image}" alt="\${info.event.title}" style="max-width: 100%; height: auto;" />\` : ""}
          \${props?.description ? \`<p>\${props.description}</p>\` : ""}
          \${props?.location ? \`<p><strong>Ubicación:</strong> \${props.location}</p>\` : ""}
          \${props?.price ? \`<p><strong>Precio de entrada:</strong> $\${props.price}</p>\` : ""}
          \${info.event.start ? \`<p><strong>Inicio:</strong> \${info.event.start.toLocaleString()}</p>\` : ""}
          \${info.event.end ? \`<p><strong>Fin:</strong> \${info.event.end.toLocaleString()}</p>\` : ""}
        `;

      showModal(content);
    },
  });

  calendar.render();
});
