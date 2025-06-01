import * as fs from "node:fs";
import path from "path";
import { blogs } from "../src/blog/index";

const siteUrl = "https://www.vuluvan.com";

const generateSitemap = () => {
  const blogUrls = blogs.map((post: any) => {
    const url = `${siteUrl}/blog/${post.Slug}`;
    const lastmod = new Date(post.PublishTime).toISOString();

    return `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>0.9</priority>
  </url>`;
  });

  const staticUrls = [
    {
      loc: `${siteUrl}/`,
      lastmod: "2025-02-08T17:26:34+01:00",
      priority: "1.0",
    },
    {
      loc: `${siteUrl}/about`,
      lastmod: "2025-03-01T12:00:00+03:00",
      priority: "0.7",
    },
    {
      loc: `${siteUrl}/projects`,
      lastmod: "2025-03-10T12:00:00+03:00",
      priority: "0.7",
    },
    {
      loc: `${siteUrl}/blog`,
      lastmod: new Date().toISOString(),
      priority: "0.8",
    },
  ].map(
    (page) => `
  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <priority>${page.priority}</priority>
  </url>`,
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticUrls, ...blogUrls].join("\n")}
</urlset>`;

  const outputPath = path.join(__dirname, "..", "public", "sitemap.xml");
  fs.writeFileSync(outputPath, sitemap.trim());

  console.log("✅ sitemap.xml başarıyla oluşturuldu!");
};

generateSitemap();
