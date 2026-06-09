const SITE_ORIGIN = "https://mademoiselleannette.com";

const pages = {
  "/": renderPage({
    lang: "fr-FR",
    title: "Mademoiselle Annette Genève | Personnel de Maison et Courtage immobilier",
    description:
      "Mademoiselle Annette, société basée à Genève, accompagne maisons privées et particuliers exigeants en personnel de maison, organisation privée et courtage immobilier.",
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
    title: "Mademoiselle Annette Geneva | Domestic Staff and Real Estate Brokerage",
    description:
      "Mademoiselle Annette provides domestic staff, private household management and real estate brokerage services for prestigious private residences.",
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
    noindex: true,
    tagline: "Conseils et Solutions",
    subtagline: "Personnel de Maison / Organisation de maison privée / Courtage immobilier",
    body: `
      <div class="intro-card legal-card">
        <p><strong>Propriétaire</strong><br>
        A.JOSSERAND SA<br>
        Siège Social : A. Josserand SA - Rue Jacques Grosselin 8 - 1227 Carouge - Suisse<br>
        N° registre commerce: CH-660.1.193.012-0<br>
        Forme juridique: Société anonyme<br>
        Secteur: Placement de main d'œuvre</p>
        <p><strong>Hébergeur</strong><br>
        Proudly hosted by Cloudflare</p>
      </div>
    `
  }),
  "/uk/mentions-legales": renderPage({
    lang: "en",
    title: "Legal Notice | Mademoiselle Annette",
    description: "Legal notice for Mademoiselle Annette.",
    path: "/uk/mentions-legales",
    noindex: true,
    tagline: "Consulting and Solutions",
    subtagline: "Domestic Staff / Private Household Management / Real Estate Brokerage",
    body: `
      <div class="intro-card legal-card">
        <p><strong>Owner</strong><br>
        A.JOSSERAND SA<br>
        Registered office: A. Josserand SA - Rue Jacques Grosselin 8 - 1227 Carouge - Switzerland<br>
        Commercial register no.: CH-660.1.193.012-0<br>
        Legal form: Public limited company<br>
        Sector: Recruitment and placement of personnel</p>
        <p><strong>Hosting</strong><br>
        Proudly hosted by Cloudflare</p>
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

function renderPage({ lang, title, description, path, noindex = false, tagline, subtagline, body }) {
  const canonical = `${SITE_ORIGIN}${path === "/" ? "/" : path}`;
  const isFrench = lang === "fr-FR";
  const pageLinks = getPageLinks(path);
  return `<!doctype html>
<html lang="${lang}" prefix="og: http://ogp.me/ns#">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="robots" content="${noindex ? "noindex, follow" : "index, follow"}">
  <link rel="canonical" href="${canonical}">
  ${pageLinks ? `<link rel="alternate" hreflang="fr" href="${SITE_ORIGIN}${pageLinks.fr}">` : ""}
  ${pageLinks ? `<link rel="alternate" hreflang="en" href="${SITE_ORIGIN}${pageLinks.en}">` : ""}
  ${pageLinks ? `<link rel="alternate" hreflang="x-default" href="${SITE_ORIGIN}${pageLinks.fr}">` : ""}
  <meta property="og:locale" content="${isFrench ? "fr_FR" : "en_GB"}">
  <meta property="og:type" content="${path.endsWith("mentions-legales") ? "article" : "website"}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:site_name" content="Mademoiselle Annette">
  <meta property="og:image" content="${SITE_ORIGIN}/images/logo_fr-jga.png">
  <meta property="og:image:width" content="580">
  <meta property="og:image:height" content="118">
  <meta property="og:image:alt" content="Mademoiselle Annette">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="theme-color" content="#050504">
  <link rel="stylesheet" href="/style.css">
  ${structuredData({ lang, title, description, canonical })}
</head>
<body class="custom-background full-width custom-font-enabled single-author">
  <div id="page">
    <div id="header_ma">
      <div id="flags">
        <a href="${pageLinks?.fr || "/"}" aria-label="Version française"><span id="flag_fr"></span></a>
        <a href="${pageLinks?.en || "/uk"}" aria-label="English version"><span id="flag_uk"></span></a>
      </div>
      <a class="brand-link" href="${isFrench ? "/" : "/uk"}" aria-label="Mademoiselle Annette"><div id="header_title"></div></a>
      <div id="header_description">
        <h1 class="WhiteChampagne36">${tagline}</h1>
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
      <a href="${isFrench ? "/mentions-legales" : "/uk/mentions-legales"}">${isFrench ? "Mentions L&eacute;gales" : "Legal Notice"}</a></span>
    </div>
  </div>
</body>
</html>`;
}

function getPageLinks(path) {
  if (path === "/" || path === "/uk") {
    return { fr: "/", en: "/uk" };
  }

  if (path === "/mentions-legales" || path === "/uk/mentions-legales") {
    return { fr: "/mentions-legales", en: "/uk/mentions-legales" };
  }

  return null;
}

function structuredData({ lang, title, description, canonical }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_ORIGIN}/#business`,
    name: "Mademoiselle Annette",
    legalName: "A.JOSSERAND SA",
    url: canonical,
    headline: title,
    description,
    image: `${SITE_ORIGIN}/images/logo_fr-jga.png`,
    email: "annette@mademoiselleannette.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rue Jacques Grosselin 8",
      postalCode: "1227",
      addressLocality: "Carouge",
      addressCountry: "CH"
    },
    areaServed: ["Geneva", "Switzerland"],
    knowsLanguage: lang === "fr-FR" ? ["fr", "en"] : ["en", "fr"],
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Personnel de maison" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Organisation de maison privée" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Courtage immobilier" } }
    ]
  };

  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

function sitemapXml() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${SITE_ORIGIN}/</loc><priority>1.0</priority></url>
  <url><loc>${SITE_ORIGIN}/uk</loc><priority>0.9</priority></url>
</urlset>`;
}

function robotsTxt() {
  return `User-agent: *
Allow: /
Sitemap: ${SITE_ORIGIN}/sitemap.xml
`;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/$/, "") || "/";

    if (path === "/robots.txt") {
      return text(robotsTxt(), "text/plain; charset=UTF-8");
    }

    if (path === "/sitemap.xml") {
      return text(sitemapXml(), "application/xml; charset=UTF-8");
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

function text(body, contentType) {
  return new Response(body, {
    headers: { "content-type": contentType }
  });
}
