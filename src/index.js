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
      ${partners("fr")}
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
      ${partners("uk")}
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
        <p><strong>Configuration</strong><br>
        Ce site web ne supporte pas les versions antérieures a Internet Explorer 6, Mozilla firefox 5. Nous ne sommes donc pas responsables des problèmes d’affichage qui en découlerai.</p>
        <p>Pour une meilleure compatibilité, nous vous conseillons d’utiliser Internet Explorer 9, Google Chrome v26, Firefox 20 ou plus recent avec un zoom à 100%.</p>
        <p><strong>Editeur</strong><br>
        A.JOSSERAND SA<br>
        Siège Social : A. Josserand SA - Route de Lausanne 351 - 1293 Bellevue - Suisse</p>
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
      <a href="tel:+41798244633">+41 79 824 46 33</a>
      <span class="ornament"></span>
    </div>
  `;
}

function partners(locale) {
  const items = [
    `<a href="http://www.nolicia.com/" target="_blank" rel="noopener"><img title="Nolicia Creations" alt="Nolicia Creations" src="/wp-content/uploads/2014/01/n.png" width="68" height="52"></a>`,
    locale === "uk"
      ? `<a href="http://www.amepm.eu" target="_blank" rel="noopener"><img alt="AMEPM" src="/wp-content/uploads/2014/01/AMEPM.png" width="44" height="62"></a>`
      : "",
    `<a href="http://www.fredericsimonin.com/" target="_blank" rel="noopener"><img title="Frederic Simonin" alt="Frederic Simonin" src="/wp-content/uploads/2014/01/fs.png" width="84" height="60"></a>`,
    `<a href="http://www.mysweetdeco.fr/" target="_blank" rel="noopener"><img title="My Sweet Deco" alt="My Sweet Deco" src="/wp-content/uploads/2014/01/mysweetdeco.png" width="100" height="28"></a>`,
    `<img alt="marbletechnics-80" src="/wp-content/uploads/2014/01/marbletechnics-80.jpg" width="80" height="68">`,
    `<a href="http://www.jacques-clement.com/" target="_blank" rel="noopener"><img alt="Jacques Clement" src="/wp-content/uploads/2014/01/JC.png" width="80" height="53"></a>`
  ].filter(Boolean);

  return `<div id="TablePartenaires" aria-label="Partenaires">${items
    .map((item) => `<div class="partner-logo">${item}</div>`)
    .join("")}</div>`;
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
      <a href="/mentions-legales">Mentions L&eacute;gales</a> - <a href="/sitemap.xml" target="_blank">Sitemap</a></span>
    </div>
  </div>
</body>
</html>`;
}

function sitemapIndex() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${SITE_ORIGIN}/sitemap-misc.xml</loc><lastmod>2014-01-27T20:53:36+00:00</lastmod></sitemap>
  <sitemap><loc>${SITE_ORIGIN}/sitemap-externals.xml</loc><lastmod>2014-01-27T20:53:36+00:00</lastmod></sitemap>
  <sitemap><loc>${SITE_ORIGIN}/sitemap-pt-page-2014-01.xml</loc><lastmod>2014-01-27T20:53:36+00:00</lastmod></sitemap>
</sitemapindex>`;
}

function sitemapUrls(urls) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url><loc>${SITE_ORIGIN}${url.loc}</loc><changefreq>${url.changefreq}</changefreq><priority>${url.priority}</priority></url>`
  )
  .join("\n")}
</urlset>`;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/$/, "") || "/";

    if (path === "/sitemap.xml") {
      return xml(sitemapIndex());
    }

    if (path === "/sitemap-misc.xml") {
      return xml(
        sitemapUrls([
          { loc: "/", changefreq: "daily", priority: "1.0" },
          { loc: "/sitemap.html", changefreq: "monthly", priority: "0.5" }
        ])
      );
    }

    if (path === "/sitemap-externals.xml") {
      return xml(sitemapUrls([{ loc: "/uk/", changefreq: "always", priority: "0.9" }]));
    }

    if (path === "/sitemap-pt-page-2014-01.xml") {
      return xml(sitemapUrls([{ loc: "/mentions-legales", changefreq: "daily", priority: "0.6" }]));
    }

    if (path === "/sitemap.html") {
      return html(pages["/"]);
    }

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

function xml(body) {
  return new Response(body, {
    headers: { "content-type": "application/xml; charset=UTF-8" }
  });
}
