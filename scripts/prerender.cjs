const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");
const { chromium } = require("playwright");

const buildDir = path.resolve(__dirname, "../build");
const shell = fs.readFileSync(path.join(buildDir, "index.html"));

const sitemap = fs.readFileSync(path.join(buildDir, "sitemap.xml"), "utf8");

const routes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (match) => new URL(match[1]).pathname,
);

const pages = [
  ...new Set(
    routes.filter((route) => route !== "/" && !route.endsWith(".html")),
  ),
  "/",
];

const mime = {
  ".js": "text/javascript",
  ".css": "text/css",
  ".html": "text/html",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost");
  const relative = decodeURIComponent(url.pathname).replace(/^\/+/, "");

  const requested = path.resolve(buildDir, relative);

  if (requested !== buildDir && !requested.startsWith(buildDir + path.sep)) {
    res.writeHead(403).end();
    return;
  }

  const file =
    fs.existsSync(requested) && fs.statSync(requested).isFile()
      ? requested
      : null;

  res.setHeader(
    "Content-Type",
    file ? mime[path.extname(file)] || "application/octet-stream" : "text/html",
  );

  if (file) {
    fs.createReadStream(file).pipe(res);
  } else {
    res.end(shell);
  }
});

async function main() {
  await new Promise((resolve) => {
    server.listen(0, "127.0.0.1", resolve);
  });

  let browser;

  try {
    browser = await chromium.launch();

    for (const route of pages) {
      const page = await browser.newPage();
      const url = `http://127.0.0.1:${server.address().port}${route}`;

      await page.goto(url, { waitUntil: "load" });

      await page.waitForFunction(
        (article) => {
          const root = document.querySelector("#root");
          if (!root) return false;

          if (article) {
            return Boolean(root.querySelector("section h1"));
          }

          return (
            Boolean(root.querySelector("section")) &&
            root.textContent.trim().length > 20
          );
        },
        route.startsWith("/blog/"),
        { timeout: 20000 },
      );

      await page.evaluate((route) => {
        const titles = {
          "/": "Vuluvan",
          "/about": "About | Vuluvan",
          "/projects": "Projects | Vuluvan",
          "/blog": "Blog | Vuluvan",
        };

        const heading = document
          .querySelector("#root section h1")
          ?.textContent?.trim();

        document.title = titles[route] || `${heading} | Vuluvan`;

        let canonical = document.querySelector('link[rel="canonical"]');

        if (!canonical) {
          canonical = document.createElement("link");
          canonical.rel = "canonical";
          document.head.appendChild(canonical);
        }

        canonical.href = `https://www.vuluvan.com${route}`;
      }, route);

      const target =
        route === "/"
          ? path.join(buildDir, "index.html")
          : path.join(buildDir, "prerendered", `${route.slice(1)}.html`);

      fs.mkdirSync(path.dirname(target), {
        recursive: true,
      });

      fs.writeFileSync(target, await page.content());

      console.log(`Prerender OK: ${route}`);
      await page.close();
    }
  } finally {
    if (browser) await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
