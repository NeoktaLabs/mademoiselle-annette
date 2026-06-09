const SITE_ORIGIN = "https://mademoiselleannette.com";

const pages = {
  "/": renderPage({
    lang: "fr-FR",
    title: "Mademoiselle Annette Geneve - Personnel de Maison, Courtage immobilier",
    description:
      "Mademoiselle Annette, société basée à Genève, est active dans le placement de personnel de maison, courtage immobilier et organisation de maison privée.",
    path: "/",
    tagline: "Conseils et Solutions",
    subtagline: "Personnel de Maison / Organisation de maison privée / Courtage immobilier",
    body: `
      <div class="intro-card">
        <p>Après une vingtaine d’années passées au service de maisons prestigieuses et de particuliers exigeants, Annette Josserand, riche de son expérience et d’un réseau de professionnels de haut-niveau vous propose une collection de services, de recommandations avisées, un engagement à trouver des réponses et sa participation active à leur mise en place.</p>
        <p>Le professionnalisme de Mademoiselle Annette vous permet de bénéficier de l’activation d’un réseau privilégié à travers le monde et de la réalisation de solutions concrètes.</p>
      </div>
      ${contactBlock()}
    `
  }),
  "/uk": renderPage({
    lang: "en",
    title: "Mademoiselle Annette",
    description:
      "Domestic Staff, Private Household Management and Real Estate Brokerage by Mademoiselle Annette.",
    path: "/uk",
    tagline: "Consulting and Solutions",
    subtagline: "Domestic Staff / Private Household Management / Real Estate Brokerage",
    body: `
      <div class="intro-card">
        <p>Operating at the highest level for more than twenty years in the service of prestigious private households and demanding individuals, Annette Josserand combines rich experience with an exceptional professional network.</p>
        <p>Mademoiselle Annette thrives on providing a wide range of services, recommendations and full service solutions in those most sensitive areas of residence and the home. Mademoiselle Annette’s professionalism provides access to a privileged worldwide network and the peace of mind through thoroughly executed solutions.</p>
      </div>
      ${contactBlock()}
    `
  }),
  "/mentions-legales": renderPage({
    lang: "fr-FR",
    title: "Mentions Légales | Mademoiselle Annette",
    description: "Mentions légales de Mademoiselle Annette.",
    path: "/mentions-legales",
    tagline: "Conseils et Solutions",
    subtagline: "Personnel de Maison / Organisation de maison privée / Courtage immobilier",
    body: `
      <div class="intro-card legal-card">
        <p><strong>Editeur</strong><br>
        A.JOSSERAND SA<br>
        Siège Social : A. Josserand SA - Rue Jacques Grosselin 8 - 1227 Carouge - Suisse</p>
        <p><strong>Hébergeur</strong><br>
        Infomaniak Network SA - 26, Avenue de la Praille, 1227 Carouge / Geneve, SWITZERLAND</p>
      </div>
    `
  })
};

function contactBlock() {
  return `
    <div class="contact-card" aria-label="Contact">
      <span class="ornament"></span>
      <a href="mailto:annette@mademoiselleannette.com">annette@mademoiselleannette.com</a>
      <span class="ornament"></span>
    </div>
  `;
}

function renderPage({ lang, title, description, path, tagline, subtagline, body }) {
  const canonical = `${SITE_ORIGIN}${path === "/" ? "/" : path}`;
  return `<!doctype html>
<html lang="${lang}" prefix="og: http://ogp.me/ns#">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="${canonical}">
  <meta property="og:locale" content="${lang === "fr-FR" ? "fr_FR" : "en_GB"}">
  <meta property="og:type" content="${path === "/mentions-legales" ? "article" : "website"}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:site_name" content="Mademoiselle Annette">
  <meta property="og:image" content="${SITE_ORIGIN}/wp-content/uploads/2014/01/hr.png">
  <link rel="stylesheet" href="/style.css">
</head>
<body class="custom-background full-width custom-font-enabled single-author">
  <div id="page">
    <div id="header_ma">
      <div id="flags">
        <a href="/" aria-label="Version française"><span id="flag_fr"></span></a>
        <a href="/uk" aria-label="English version"><span id="flag_uk"></span></a>
      </div>
      <a class="brand-link" href="${path === "/uk" ? "/uk" : "/"}" aria-label="Mademoiselle Annette"><div id="header_title"></div></a>
      <div id="header_description">
        <span class="WhiteChampagne36">${tagline}</span><br>
        <span class="WhiteChampagne20">${subtagline}</span>
      </div>
    </div>
    <div id="content_ma">
      <article>
        <div class="entry-content"><span class="WhiteChampagne18">${body}</span></div>
      </article>
    </div>
    <div id="footer_ma">
      <span class="WhiteArial14">A.JOSSERAND SA -
      <a href="/mentions-legales">Mentions L&eacute;gales</a></span>
    </div>
  </div>
</body>
</html>`;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/$/, "") || "/";

    if (pages[path]) {
      return html(pages[path]);
    }

    return env.ASSETS.fetch(request);
  }
};

function html(body) {
  return new Response(body, {
    headers: { "content-type": "text/html; charset=UTF-8" }
  });
}
