/* Renders the publications section as a collapsible accordion (one topic
   open at a time), plus the "Research Areas" nav chips that jump to and
   open a topic. Your name (anything containing "Luo") is auto-bolded. */

(function () {
  document.getElementById("year").textContent = new Date().getFullYear();

  const LINK_LABELS = { pdf: "PDF", code: "Code", project: "Project", dataset: "Dataset", video: "Video" };
  const LINK_ORDER = ["pdf", "code", "project", "dataset", "video"];

  const authorsHTML = (authors) =>
    authors.map((a) => (/luo/i.test(a) ? `<span class="me">${a}</span>` : a)).join(", ");

  function linksHTML(links) {
    if (!links) return "";
    const btns = LINK_ORDER.filter((k) => links[k])
      .map((k) => `<a class="btn" href="${links[k]}" target="_blank" rel="noopener">${LINK_LABELS[k]}</a>`)
      .join("");
    return btns ? `<div class="btns">${btns}</div>` : "";
  }

  const thumbHTML = (p) =>
    p.img
      ? `<img class="pub-thumb" src="assets/pubs/${p.img}" alt="${p.title}" loading="lazy" />`
      : `<div class="pub-thumb placeholder">paper</div>`;

  function pubHTML(p) {
    const oral = p.oral ? `<span class="badge">Oral</span>` : "";
    const titleInner = p.links && p.links.pdf
      ? `<a href="${p.links.pdf}" target="_blank" rel="noopener">${p.title}</a>`
      : p.title;
    return `
      <article class="pub">
        ${thumbHTML(p)}
        <div>
          <h3 class="pub-title">${titleInner}</h3>
          <p class="pub-venue"><em>${p.venue}</em>${oral}</p>
          <p class="pub-authors">${authorsHTML(p.authors)}</p>
          ${linksHTML(p.links)}
        </div>
      </article>`;
  }

  // Build one accordion block per non-empty topic, keeping TOPICS order.
  const container = document.getElementById("pub-list");
  const navEl = document.getElementById("research-areas");
  let listHTML = "";
  let navHTML = "";
  let firstKey = null;

  TOPICS.forEach((topic) => {
    const items = PUBLICATIONS.filter((p) => p.topic === topic.key).sort((a, b) => b.year - a.year);
    if (!items.length) return;
    if (!firstKey) firstKey = topic.key;

    navHTML += `<li><a class="chip-nav" href="#topic-${topic.key}" data-topic="${topic.key}">${topic.short || topic.label}</a></li>`;

    listHTML += `
      <section class="pub-topic" id="topic-${topic.key}">
        <button class="topic-toggle" type="button" aria-expanded="false" aria-controls="body-${topic.key}">
          <span class="topic-head">${topic.label}</span>
          <span class="topic-count">${items.length}</span>
          <span class="chev" aria-hidden="true">&rsaquo;</span>
        </button>
        <div class="topic-body" id="body-${topic.key}">
          <div class="topic-inner">${items.map(pubHTML).join("")}</div>
        </div>
      </section>`;
  });

  container.innerHTML = listHTML;
  navEl.innerHTML = navHTML;

  // ---------- interaction ----------
  const toggles = Array.from(container.querySelectorAll(".topic-toggle"));

  function setOpen(key, open) {
    const section = document.getElementById("topic-" + key);
    if (!section) return;
    const btn = section.querySelector(".topic-toggle");
    const body = section.querySelector(".topic-body");
    btn.setAttribute("aria-expanded", String(open));
    body.classList.toggle("open", open);
    section.classList.toggle("is-open", open);
  }

  // Accordion: opening one closes the others.
  function openOnly(key) {
    TOPICS.forEach((t) => setOpen(t.key, t.key === key));
  }

  toggles.forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.closest(".pub-topic").id.replace("topic-", "");
      const isOpen = btn.getAttribute("aria-expanded") === "true";
      if (isOpen) setOpen(key, false);
      else openOnly(key);
    });
  });

  // Research-area chips: open the topic and scroll it into view.
  function goToTopic(key) {
    openOnly(key);
    const section = document.getElementById("topic-" + key);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  navEl.querySelectorAll(".chip-nav").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      goToTopic(a.dataset.topic);
      history.replaceState(null, "", "#topic-" + a.dataset.topic);
    });
  });

  // Open the topic named in the URL hash, else the first topic by default.
  const hashKey = (location.hash.match(/^#topic-(.+)$/) || [])[1];
  if (hashKey && document.getElementById("topic-" + hashKey)) {
    goToTopic(hashKey);
  } else {
    setOpen(firstKey, true);
  }
})();
