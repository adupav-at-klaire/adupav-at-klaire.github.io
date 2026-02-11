(function () {
  const m = location.pathname.match(/\/([a-z0-9-]+)-(\d{4}-\d{2}-\d{2})\.html$/i);
  const slug = (m?.[1] || "offre").replace(/^./, c => c.toUpperCase());
  const date = m?.[2];
  const open = date && new Date() <= new Date(date + "T23:59:59");

  const banner = document.getElementById("deadline-banner");
  if (!banner) return;

  const title = t => { const el = document.getElementById("page-title"); if (el) el.textContent = t; document.title = t; };

  if (!date) {
    banner.textContent = "Offre en ligne";
    title(`${slug} @ Klaire`);
  } else if (open) {
    banner.textContent = `Candidatures ouvertes jusqu'au ${date}`;
    title(`${slug} @ Klaire — jusqu'au ${date}`);
  } else {
    banner.style.color = "orange";
    banner.innerHTML = `⚠️ Offre fermée (deadline: ${date}). Envoie un email avec ton profil → <a href="mailto:alain.du-pavillon@klaire.cc">alain.du-pavillon@klaire.cc</a>`;
    title(`${slug} @ Klaire — fermée`);
  }
})();
